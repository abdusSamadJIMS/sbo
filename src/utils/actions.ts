// // 

// "use server";

// import { InitialStateType } from "@/components/contact/ContactForm";
// import { z } from "zod";

// // Define your validation schema
// const formEntrySchema = z.object({
//     name: z.string().min(1).max(50),
//     email: z.string().email(),
//     phone: z.string().min(4).max(15),
//     message: z.string().min(5).max(500),
//     subject: z.string().min(1).max(200),
//     service: z.string().min(1),
// });

// // Helper function to convert FormData to a plain object
// function formDataToObject(formData: FormData): Record<string, any> {
//     const obj: Record<string, any> = {};
//     formData.forEach((value, key) => {
//         obj[key] = value;
//     });
//     return obj;
// }

// export async function newContactFromEntry(
//     prevState: InitialStateType,
//     formData: FormData
// ) {
//     const plainData = formDataToObject(formData); // Convert FormData to an object

//     // Validate form data using Zod
//     const parse = formEntrySchema.safeParse(plainData);

//     if (!parse.success) {
//         throw new Error(parse.error.message);
//     }

//     const { name, email, phone, message, subject, service } = parse.data;

//     // Process the validated data (e.g., save to a database, send an email, etc.)
//     console.log("Contact Form Data:", name, email, phone, message, subject, service);

//     return {
//         name,
//         email,
//         phone,
//         message,
//         subject,
//         service,
//         success: true,
//     };
// }


"use server";

import { InitialStateType } from "@/components/contact/ContactForm";
import { z } from "zod";

// Define your validation schema
const formEntrySchema = z.object({
    name: z.string().min(1).max(50),
    email: z.string().email(),
    phone: z.string().min(4).max(15),
    message: z.string().min(5).max(500),
    subject: z.string().min(1).max(200),
    service: z.string().min(1),
});

// Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwW3mT1J6My5RP421AB1G3pWxB_1T05Ue2NqcdxijzRoySgoU6TAWPtZdBXAnsaLViH5A/exec";

export async function newContactFromEntry(
    prevState: InitialStateType,
    formData: FormData
) {
    try {
        // Convert FormData to plain object
        const plainData = Object.fromEntries(formData.entries());

        // Validate form data using Zod
        const parse = formEntrySchema.safeParse(plainData);

        if (!parse.success) {
            const errorMap = parse.error.flatten().fieldErrors;
            return {
                ...prevState,
                success: false,
                error: "Validation failed",
                fieldErrors: errorMap
            };
        }

        const { name, email, phone, message, subject, service } = parse.data;

        // Prepare data for Google Apps Script
        const payload = {
            name,
            email,
            phone,
            message,
            subject,
            service
        };

        // Create URL with payload as query parameters
        const url = new URL(GOOGLE_SCRIPT_URL);
        Object.entries(payload).forEach(([key, value]) => {
            url.searchParams.append(key, value);
        });

        // Send data to Google Apps Script
        const response = await fetch(url.toString(), {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            // Required for Google Apps Script Web Apps
            redirect: "manual"
        });

        // Check if the response is a redirect
        if (response.status >= 300 && response.status < 400) {
            // Follow the redirect manually
            const redirectUrl = response.headers.get("location");
            if (redirectUrl) {
                const redirectResponse = await fetch(redirectUrl, {
                    method: "GET",
                    redirect: "manual"
                });

                if (!redirectResponse.ok) {
                    throw new Error('Failed to submit to Google Sheets');
                }
            }
        } else if (!response.ok) {
            throw new Error('Failed to submit to Google Sheets');
        }

        return {
            name: "",
            email: "",
            phone: "",
            message: "",
            subject: "",
            service: "",
            success: true
        };

    } catch (error) {
        console.error("Error submitting form:", error);
        return {
            ...prevState,
            success: false,
            error: "Failed to submit form. Please try again later."
        };
    }
}