import Image from 'next/image'

// imported icon
import bookmarkIcon from '@/public/icons/bookmark-circle-svgrepo-com.svg';


// todo: set up props for fetching data from the DB later
export default function USComponents(): void {

    const addedComponentDate = new Date
    const currentDate = addedComponentDate.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    })


    return (
        <div className="USComponents_container">
            <div className="mainCompo">
                <h3>{currentDate}</h3>

                <div className="compoContent">
                    <h1>Buffer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet explicabo iure modi numquam
                        omnis quaerat qui. Ad cum, dolore doloremque, est excepturi iure nesciunt perspiciatis possimus
                        rem temporibus tenetur vero!</p>
                </div>

            </div>

            <Image src={bookmarkIcon} alt='bookmarkIcon'/>

        </div>
    )
}