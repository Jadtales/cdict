'use client'

import React, {Fragment, useEffect, useState} from "react";
import './navbar.css'

// imported components
import {SearchFormComponent} from "./SearchFormComponent";

// imported icons
import bookmarkIcon from '@/public/icons/bookmark-circle-svgrepo-com.svg'
import searchIcon from '@/public/icons/search-alt-2-svgrepo-com.svg'
import chartIcon from '@/public/icons/donut-chart-line.svg'
import settingIcon from '@/public/icons/settings-line.svg'
import userLineIcon from '@/public/icons/user-line.svg'

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


    return (
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
                                <img src={bookmarkIcon.src} alt="bookmark"/>
                            </button>
                        </li>

                        {/*input/search button*/}
                        <li className="navbar_item">
                            <button id="searchIcon-button" type="submit">
                                <img src={searchIcon.src} alt="searchIcon" id="searchIcon"/>
                                <input type="search" id="searchInput" placeholder="look up wisdome"/>
                            </button>
                        </li>
                        <li className="navbar_item">
                            <button id="processButton">
                                <img src={chartIcon.src} alt="process"/>
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="navbar_section navbar_section-right">
                    <ul className="navbar_list">
                        <li className="navbar_item">
                            <button id="settingsIcon">
                                <img src={settingIcon.src} alt="progress"/>
                            </button>
                        </li>

                        <li className="navbar_item">
                            <button id="userButton">
                                <img src={userLineIcon.src} alt="me"/>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="searchedUpDiv_container">
                <SearchFormComponent lookedUpTopic={"buffer"}/>
                <SearchFormComponent lookedUpTopic={"StringBuffer"}/>
                <SearchFormComponent lookedUpTopic={"StringBuffer"}/>
                <SearchFormComponent lookedUpTopic={"StringBuffer"}/>
                <SearchFormComponent lookedUpTopic={"StringBuffer"}/>
                <SearchFormComponent lookedUpTopic={"StringBuffer"}/>
            </div>
        </div>
    )
}