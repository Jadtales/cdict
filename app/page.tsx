import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <main className={styles.main}>
            <nav className="navBar">
                <div className="fanIcon">
                    <Image src="" alt=""/>
                </div>

                <div className="actionButtons">
                    <button><Link href="/app/components/userRegistration">Log In</Link></button>
                    <button><Link href="/app/components/main_page">Get Started</Link></button>
                </div>
            </nav>

            <div className="landingPage_header">
                <h1>
                    Unlock the Infinite World of
                    Computer Science and Mathematics Knowledge
                </h1>

                <h5>Learn new topics everyday that will boost your knowledge</h5>
            </div>

            <div className="userRegistration">
                <input type="email"/>
                <button type={"submit"}>Sign Up</button>
            </div>

            <div className="todaysTopics">
                <div className="todaysTopics_insights">
                    <h2>Today's Topics</h2>
                    <h2>Explore More</h2>
                </div>
            </div>


        </main>
    );
}
