import React, {useContext} from 'react';
import {Column, Row} from 'simple-flexbox';
import {createUseStyles} from 'react-jss';
import MiniCardComponent from 'components/cards/MiniCardComponent';
import {getProducts} from 'interface/simaProInterface'
import ProductDropdown from './ModelDropdownComponent'
import SLUGS from 'resources/slugs';
import {Link} from 'react-router-dom';
import {PrivateSectionContext} from 'hooks/PrivateSectionContext';
import { Component } from 'react';
import LabelComponent from './LabelComponent'

/**
 * The Componenet creates new cards   for the product items using the minicard components form 'components/cards/MiniCardComponent'
 * it displays all the related products images attached to each card in a certain category.
 * Also stores the product and model properties and pass this values to the detail page once clicking on the image
 * /**
 * 
 * @returns the product and model properties
 * @author Irem Toroslu, Martin Wagner, Mani Anand
 */


function ProductGridComponent() {
    const [selectedProducts, setSelectedProducts] = useContext(PrivateSectionContext);
    const NewSelectedProducts = [
        {
            productID: selectedProducts.productID,
            productName: selectedProducts.productName,
            modelID: selectedProducts.modelID,
            modelName: selectedProducts.modelName
        }
    ];

    const products = getProducts();
    const classes = useStyles();

    return (
            <Row
                className={classes.cardRow}
                wrap
                flexGrow={1}
                vertical='center'
                breakpoints={{ 320: { flexDirection: 'column' }}}
            >
                {products.map((product, index) => (
                    <Column key={'Column' + index} horizontal='center'>
                        <Link
                            onClick={(props) => {
                                // Save selection to ContextProvider
                                NewSelectedProducts[0].productID = product.productID;
                                NewSelectedProducts[0].productName = product.productName;
                            }}
                            to={{
                                // Link to the next page
                                pathname: SLUGS.details
                            }}
                        >
                            <MiniCardComponent 
                                title={product.productName}
                                className={classes.miniCardContainer}
                                // define the path of the image to show on the cards
                                path={product.productImage}
                            />
                        </Link>
                        <LabelComponent productName={product.productName}/>
                        <ProductDropdown
                            productID={product.productID}
                            productName={product.productName}
                        />
                    </Column>
                ))}
            </Row>
    );
}



// Card component style properties
const useStyles = createUseStyles({
    cardRow: {
        marginTop:-50,
        '@media (max-width: 768px)': {
            // marginTop: 30
        }
    },
    miniCardContainer: {
         marginRight: 30,
         marginLeft:30,
         marginTop:30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none',
            maxHeight:160
        }
    }
});

export default ProductGridComponent;