import './searchformcomponent.css.css'
import React, {Fragment} from "react";

interface SearchedUpDiv_interface {
    lookedUpTopic: string;
}

export const SearchedUpDiv: React.FC<SearchedUpDiv_interface> = ({lookedUpTopic}) => {
    return (
        <Fragment>
            <div id="searchedUpDiv">
                <div className="searchedUpDiv_userChoice">
                    <h5>Topic</h5>
                    <img src="/src/icons/bookmark-circle-svgrepo-com.svg" alt="saveTopic" />
                </div>
                <h1 id="searchedUp-word">{lookedUpTopic}</h1>
                <p id="topic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt illo magni nihil perferendis
                    quisquam. A ab amet asperiores aspernatur assumenda, deserunt, esse illo natus officiis quo sapiente
                    soluta, totam ullam.</p>

            </div>
        </Fragment>
    )
}
