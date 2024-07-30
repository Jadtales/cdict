'use server'

// -- imported components
// import MainPage from '@/app/components/bookmarkPage/MainPage'
import {verifyAuthUser} from "@/utils/dbUtils/sessionsUtils";
import {redirect} from "next/navigation";

export default async function UserStats() {

    const isUserLoggedIn = await verifyAuthUser()
    // if (!isUserLoggedIn.user) {
    //     return redirect('/routes/userRegistration/login')
    // }

    return <>
        {isUserLoggedIn ? <div>You must be loggedIn to view your latest learning stats</div> :
            <div className="userstats_container">
                <h1>user stats</h1>
            </div>}

    </>


}