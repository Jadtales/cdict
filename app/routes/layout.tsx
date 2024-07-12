'use client'

import React from 'react';
import './forlayout.css'

import NavBarLayer from "@/app/components/bookmarkPage/navbar_layer/NavBarLayer";
import {TTComponents} from "@/app/components/generalComponents/TTCompnents"; // Optional: Add any layout-specific styles here
import UserBookmarksPage from "@/app/routes/bookmarks/page";
import UserStats from "@/app/routes/stats/page";
import {usePathname} from "next/navigation";
import SearchInputPage from "@/app/routes/searchForKeywords/page";
import UserRegistrationForm from "@/app/routes/userRegistration/page";

const RoutesLayout: React.FC = ({children}: { children: React.ReactNode }) => {
    const pathname = usePathname()

    return (
        <div id="routes-layout">
            <NavBarLayer/>
            {!pathname.startsWith('/routes/userRegistration') ? (<div className="content">
                <div className="dailyTTContainer">
                    <h1 style={{marginBottom: '20px', fontSize: '2.5rem'}}>Today's recommendation.</h1>
                    <div className="ttContainer">
                        <TTComponents todaysTopic={'test'}/>
                        <TTComponents todaysTopic={'buffer'}/>
                        <TTComponents todaysTopic={'streams'}/>
                        <TTComponents todaysTopic={'buffer'}/>
                    </div>
                </div>
                {/*<main>{children}</main>*/}

                <div id="mainpage">
                    <div className="searchedOnTopic">
                        <h1 style={{marginBottom: '20px', fontSize: '2.5rem'}}>
                            {pathname.startsWith('/routes/bookmarks') && ('Bookmarked topics. Take notes.')}
                            {pathname.startsWith('/routes/stats') && ('Measure your learning progress.')}
                            {pathname.startsWith('/routes/searchForKeywords') && ('Search for wisdom...')}

                        </h1>

                        <div className="mpskComponent">
                            {pathname.startsWith('/routes/bookmarks') && < UserBookmarksPage/>}
                            {pathname.startsWith('/routes/stats') && <UserStats/>}
                            {pathname.startsWith('/routes/searchForKeywords') && <SearchInputPage/>}
                        </div>
                    </div>
                </div>
            </div>) : <UserRegistrationForm/>}


        </div>
    );
};

export default RoutesLayout;