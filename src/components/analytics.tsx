import { GoogleAnalytics } from '@next/third-parties/google'
import React from 'react'

const Analytics = () => {
    return (
        <>
            <GoogleAnalytics
                gaId='G-9Z2680GHZK'
            />
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GRM-PT76GSW8"
                    height="0"
                    width="0"
                    style={{ display: "none", visibility: "hidden" }}
                ></iframe>
            </noscript>
        </>
    )
}

export default Analytics