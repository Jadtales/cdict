import Link from "next/link";
import Image from "next/image";

// import go-to-cw icon
import DiscoverMoreAboutCW_ICON from "@/public/icons/arrow-right-line.svg"

export default function AppFooter() {
    return (
        <footer id="pagesFooter">
            <div className="footer_mainContent">
                <ul>
                    <li><Link href={"/cwpolicies"}>Policies</Link></li>
                    <li><Link href={"/lacw"}>Learn about CW</Link></li>
                </ul>

                <Link href={"/cw"} id="toCWDiscoveryPage">
                    <Image src={DiscoverMoreAboutCW_ICON} alt="go-to-CW"/>
                </Link>
            </div>
        </footer>
    )
}