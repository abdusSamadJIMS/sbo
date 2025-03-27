"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import styles from "./thankyou.module.css"

export default function ThankYouPage() {
    const router = useRouter()
    const [countdown, setCountdown] = useState(4)

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    clearInterval(timer)
                    router.push("/")
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer) // Cleanup on unmount
    }, [router])

    return (
        <div className={styles.container}>
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
        </div>
    )
}