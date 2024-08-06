'use server'

// -- imported components
import {verifyAuthUser} from "@/utils/dbUtils/sessionsUtils";
import {redirect} from "next/navigation";

export default async function UserStats() {

    const auth = await verifyAuthUser() // deletes the id from users_sessions database
    console.log("User stats-->", auth)
    if (!auth) {
        redirect('/routes/userRegistration/login')
    }

    return <>
        <div className="userstats_container">

            {auth ? (<h1>you're in</h1>) : (<h1>you are not in</h1>)}
        </div>

    </>
}