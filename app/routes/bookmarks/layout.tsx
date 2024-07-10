import {ReactNode} from "react";

// imported unchanged components


export default function MainPageRootLayout(
    {children}: { children: ReactNode }
) {
    return (
        <>
            {children}
        </>
    )
}