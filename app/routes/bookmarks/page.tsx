import Image from 'next/image'
import '@/public/cssStyles/usersavedcomponents.css'

// imported icon
import bookmarkIcon from '@/public/icons/bookmark-circle-svgrepo-com.svg';

// imported components
import BKCompo from "@/app/components/bookmarkPage/bookmarkedCompo/BKCompo";


// todo: set up props for fetching data from the DB later
export default function USComponents(): void {

    return (
        <div className="USComponents_container">
            <BKCompo />
            <BKCompo />
        </div>
    )
}