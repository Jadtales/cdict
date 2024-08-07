// this is a component for today's topics

import './ttcomponents.css'
import React from "react";
import Image from "next/image";
import Link from "next/link"

// general imports
import bookmark from "@/public/icons/bookmark-circle-svgrepo-com.svg";
import gotoComponent from '@/public/icons/arrow-right-line.svg'
import {ttFlags} from "@/utils/stylingUtils/cwUtils";

// imported external components
import CompoFlags from "@/app/components/generalComponents/CompoFlags";
import {BookmarkComponent} from "@/app/components/generalComponents/BookmarkComponent";

interface ttcomponentsInterface {
    todaysTopic: string;
}

export const TTComponents: React.FC<ttcomponentsInterface> = ({todaysTopic,}) => {
    return (
        <div className="ttCompo_container">
            <div className="componentTopLayer">
                <div className="ttCompo_headlights">
                    <span id="h5Topic">Topic</span>
                    <BookmarkComponent />
                </div>
                <CompoFlags componentFlag={ttFlags.cwFlag}/>
            </div>
            <h1 id="tt_title">{todaysTopic}</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi atque ea fuga laborum possimus
                quisquam repellendus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi atque ea fuga laborum possimus
                quisquam repellendus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi atque ea fuga laborum possimus
                quisquam repellendus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi atque ea fuga laborum possimus
                quisquam repellendus?
            </p>

            <hr style={{margin: '20px 0', borderColor: 'black'}}/>

            <div className="ttCompo_briefIntro">
                <CompoFlags componentFlag={ttFlags.learningDuration.longRead}/>

                <Link href={"/toCompo"} id="gotoCompoLink">
                    <Image src={gotoComponent} alt="gotoComponent" id="CompoGoTo" width={20}/>
                </Link>
            </div>

        </div>
    )
}