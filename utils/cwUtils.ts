// tCompo flags

// type TCompoFlagsTA = {[key: string]: string}; // TtFlagsTA -> TopicsComponentsTypeAnnotation

// ttFlags -> today's topics flags
export const ttFlags = {
    communityFlag: 'Community Made',
    cwFlag: 'CW Made',

    // learning duration
    learningDuration:  {
        shortRead: "~5Min",
        normalRead: "~10Min",
        longRead: ">30Min"
    }


} as const


export const cwDefaultColors = {
    black: '#000000',
    yellow: '#F8FD92FF',
    babyGreen: '#d2e2e1',
    purple: '#cb9cfa',
} as const