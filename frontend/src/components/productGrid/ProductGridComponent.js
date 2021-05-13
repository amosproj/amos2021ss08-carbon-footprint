/**
 * The Componenet creates new cards   for the product items using the minicard components form 'components/cards/MiniCardComponent'
 * it displays all the related products images attached to each card in a certain category.
 * Also stores the product and model properties and pass this values to the detail page once clicking on the image
 * /**
 * 
 * @returns the product and model properties
 * @author Irem Toroslu
 */

import React, {useContext} from 'react';
import {Column, Row} from 'simple-flexbox';
import {createUseStyles} from 'react-jss';
import MiniCardComponent from 'components/cards/MiniCardComponent';
import {getProducts} from 'interface/simaProInterface'
import ProductDropdown from './ModelDropdownComponent'
import SLUGS from 'resources/slugs';
import {Link} from 'react-router-dom';
import {PrivateSectionContext} from 'hooks/PrivateSectionContext';




function ProductGridComponent() {
    const [ selectedProducts, setSelectedProducts ] = useContext(PrivateSectionContext);
    const NewSelectedProducts =

        [{
            productID: selectedProducts.productID,
            productName: selectedProducts.productName,
            modelID: selectedProducts.modelID,
            modelName: selectedProducts.modelName
        }]


    const products = getProducts();
    const classes = useStyles();

    return (
        <Column>
            <Row
                className={classes.cardRow}
                wrap
                flexGrow={1}
                vertical='center'
                breakpoints={{50: 'column'}}
            >
                {products.map((product, index) =>
                    <Column key={'Column' + index}>
                        <Link
                            onClick={(props) => {
                                // Save selection to ContextProvider
                                NewSelectedProducts[0].productID = product.productID;
                                NewSelectedProducts[0].productName = product.productName;
                            }}
                            to={{ // Link to the next page
                                pathname: SLUGS.details,
                            }}>
                            <MiniCardComponent
                                className={classes.miniCardContainer}
                                // define the path of the image to show on the cards
                                path={product.productImage}
                            />
                        </Link>
                        <ProductDropdown productID={product.productID} productName={product.productName}/>
                    </Column>
                )}
            </Row>
        </Column>
    );
}



// Card component style properties
const useStyles = createUseStyles({
    cardsContainer: {
        marginRight: -30,
        marginTop: -30
    },
    cardRow: {
        marginTop: 30,
        '@media (max-width: 768px)': {
            marginTop: 0
        }
    },
    miniCardContainer: {
        flexGrow: 1,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none',
            maxHeight:160
        }
    },
    todayTrends: {
        marginTop: 30
    },
    lastRow: {
        marginTop: 30
    },
    unresolvedTickets: {
        marginRight: 30,
        '@media (max-width: 1024px)': {
            marginRight: 0
        }
    },
    tasks: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            marginTop: 30
        }
    }
});

export default ProductGridComponent;
