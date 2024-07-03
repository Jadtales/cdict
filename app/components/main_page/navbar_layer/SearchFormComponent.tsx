'use client'

import React, {Fragment} from "react";
import sfmStyle from './searchformcomponent.module.css'

// imported icons
import bookmark from '@/public/icons/bookmark-circle-svgrepo-com.svg'

interface SearchedUpDiv_interface {
    lookedUpTopic: string;
    lpclassName?: any
}

export const SearchFormComponent: React.FC<SearchedUpDiv_interface> = ({lookedUpTopic, lpclassName}) => {
    return (
        <Fragment>
            <div className={`${sfmStyle.searchedUpDiv} ${lpclassName}`}>
                <div className={`${sfmStyle.searchedUpDiv_userChoice} ${lpclassName}`}>
                    <h5>Topic</h5>
                    <img src={bookmark.src} alt="saveTopic" />
                </div>
                <h1 className={`${sfmStyle.searchedUpWord} ${lpclassName}`}>{lookedUpTopic}</h1>
                <p className={`${sfmStyle.topic} ${lpclassName}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt illo magni nihil perferendis
                    quisquam. A ab amet asperiores aspernatur assumenda, deserunt, esse illo natus officiis quo sapiente
                    soluta, totam ullam.</p>

            </div>
        </Fragment>
    )
}
