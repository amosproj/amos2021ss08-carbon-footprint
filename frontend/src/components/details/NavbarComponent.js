import PropTypes from 'prop-types';
import React from 'react';
import slugs from 'resources/slugs';
import { Link } from 'react-router-dom';

/**
 * a divider Pannel for seperating search compoents and result components
 * and also providing the comparison feature by compare button
 *
 * @author Parham Gandomkar, Irem Toroslu, Julian Oelhaf
 */

const NavbarComponent = (props) => {
    if (!props.loadComparePage) {
        return (
            <div className='navbar'>
                <div className='BackButton'>
                    <Link to={{ pathname: slugs.categories }}>
                        <button className='w3-center'>
                            <i className='fa fa-chevron-left' aria-hidden='true' />
                        </button>
                    </Link>
                </div>

                <div className='NavbarTitle'>
                    <b>{props.scenarioName}</b>
                </div>

                <Link to={{ pathname: slugs.details }} onClick={props.onExportClick}>
                    <div className='Pdfbtn'>
                        <i className='fa fa-file-pdf-o ' aria-hidden='true' />
                        Export
                    </div>
                </Link>
                <Link to={{ pathname: slugs.details }} onClick={props.onCompareClick}>
                    <div className='Addbtn'>
                        <i className='fa fa-fw fa-plus-circle' /> Add
                    </div>
                </Link>
            </div>
        );
    } else {
        return (
            <div className='navbar'>
                <div className='NavbarTitle'>
                    <b>{props.scenarioName}</b>
                </div>
                <Link to={{ pathname: slugs.details }} onClick={props.onExportClick}>
                    <div className='Pdfbtn'>
                        <i className='fa fa-file-pdf-o ' aria-hidden='true'></i>
                        Export
                    </div>
                </Link>

                <Link to={{ pathname: slugs.details }} onClick={props.onCloseClick}>
                    <div className='Closebtn '>
                        <i className='fa fa-times-circle-o' aria-hidden='true'></i>
                    </div>
                </Link>
            </div>
        );
    }
};

NavbarComponent.propTypes = {
    loadComparePage: PropTypes.bool.isRequired,
    onCloseClick: PropTypes.func,
    onCompareClick: PropTypes.func,
    onExportClick: PropTypes.func.isRequired,
    scenarioName: PropTypes.string.isRequired
};

export default NavbarComponent;
