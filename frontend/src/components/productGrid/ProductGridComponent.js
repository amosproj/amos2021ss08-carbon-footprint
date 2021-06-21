import React, { useContext, useState, useEffect } from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import MiniCardComponent from 'components/cards/MiniCardComponent';
import { getCategorizedProducts } from 'interface/simaProInterface';
import ProductDropdown from './ModelDropdownComponent';
import SLUGS from 'resources/slugs';
import { Link } from 'react-router-dom';
import { PrivateSectionContext } from 'hooks/PrivateSectionContext';
import LabelComponent from './LabelComponent';
import LoadingComponent from 'components/loading';

/**
 * The Component creates new cards for the product items using the minicard components form 'components/cards/MiniCardComponent'
 * it displays all the related products images attached to each card in a certain category.
 * Also stores the product and model properties and pass this values to the detail page once clicking on the image
 * /**
 *
 * @returns the product and model properties
 * @author Irem Toroslu, Martin Wagner, Mani Anand
 */

function ProductGridComponent({ selectedCategory }) {
    const [selectedProducts, setSelectedProducts] = useContext(PrivateSectionContext);
    const [productList, setProductList] = useState([]);

    console.log(selectedCategory);
    /*
     * useEffect declars the async function getProducts to be executed after the initial render and
     * hooks it so the Component reloads on change. At the moment the specified change is the selectedCategory.
     */
    useEffect(() => {
        async function getProducts(theSelectedCategory) {
            const products = await getCategorizedProducts(theSelectedCategory);
            setProductList(products);
            console.log(products);
        }
        getProducts(selectedCategory);
    }, [selectedCategory]);

    // TODO: We cannot keep the selection like this, if models are implemented. See #58
    const newSelectedProducts = [
        {
            productID: selectedProducts[0].productID,
            productName: selectedProducts[0].productName,
            modelID: selectedProducts[0].modelID,
            modelName: selectedProducts[0].modelName
        }
    ];

    const classes = useStyles();

    if (productList === [] || productList === undefined || productList === null) {
        console.error(
            'Products data not recieved.Please verify the API calls and Backend Connection.'
        );
        return <LoadingComponent />;
    }
    // else:
    return (
        <Row
            className={classes.cardRow}
            wrap
            flexGrow={1}
            vertical='center'
            breakpoints={{ 320: { flexDirection: 'column' } }}
        >
            {productList.map((product, index) => (
                <Column key={'Column' + index} horizontal='center'>
                    <Link
                        onClick={(props) => {
                            // Save selection to ContextProvider
                            newSelectedProducts[0].productID = product.productID;
                            newSelectedProducts[0].productName = product.productName;
                            newSelectedProducts[0].modelID = product.productID; // for now 1 Product has 1 Model (itself)
                            newSelectedProducts[0].modelName = product.productName;
                            setSelectedProducts(newSelectedProducts);
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
                    <LabelComponent productName={product.productName} />
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
        marginTop: -50,
        '@media (max-width: 768px)': {
            // marginTop: 30
        }
    },
    miniCardContainer: {
        marginRight: 30,
        marginLeft: 30,
        marginTop: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none',
            maxHeight: 160
        }
    }
});

export default ProductGridComponent;
