import PropTypes from 'prop-types';
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductGridComponent from 'components/productGrid';

/**
 * This component differenciates between the three different possible subcategories.
 * type will be either 'products', 'solutions' or 'services'.
 *
 * @param {*} category from globalConstants/categories
 * @returns Three different lines of text, depending on the `:type` parameter used in routes/PrivateRoutes.js
 * @author Martin Wagner
 */
export default function ProductSolutionsServicesComponent({ category }) {
    const { type } = useParams();

    return <ProductGridComponent selectedCategory={category} selectedType={type} />;
}

ProductSolutionsServicesComponent.propTypes = {
    category: PropTypes.string.isRequired
};
