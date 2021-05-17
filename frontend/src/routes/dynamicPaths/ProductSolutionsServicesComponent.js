import React from 'react';
import { useParams } from 'react-router-dom';
import { Column, Row } from 'simple-flexbox';
import ProductGridComponent from 'components/productGrid';
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

/**
 * This component differenciates between the three different possible subcategories.
 * 
 * @returns Three different lines of text, depending on the `:type` parameter used in routes/PrivateRoutes.js
 * @author Martin Wagner
 */
export default function ProductSolutionsServicesComponent() {
  const { type } = useParams();
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (

    <Column className={classes.container}>
      
      <Row className={classes.subtitle}>
      {/* {type === 'products' && <div >All the products<div className={classes.textcontent}>  This is where all the products of the selected category could be shown.</div></div>}
      {type === 'solutions' && <div className={classes.textcontent}>This is where all the solutions of the selected category could be shown.</div>}
      {type === 'services' && <div className={classes.textcontent}>This is where all the services of the selected category could be shown.</div>} */}
      </Row>
      <div style={{marginLeft:15}}><ProductGridComponent/></div>

    </Column>
  );
}
