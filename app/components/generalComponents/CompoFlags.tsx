import {cwDefaultColors} from "@/utils/cwUtils";

export default function CompoFlags({componentFlag}: any) {

    const compoFlagStyles = {
        textColor: '#ffffff',
        fontSize: '14px',
        backgroundColor: 'rgba(255,255,255,0.68)',
        borderRadius: '5px',
        padding: '1px 15px',
        textAlign: 'center',
        alignItems: 'center'
    }

    return (
        <h3 style={compoFlagStyles}>{componentFlag}</h3>
    )
}