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
            <div className="ttCompo_headlights">
                <span id="h5Topic">Topic</span>
                <img src={bookmark.src} alt="saveTopic" width={21}/>
                <div className="ttCompoFlags">
                    <CompoFlags componentFlag={ttFlags.cwFlag}/>
                </div>
            </div>
            <h1>{todaysTopic}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt illo magni nihil perferendis
                soluta, totam ullam.</p>
        </div>
    )
}