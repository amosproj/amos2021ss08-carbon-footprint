import PropTypes from 'prop-types';
import React, { useContext, useState, useEffect } from 'react';
import { Col, Row, Container } from 'react-grid-system';
import MiniCardComponent from 'components/cards/MiniCardComponent';
import ProductDropdown from './ModelDropdownComponent';
import SLUGS from 'resources/slugs';
import { Link } from 'react-router-dom';
import { PrivateSectionContext } from 'hooks/PrivateSectionContext';
import LabelComponent from './LabelComponent';
import LoadingComponent from 'components/loading';

import { useSelector } from 'react-redux';
import { categories, types } from 'resources/globalConstants/categories';
/**
 * The Component creates new cards for the product items using the minicard components form 'components/cards/MiniCardComponent'
 * it displays all the related products images attached to each card in a certain category.
 * Also stores the product and model properties and pass this values to the detail page once clicking on the image
 * /**
 *
 * @returns the product and model properties
 */

function ProductGridComponent({ selectedCategory, selectedType }) {
    const [selectedProducts, setSelectedProducts] = useContext(PrivateSectionContext);
    const [productList] = useState([]);
    let preProducts = useSelector((state) => state);
    let products;

    switch (selectedCategory) {
        case categories.generation:
            switch (selectedType) {
                case types.product:
                    products = preProducts?.generation?.products;
                    break;
                case types.solution:
                    products = preProducts?.generation?.solutions;
                    break;
                case types.service:
                    products = preProducts?.generation?.services;
                    break;
                default:
                    break;
            }
            break;
        case categories.transmission:
            switch (selectedType) {
                case types.product:
                    products = preProducts?.transmission?.products;
                    break;
                case types.solution:
                    products = preProducts?.transmission?.solutions;
                    break;
                case types.service:
                    products = preProducts?.transmission?.services;
                    break;
                default:
                    break;
            }
            break;
        case categories.industrialApplications:
            switch (selectedType) {
                case types.product:
                    products = preProducts?.industrialApplications?.products;
                    break;
                case types.solution:
                    products = preProducts?.industrialApplications?.solutions;
                    break;
                case types.service:
                    products = preProducts?.industrialApplications?.services;
                    break;
                default:
                    break;
            }
            break;
        default:
            products = [];
            break;
    }

    const [filteredProducts, setFilteredProducts] = useState([...products]);

    useEffect(() => {
        setFilteredProducts([...products]);
        document.getElementById('myInput').value = '';
    }, [selectedType, products]);

    /**
     * updating the filtered list
     * and notigying react to render the list again
     * and show the updated list
     *
     * @param e : the input of the search bar
     */
    let updateInput = async (e) => {
        // initializing the filtered products with the actual products
        let allProducts = [...products];
        const filtered = allProducts.filter((product) => {
            return product.productName.toLowerCase().includes(e.target.value.toLowerCase());
        });

        setFilteredProducts([...filtered]);
    };

    // TODO: We cannot keep the selection like this, if models are implemented. See #58
    const newSelectedProducts = [selectedProducts[0]];

    if (productList === [] || productList === undefined || productList === null) {
        console.error(
            'Products data not recieved.Please verify the API calls and Backend Connection.'
        );
        return <LoadingComponent loading />;
    }
    // else:
    return (
        <Container fluid className='ProductGridTopContainer'>
            <Row>
                <input
                    type='text'
                    id='myInput'
                    onChange={updateInput}
                    placeholder='&#61442;  Search for a product..'
                    title='Enter a name'
                />
            </Row>
            <Row justify='start'>
                {filteredProducts?.map((product, index) => (
                    <Col className='ProductGridContainer' key={'Column' + index}>
                        <Row justify='center'>
                            <Link
                                className='ProductGridLink'
                                onClick={() => {
                                    // Save selection to ContextProvider
                                    newSelectedProducts[0] = product;
                                    setSelectedProducts(newSelectedProducts);
                                }}
                                to={{
                                    // Link to the next page
                                    pathname: SLUGS.details
                                }}
                            >
                                <MiniCardComponent
                                    title={product.productName}
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

ProductGridComponent.propTypes = {
    selectedCategory: PropTypes.string.isRequired,
    selectedType: PropTypes.string.isRequired
};

export default ProductGridComponent;
