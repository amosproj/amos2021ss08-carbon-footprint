/**
 * the main component for detail page which includes  
 * canvas page and variable drop down list  
 * 
 * @author parham, 08.05  
 * */

import React, {Component, useContext} from 'react';
import Canvas from './CanvasComponent';
import SelectVariable from './SelectVariableComponent';
import {PrivateSectionContext} from "hooks/PrivateSectionContext";
import { useTheme, createUseStyles } from 'react-jss';
const useStyles = createUseStyles((theme) => ({

    container: {
      display: 'flex'
  
    },
    textcontent: {
        ...theme.typography.textcontent,
        textAlign: 'left',
        '@media (max-width: 768px)': {
            display: 'none',
            
  
            
        }
    },
  
    subtitle: {
        ...theme.typography.title,
        '@media (max-width: 1080px)': {
            marginLeft: -50,
  
        },
        '@media (max-width: 468px)': {
            fontSize: 50,
  
        }
    },
    title: {
        ...theme.typography.title,
        '@media (max-width: 1080px)': {
            marginLeft: 80,
  
        },
        '@media (max-width: 468px)': {
            fontSize: 50,
  
        }
    }
  }));

function DetailInfo() {
    const [ selectedProducts, setSelectedProducts ] = useContext(PrivateSectionContext);
    const theme = useTheme();
    const classes = useStyles({ theme });
        return (
            <React.Fragment>
                <h2 className={classes.subtitle} style={{marginLeft:15}}>The chosen Model is {selectedProducts[0].modelName}</h2>
                <div style={{marginLeft:15}}><SelectVariable ></SelectVariable></div>
                <Canvas ></Canvas>
            </React.Fragment>
        );
}

export default DetailInfo;
