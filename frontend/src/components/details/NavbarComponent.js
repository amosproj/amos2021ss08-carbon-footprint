import React from 'react';
import slugs from 'resources/slugs';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';

/**
 * a divider Pannel for seperating search compoents and result components
 * and also providing the comparison feature by compare button
 *
 * @author Parham Gandomkar, Irem Toroslu, Julian Oelhaf
 */

const NavbarComponent = (props) => {
    if (!props.loadComparePage) {
        return (
            <div className='navbar' vertical='center' horizontal='space-between'>
                <Link to={{ pathname: slugs.categories }}>
                    <button className='w3-center'>
                        <i class='fa fa-chevron-left' aria-hidden='true' />
                    </button>
                </Link>
                <b>{props.scenarioName}</b>

                <Link to={{ pathname: slugs.details }} onClick={props.onExportClick}>
                    <div className='Pdfbtn'>
                        <i className='fa fa-file-pdf-o ' aria-hidden='true'></i>
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
            <div className='navbar' vertical='center' horizontal='space-between'>
                <b>{props.scenarioName}</b>
                <Link to={{ pathname: slugs.details }} onClick={props.onExportClick}>
                    <div className='Pdfbtn'>
                        <i className='fa fa-file-pdf-o ' aria-hidden='true'></i>
                        Export
                    </div>
                </Link>

                <Link to={{ pathname: slugs.details }} onClick={props.onCloseClick}>
                    <div className='Closebtn'>
                        <i className='fa fa-times-circle-o' aria-hidden='true'></i>
                        Close
                    </div>
                </Link>
            </div>
        );
    }
};

export default NavbarComponent;
