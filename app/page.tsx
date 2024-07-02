import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

// imported icon
import cwIcon from "@/public/icons/arrow-right-line.svg"
import emailIcon from "@/public/icons/login-circle-fill.svg"

export default function Home() {

    return (

        <main className={styles.main}>
            <nav className={styles.navbar}>
                <div className="fanIcon" style={
                    {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }
                }>
                    {/*todo: the cw icon must change after designing a new one*/}
                    <Image src={cwIcon} alt="cwIcon"/> cw@support.com
                </div>

                <div className={styles.startingAndRegiButtons}>
                    <button className={styles.stdButtonsStyle}>
                        <Link href="/app/components/userRegistration" className={styles.stdTxtLinks}>Log In</Link>
                    </button>
                    <button className={`${styles.stdButtonsStyle} ${styles.stdTxtHasBlackBC}`}>
                        <Link href="/app/components/main_page"
                              className={`${styles.stdTxtLinks} ${styles.stdTxtHasBlackBC}`}>Get Started</Link>
                    </button>
                </div>
            </nav>

            <div className={styles.landingPage_header}>
                <h1>
                    Unlock the Infinite World of
                    Computer Science and Mathematics Knowledge.
                </h1>

                <h5 style={{fontWeight: "lighter"}}>Learn new topics everyday that will boost your knowledge</h5>
            </div>

            <div className={styles.stdEmailInputButtonCentering}>
                <button style={{border: 'none'}}>
                    <Image src={emailIcon} alt={emailIcon} className={styles.stdInputsIconStyling}/>
                    <input type="email" className={styles.stdInputStyling}/>
                </button>
                <button type={"submit"} className={`${styles.stdTxtHasBlackBC} ${styles.stdButtonsStyle}`}>Sign Up
                </button>
            </div>

            <div >
                <div className={styles.todaysTopics_headlights}>
                    <h2>Today's Topics</h2>
                    <h2>Explore More</h2>
                </div>
            </div>


        </main>
    );
}
