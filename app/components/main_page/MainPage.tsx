'use client'
import './mainpage.css'
import React from "react";
import {usePathname} from "next/navigation";


// imported icons
import bookmark from "@/public/icons/bookmark-circle-svgrepo-com.svg";
import CompoFlags from "@/app/components/generalComponents/CompoFlags";
import gotoComponent from "@/public/icons/arrow-right-line.svg";
import {BookmarkComponent} from "@/app/components/generalComponents/BookmarkComponent";
import UserStats from "@/app/components/userStats/UserStats";
import UserSavedComponents from '@/app/components/generalComponents/UserSavedComponents'

export default function MainPage() {
    const pathname = usePathname()

    return (
        <div id="mainpage">
            <div className="searchedOnTopic">
                <h1 style={{marginBottom: '20px', fontSize: '2.5rem'}}>
                    {pathname.startsWith('/routes/bookmarks') && ('Bookmarked topics. Take notes.')}
                    {pathname.startsWith('/routes/stats') && ('Measure your learning progress.')}
                </h1>

                <div className="mpskComponent">
                    {pathname.startsWith('/routes/bookmarks') && <UserSavedComponents/>}
                    {pathname.startsWith('/routes/stats') && <UserStats/>}

                </div>
            </div>

        </div>
    )
}