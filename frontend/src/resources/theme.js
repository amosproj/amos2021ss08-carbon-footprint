/**
 * The theme provides cross component UI like Colors and Fonts.
 * @author Irem Toroslu
 * @author Martin Wagner
 */

const color = {
    brightBlue: '#3498db',
    darkGrayishBlue: '#8b8d94',
    whitish: '#b5b4b9',
    white: '#ffffff',
    darkGray: '#262625',
    darkRed: '#a90000',
    grayishBlue: '#A4A6B3',
    grayishBlue2: '#9fa2b4',
    grayishBlue3: '#bdc3c7',
    limeGreen: '#00b300',
    blueGray: '#33b3a6', //687f8c016064018788019799
    lightBlue: '#3751FF',
    lightGrayishBlue: '#F7F8FC', // background color
    lightGrayishBlue2: '#DFE0EB',
    paleBlue: '#DDE2FF',
    darkBlue: '#008caf',
    paleBlueTransparent: 'rgba(221, 226, 255, 0.08)',
    veryDarkGrayishBlue: '#373a47',
    lightgreen: '#66a103',
    lightblueGray: '#2e9db0',
    lightGreenGray: '#9dccca',
    GreenGray: '#88b598',
    darkGreenGray: '#94b0a5',
    darkskyblue: '#01a1c1',
    Copper: '#BF6016',
    Alminium: '#6093AC',
    SiliconSteel: '#0c6c84',
    TransformerOil: '#FACA0F',
    StainlessSteel: '#caccce',
    Pressboard: '#C38888',
    Steel: '#8C9BA1',
    lightGreenishBlue: ' #7dbec7'
};

const typography = {
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: '24px',
        letterSpacing: '0.4px'
    },
    icontitle: {
        fontSize: 16,
        lineHeight: '16px',
        letterSpacing: '0.1px'
    },
    smallSubtitle: {
        fontSize: 18,
        lineHeight: '16px',
        letterSpacing: '0.1px',
        fontWeight: 'inherit'
    },
    secondSmallSubtitle: {
        fontSize: 16,
        lineHeight: '16px',
        letterSpacing: '0.1px',
        fontWeight: 'inherit'
    },
    link: {
        fontWeight: '600',
        fontSize: 15,
        lineHeight: '20px',
        letterSpacing: '0.2px',
        color: color.lightBlue,
        textAlign: 'right',
        cursor: 'pointer',
        textDecoration: 'underline',
        '&:hover': {
            color: color.grayishBlue
        }
    },
    itemTitle: {
        fontWeight: 600,
        fontSize: 15,
        lineHeight: '20px',
        letterSpacing: 0.2
    },
    title: {
        fontWeight: 'inherit',
        fontSize: 24,
        lineHeight: '30px',
        letterSpacing: 0.3
    },
    subtitle: {
        fontWeight: 'inherit',
        fontSize: 20,
        lineHeight: '30px',
        letterSpacing: 0.3
    },
    textcontent: {
        fontWeight: 'inherit',
        fontSize: 18,
        lineHeight: '16px',
        letterSpacing: 0.3
    },
    chartItemstitle: {
        fontWeight: 'inherit',
        fontSize: 12,
        lineHeight: '30px',
        letterSpacing: 0.3
    },
    buttontitle: {
        fontWeight: 'inherit',
        fontSize: 12,
        lineHeight: '30px',
        letterSpacing: 0.3
    },
    buttonSendtitle: {
        fontWeight: 'inherit',
        fontSize: 14,
        lineHeight: '30px',
        letterSpacing: 0.3
    }
};

/**
 * Defining uniform Colors.
 */
export const uniformStyle = {
    color: {
        primaryFontColor: color.darkGrayishBlue,
        primaryIconColor: 'white',
        secondaryFontColor: color.whitish,
        highlightingColor: color.limeGreen,
        primaryBackgroundColor: color.white,
        secondaryBackgroundColor: color.darkGray,
        barChartColor: color.darkBlue,
        tableHeaderColor: color.GreenGray,
        sendButtonColor: color.lightGreenishBlue
    }
};

const styles = {
    // https://www.colorhexa.com/A4A6B3
    color,
    typography,
    uniformStyle
};

export default styles;
