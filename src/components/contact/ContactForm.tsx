'use client'
import { newContactFromEntry } from '@/utils/actions'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '@/app/thankyou/thankyou.module.css'

import React, { useEffect } from 'react'
import { useFormState, useFormStatus } from 'react-dom';

export type InitialStateType = {
    name: string
    email: string
    phone: string
    subject: string
    message: string
    service: string;
    success: boolean;

}

const initialState = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: "",
    success: false
}

const services = [
    "Performance Marketing",
    "Social Media Management",
    "Website Development",
    "Video Production (Reel)",
    "Script Writing",
    "Photography",
    "Graphic Designing",
    "Influencer Marketing"
]

const ContactForm = () => {
    const [state, formAction] = useFormState(newContactFromEntry, initialState);
    const formRef = React.useRef<HTMLFormElement>(null);



    if (!state.success) {
        return (
            <form
                className='contact_form'
                ref={formRef}
                action={(f) => {
                    formAction(f);
                }}



            >
                <div className="row">
                    <div className="cs_field_group col">
                        <input defaultValue={state.name} className="cs_input_field" type="text" id="name" placeholder="Name"
                            name="name" required />
                        <label htmlFor="name" className="cs_input_label">Name</label>
                    </div>
                    <div className="cs_field_group col">
                        <input defaultValue={state.email} className="cs_input_field" type="email" id="email" placeholder="Name"
                            name="email" required />
                        <label htmlFor="email" className="cs_input_label">Email</label>
                    </div>
                </div>
                <div className="cs_height_10 cs_height_lg_20"></div>
                <div className="row">
                    <div className="cs_field_group col">
                        <input className="cs_input_field" type="text" id="phone" placeholder="Name"
                            name="phone" defaultValue={state.phone} required />
                        <label htmlFor="phone" className="cs_input_label">Phone</label>
                    </div>
                    <div className="cs_field_group col">
                        <input className="cs_input_field" type="text" id="subject" placeholder="Name"
                            name="subject" defaultValue={state.subject} required />
                        <label htmlFor="subject" className="cs_input_label">Subject</label>
                    </div>
                    <div className="cs_field_group">
                        <select className="cs_input_field" id="test5"
                            name="service"
                            defaultValue={state.service}
                            required
                        >
                            <option value="">Select Service</option>
                            {
                                services.map((service) => (
                                    <option key={service} value={service}
                                        style={{ "color": "black" }}
                                    >{service}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className="cs_height_100 cs_height_lg_60"></div>
                <div className="cs_field_group">
                    <input className="cs_input_field" type="text" id="message" placeholder="Message"
                        name="message" defaultValue={state.message} required />
                    <label htmlFor="message" className="cs_input_label">Message</label>
                </div>
                <div className="cs_height_60 cs_height_lg_60"></div>
                <SubmitButton />
            </form >
        )
    }
    else {
        return (
            <div className={styles.card}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}>
                        <svg
                            className={styles.icon}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <h1 className={styles.title}>Thank You!</h1>
                </div>
                <div className={styles.content}>
                    <p className={styles.message}>
                        We have received your query and will get back to you as soon as possible.
                        Thank you for reaching out to us.
                    </p>
                    {/* <p className={styles.redirectMessage}>
                    Redirecting to the home page in <strong>{countdown} second{countdown !== 1 ? 's' : ''}...</strong>
                </p> */}
                </div>
                <div className={styles.footer}>
                    <Link href="/" className={styles.button}>
                        Return to Home Now
                    </Link>
                </div>
            </div>
        )
    }
}


const SubmitButton = () => {
    const { pending } = useFormStatus()
    return (
        <button type="submit" aria-disabled={pending} disabled={pending} className="cs_btn cs_style_1 cs_type_btn">
            <span>{pending ? "Sending ..." : "Send Now"}</span>
            <svg width="19" height="13" viewBox="0 0 19 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                    fill="currentColor"></path>
            </svg>
        </button>
    )
}

export default ContactForm
