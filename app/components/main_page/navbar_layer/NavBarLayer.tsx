'use client'

import './navbar.css'
import Image from 'next/image'
import {useState} from "react";
import {useRouter} from "next/navigation";

// imported components
import {SearchFormComponent} from "./SearchFormComponent";

// imported icons
import bookmarkIcon from '@/public/icons/bookmark-circle-svgrepo-com.svg'
import searchIcon from '@/public/icons/search-alt-2-svgrepo-com.svg'
import chartIcon from '@/public/icons/donut-chart-line.svg'
import settingIcon from '@/public/icons/settings-line.svg'
import userLineIcon from '@/public/icons/user-line.svg'
import themeModeIcon from '@/public/icons/moon-line.svg'


export default function Navbar() {
    const [isActive, setIsActive] = useState<boolean>(false)
    const router = useRouter()

    const handleNavBarStyling = (): void => {
        const navBarContainer = document.querySelector('.navbar_container') as HTMLDivElement
        const searchInputElement = document.querySelector('#searchInput') as HTMLInputElement
        const searchedUpDivContainer = document.querySelector('.searchedUpDiv_container') as HTMLDivElement

        navBarContainer.classList.toggle('navbar_container-clicked')


        searchInputElement.style.display = 'block'
        searchInputElement.style.width = '10vw'
        searchInputElement.style.transition = '350ms ease-out'

        searchInputElement.classList.toggle('searchInput-clicked')
    }

    const handleInputSizeExpansion = (): void => {
        setIsActive(!isActive)

    }

    const handlePagesRouting = (path: string): void => {
        router.push(path)
    }


    return (
        <div className="navbar_container">
            {/*todo: center the search icon in the center of the DOM*/}
            <nav className="navbar_navigation">
                <div className="navbar_section navbar_section-left">
                    <button>
                        <Image src={themeModeIcon} alt='thememode'/>
                    </button>
                </div>

                <div className="navbar_section navbar_section-center">
                    {/*input/search button*/}
                    <button id="searchIcon-button" type="submit" onClick={handleInputSizeExpansion}
                            className={isActive ? 'searchIcon-button-active' : ''}>
                        <img src={searchIcon.src} alt="searchIcon" id="searchIcon"/>
                        <input type="search" placeholder="look up wisdome"
                               className={isActive ? 'searchInput-active' : ''}/>
                    </button>

                    <button id="bookmarkIcon" onClick={() => handlePagesRouting('/routes/bookmarks')}>
                        <Image src={bookmarkIcon} alt="bookmark"/>
                    </button>

                    <button id="processButton" onClick={() => handlePagesRouting('/routes/stats')}>
                        <Image src={chartIcon} alt="process"/>
                    </button>
                </div>

                <div className="navbar_section navbar_section-right">
                    <button id="settingsIcon">
                        <Image src={settingIcon} alt="progress"/>
                    </button>

                    <button id="userButton">
                        <Image src={userLineIcon} alt="me"/>
                    </button>
                </div>
            </nav>
            {/*<div className="searchedUpDiv_container">*/}
            {/*    <SearchFormComponent lookedUpTopic={"buffer"}/>*/}
            {/*    <SearchFormComponent lookedUpTopic={"StringBuffer"}/>*/}
            {/*    <SearchFormComponent lookedUpTopic={"StringBuffer"}/>*/}
            {/*    <SearchFormComponent lookedUpTopic={"StringBuffer"}/>*/}
            {/*    <SearchFormComponent lookedUpTopic={"StringBuffer"}/>*/}
            {/*    <SearchFormComponent lookedUpTopic={"StringBuffer"}/>*/}
            {/*</div>*/}
        </div>
    )
}