'use client'
import './mainpage.css'
import React from "react";
import Link from "next/link";
import Image from "next/image";


// imported funcs
import {ttFlags} from "@/utils/cwUtils";

// imported components
import NavBarLayer from "./navbar_layer/NavBarLayer"
import {TTComponents} from "@/app/components/generalComponents/TTCompnents";
import MPSKComponent from "@/app/components/generalComponents/MPSKComponent";

// imported icons
import bookmark from "@/public/icons/bookmark-circle-svgrepo-com.svg";
import CompoFlags from "@/app/components/generalComponents/CompoFlags";
import gotoComponent from "@/public/icons/arrow-right-line.svg";

export default function MainPage() {
    return (
        <div id="mainpage">
            <NavBarLayer/>

            <div className="mainpageContent">
                <div className="dailyTTContainer">
                    <h1 style={{marginBottom: '20px', fontSize: '2.5rem'}}>Today's recommendation.</h1>
                    <div className="ttContainer">
                        <TTComponents todaysTopic={'test'}/>
                        <TTComponents todaysTopic={'buffer'}/>
                        <TTComponents todaysTopic={'streams'}/>
                        <TTComponents todaysTopic={'buffer'}/>
                    </div>
                </div>

                <div className="searchedOnTopic">
                    <h1 style={{marginBottom: '20px', fontSize: '2.5rem'}}>Take notes.</h1>

                    <div className="mpskComponent">
                        <MPSKComponent />
                        <MPSKComponent />
                        <MPSKComponent />
                        <MPSKComponent />
                    </div>
                </div>
            </div>

        </div>
    )
}