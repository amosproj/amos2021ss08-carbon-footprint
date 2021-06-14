import React, { useContext, useState, useEffect } from 'react';
import { Col, Row, Container } from 'react-grid-system';
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
        return <LoadingComponent />;
    }
    // else:
    return (
        <Container fluid className='ProductGridTopContainer'>
            <Row justify='end' style={{ border: '3px solid red' }}>
                {productList.map((product, index) => (
                    <Col key={'Column' + index} align='center'>
                        <Row justify='center'>
                            <Link
                                className='ProductGridLink'
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
                                    className='MiniCardImageContainer'
                                    // define the path of the image to show on the cards
                                    path={product.productImage}
                                />
                            </Link>
                        </Row>
                        <Row justify='center'>
                            <Link
                                className='ProductGridLink'
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
                                <LabelComponent productName={product.productName} />
                            </Link>
                        </Row>
                        <Row justify='center'>
                            <ProductDropdown
                                productID={product.productID}
                                productName={product.productName}
                            />
                        </Row>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

// Card component style properties
const useStyles = createUseStyles({
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
