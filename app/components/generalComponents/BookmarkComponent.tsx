'use client'

import Image from 'next/image'
import bookmarkIcon from '@/public/icons/bookmark-circle-svgrepo-com.svg'
import './bookmarkCompo.css'
import {useState} from "react";


export function BookmarkComponent() {
    const [isBKActive, setIsBKActive] = useState<boolean>(false)

    const handleBKWidthExpansion = (): void => {
        setIsBKActive(!isBKActive)
    }

    return (
        <div className={`bookmark_container ${isBKActive ? 'bookmark_container-active' : ''}`} onClick={handleBKWidthExpansion}>
            <Image src={bookmarkIcon} alt='bookmark' width={21}/>
        </div>
    )
}