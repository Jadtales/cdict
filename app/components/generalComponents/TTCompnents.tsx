// this is a component for today's topics

// general imports
import './ttcomponents.css'
import bookmark from "@/public/icons/bookmark-circle-svgrepo-com.svg";
import React from "react";
import {ttFlags} from "@/utils/cwUtils";

// imported external components
import CompoFlags from "@/app/components/generalComponents/CompoFlags";

interface ttcomponentsInterface {
    todaysTopic: string;
}

export const TTComponents: React.FC<ttcomponentsInterface> = ({todaysTopic,}) => {
    return (
        <div className="ttCompo_container">
            <div className="componentTopLayer">
                <div className="ttCompo_headlights">
                    <span id="h5Topic">Topic</span>
                    <img src={bookmark.src} alt="saveTopic" width={21}/>
                </div>
                <CompoFlags componentFlag={ttFlags.cwFlag}/>
            </div>
            <h1 id="tt_title">{todaysTopic}</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi atque ea fuga laborum possimus
                quisquam repellendus? Aliquid, blanditiis, dolore inventore iste minima nostrum numquam omnis quam
                repudiandae sequi soluta.
            </p>
        </div>
    )
}