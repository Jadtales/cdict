import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";


// imported components
import {TTComponents} from "@/app/components/generalComponents/TTCompnents";

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
                    <Link href="/routes/bookmarks">
                        <button className={`${styles.stdButtonsStyle} ${styles.stdTxtHasBlackBC}`}>
                            Get Started
                        </button>
                    </Link>
                </div>
            </nav>

            <div className={styles.landingPage_header}>
                <h1>
                    Unlock the Infinite World of
                    <span className={styles.stdHighlightedKeywords}> Computer Science</span> and <span
                    className={styles.stdHighlightedKeywords}> Mathematics</span> Knowledge.
                </h1>

                <h5 style={
                    {fontWeight: "lighter", width: '100%', fontSize: '.7em', border: 'none', marginTop: '2%'}
                }>Learn new topics everyday that will boost your knowledge</h5>
            </div>

            <div className={styles.stdEmailInputButtonCentering}>
                <button style={{border: 'none'}}>
                    <Image src={emailIcon} alt={emailIcon} className={styles.stdInputsIconStyling}/>
                    <input type="email" className={styles.stdInputStyling}/>
                </button>
                <button type={"submit"} className={`${styles.stdTxtHasBlackBC} ${styles.stdButtonsStyle}`}>Sign Up
                </button>
            </div>

            <div>
                <div className={styles.todaysTopics_headlights}>
                    <h2>Today's Topics</h2>
                    <h2>Explore More</h2>
                </div>

                <div className={styles.todaystopicsContainer}>
                    <div className={styles.todaysTopics_components}>
                        <TTComponents todaysTopic={'test'}/>
                        <TTComponents todaysTopic={'buffer'}/>
                        <TTComponents todaysTopic={'streams'}/>
                        <TTComponents todaysTopic={'test'}/>
                    </div>
                </div>
            </div>


        </main>
    );
}
