import {cwDefaultColors} from "@/utils/cwUtils";

export default function CompoFlags({componentFlag}: any) {

    const compoFlagStyles = {
        textColor: '#ffffff',
        fontSize: '14px',
        backgroundColor: cwDefaultColors,
        borderRadius: '5px',
        padding: '2px 15px',
    }

    return (
        <h3 style={compoFlagStyles}>{componentFlag}</h3>
    )
}