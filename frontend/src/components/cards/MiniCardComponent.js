import React from 'react';
import { Column } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';

//reconfiguration of the dropdown boxes
const useStyles = createUseStyles((theme) => ({

    container: {
        backgroundColor: '#FFFFFF',
        border: `3px solid ${theme.color.lightGrayishBlue2}`,
        borderRadius: 4,
        cursor: 'pointer',
        maxWidth: 200,
        maxHeight:150,
        marginTop:50,
        padding: '8px 16px 8px 16px',
        '&:hover': {
            borderColor: '#8b8d94',//'#7b9095', //'#00b300'
            '&:nth-child(n) > span': {
                color: theme.color.lightBlue
            }
        }
    },
    title: {
        ...theme.typography.cardTitle,
        color: theme.color.grayishBlue2,
        marginBottom: 12,
        minWidth: 205,
        textAlign: 'center'
    },
    value: {
        color: theme.color.veryDarkGrayishBlue,
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: '1px',
        lineHeight: '50px',
        textAlign: 'center'
    }
}));

// create cards for selection of the products 

function MiniCardComponent({ className = '', title, value, path }) {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const composedClassName = [classes.container, className].join(' ');
    return (
        <Column flexGrow={1} className={composedClassName} horizontal='center' vertical='center'>
        {/*  Resize the image on the cards (product images)            */}
            <div style={{ width: 150, paddingLeft: 20, paddingTop: 20, paddingBottom: 20 }}>
                    {/* define the image path */}
                    <img src={path} alt='' />
            </div>
            
        </Column>
    );
}

export default MiniCardComponent;
