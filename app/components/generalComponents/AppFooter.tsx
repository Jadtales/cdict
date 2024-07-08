import Link from "next/link";
import Image from "next/image";

import './appfooter.css'

// import go-to-cw icon
import DiscoverMoreAboutCW_ICON from "@/public/icons/arrow-right-line.svg"
import React from "react";

export default function AppFooter() {
    return (
        <footer id="pagesFooter">
            <hr style={{width: '100%', margin: '20px 0'}}/>

            <div className="footerContentWrapper">
                <div className="footer_mainContent">
                    <ul>
                        <li><Link href={"/cwpolicies"}>Policies</Link></li>
                        <li><Link href={"/cwguidance"}>Guidance</Link></li>
                    </ul>

                    <Link href={"/cw"} id="toCWDiscoveryPage">
                        <Image src={DiscoverMoreAboutCW_ICON} alt="go-to-CW"/>
                    </Link>
                </div>
            </div>

        </footer>
    )
}