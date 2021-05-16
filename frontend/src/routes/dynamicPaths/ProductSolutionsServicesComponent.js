import React from 'react';
import { useParams } from 'react-router-dom';
import { Column, Row } from 'simple-flexbox';
import ProductGridComponent from 'components/productGrid';
import { useTheme, createUseStyles } from 'react-jss';
const useStyles = createUseStyles((theme) => ({

  container: {
    display: 'flex'

  },
  name: {
      ...theme.typography.itemTitle,
      textAlign: 'right',
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
      
      <h2 className={classes.title} >At this location the component which shows all the products / models will be implemented</h2>
      <Row className={classes.Itemtitle}>
      {type === 'products' && <div>This is where all the products of the selected category could be shown.</div>}
      {type === 'solutions' && <div>This is where all the solutions of the selected category could be shown.</div>}
      {type === 'services' && <div>This is where all the services of the selected category could be shown.</div>}
      </Row>
      <ProductGridComponent/>

    </Column>
  );
}