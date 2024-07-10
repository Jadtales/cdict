'use client'

import Image from 'next/image'
import bookmarkIcon from '@/public/icons/bookmark-circle-svgrepo-com.svg'
import './bookmarkCompo.css'
import {useEffect, useState, KeyboardEvent} from "react";


export function BookmarkComponent() {
    const [isBKActive, setIsBKActive] = useState<boolean>(false);
    const [keyPressed, setKeyPressed] = useState<string>('');

    const handleBKWidthExpansion = (): void => {
        setIsBKActive(!isBKActive);
    };

    const handlePressedKeys = (event: KeyboardEvent): void => {
        setKeyPressed(event.key);

        if (event.key === 'Escape') {
            setIsBKActive(false); // Close the bookmark container on Escape key
        }
    };
    useEffect(() => {
        document.addEventListener('keydown', () => handlePressedKeys);

        return () => {
            document.removeEventListener('keydown', () => handlePressedKeys);
        };
    }, []);

    return (
        <div
            className={`bookmark_container ${isBKActive ? 'bookmark_container-active' : 'bookmark_container-inactive'}`}
            onClick={handleBKWidthExpansion}
        >
            <Image src={bookmarkIcon} alt='bookmark' width={25}/>
        </div>
    );
}