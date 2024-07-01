import React, {Fragment, useEffect, useState} from "react";
import './navbar.css'

// imported components
import {SearchedUpDiv} from "./SearchedUpDiv.tsx";

export default function Navbar() {

    const handleNavBarStyling = (): void => {
        const navBarContainer = document.querySelector('.navbar_container') as HTMLDivElement
        const searchInputElement = document.querySelector('#searchInput') as HTMLInputElement
        const searchedUpDivContainer = document.querySelector('.searchedUpDiv_container') as HTMLDivElement

        // searchedUpDivContainer.style.display = 'block'
        // searchedUpDivContainer.style.opacity = '1'
        // searchedUpDivContainer.style.transition = '1s ease'

        navBarContainer.classList.toggle('navbar_container-clicked')


        searchInputElement.style.display = 'block'
        searchInputElement.style.width = '10vw'
        searchInputElement.style.transition = '350ms ease-out'

        searchInputElement.classList.toggle('searchInput-clicked')

        // searchInputElement.addEventListener('focusout', () => {
        //     navBarContainer.style.height = '60px'
        //     searchedUpDivContainer.style.display = 'none'
        //     searchedUpDivContainer.style.opacity = '0'
        //     searchedUpDivContainer.style.transition = '1s ease'
        // })
    }


    return (<Fragment>
        <div className="navbar_container">
            {/*todo: center the search icon in the center of the DOM*/}
            <nav className="navbar_navigation">
                <div className="navbar_section navbar_section-left">
                    <ul className="navbar_list">
                        <li className="navbar_item">
                            <a href="#community" className="navbar_link">Community</a>
                        </li>
                        <li className="navbar_item">
                            <a href="#guidance" className="navbar_link">Guidance</a>
                        </li>
                    </ul>
                </div>

                <div className="navbar_section navbar_section-center">
                    <ul className="navbar_list">
                        <li className="navbar_item">
                            <button id="bookmarkIcon">
                                <img src="/src/icons/bookmark-circle-svgrepo-com.svg" alt="bookmark"/>
                            </button>
                        </li>

                        {/*input/search button*/}
                        <li className="navbar_item">
                            <button id="searchIcon-button" type="submit">
                                <img src="/src/icons/search-alt-2-svgrepo-com.svg" alt="searchIcon" id="searchIcon"/>
                                <input type="search" id="searchInput" placeholder="look up wisdome"/>
                            </button>
                        </li>
                        <li className="navbar_item">
                            <button id="processButton">
                                <img src="/src/icons/donut-chart-line.svg" alt="process"/>
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="navbar_section navbar_section-right">
                    <ul className="navbar_list">
                        <li className="navbar_item">
                            <button id="settingsIcon">
                                <img src="/src/icons/settings-line.svg" alt="progress"/>
                            </button>
                        </li>

                        <li className="navbar_item">
                            <button id="userButton">
                                <img src="/src/icons/user-line.svg" alt="me"/>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
            {/*<div className="searchedUpDiv_container">*/}
            {/*    <SearchedUpDiv lookedUpTopic={"buffer"}/>*/}
            {/*    <SearchedUpDiv lookedUpTopic={"StringBuffer"}/>*/}
            {/*    <SearchedUpDiv lookedUpTopic={"StringBuffer"}/>*/}
            {/*    <SearchedUpDiv lookedUpTopic={"StringBuffer"}/>*/}
            {/*    <SearchedUpDiv lookedUpTopic={"StringBuffer"}/>*/}
            {/*    <SearchedUpDiv lookedUpTopic={"StringBuffer"}/>*/}
            {/*</div>*/}
        </div>
    </Fragment>)
}