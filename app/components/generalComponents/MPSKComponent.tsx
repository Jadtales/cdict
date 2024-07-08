import bookmark from "@/public/icons/bookmark-circle-svgrepo-com.svg";
import CompoFlags from "@/app/components/generalComponents/CompoFlags";
import {ttFlags} from "@/utils/cwUtils";
import Link from "next/link";
import Image from "next/image";
import gotoComponent from "@/public/icons/arrow-right-line.svg";
import React from "react";

import './mpsk.css'

export default function MPSKComponent() {
    return (
        <div className="mpsk_container">
            <div className="componentTopLayer">
                <div className="mpsk_headlights">
                    <span id="mpsk_h5Topic">Topic</span>
                    <img src={bookmark.src} alt="saveTopic" width={21}/>
                </div>
                <CompoFlags componentFlag={ttFlags.cwFlag}/>
            </div>
            <h1 id="mpsk_title">{`magic`}</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi atque ea fuga laborum
                possimus
                quisquam repellendus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi
                atque ea fuga laborum possimus
                quisquam repellendus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi
                atque ea fuga laborum possimus
                quisquam repellendus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi
                atque ea fuga laborum possimus
                quisquam repellendus?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi atque ea fuga laborum
                possimus
                quisquam repellendus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi
                atque ea fuga laborum possimus
                quisquam repellendus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi
                atque ea fuga laborum possimus
                quisquam repellendus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi
                atque ea fuga laborum possimus
                quisquam repellendus?
            </p>

            <hr style={{margin: '20px 0', borderColor: 'black'}}/>

            <div className="mpsk_briefIntro">
                <CompoFlags componentFlag={ttFlags.learningDuration.longRead} className="test"/>

                <Link href={"/toCompo"} id="gotoCompoLink">
                    <Image src={gotoComponent} alt="gotoComponent" id="CompoGoTo" width={20}/>
                </Link>
            </div>

        </div>
    )
}
