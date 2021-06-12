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
            <>
                <div className='navbar' vertical='center' horizontal='space-between'>
                    <Link to={{ pathname: slugs.categories }}>
                        <btn>
                            <i class="fa fa-chevron-left" aria-hidden="true"/>
                        </btn>
                    </Link>
                    <b>{props.scenarioName}</b>
                    <pdfbtn href={slugs.details} onClick={props.onExportClicked}>
                        <i className='fa fa-file-pdf-o' aria-hidden='true'></i>
                        Export Pdf
                    </pdfbtn>
                    <Link to={{ pathname: slugs.details }} onClick={props.onCompareClick}>
                        <addbtn>
                            <i className='fa fa-fw fa-plus-circle' /> Add
                        </addbtn>
                    </Link>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className='navbar' vertical='center' horizontal='space-between'>
                    <b>{props.scenarioName}</b>
                    <button href={slugs.details} onClick={props.onExportClicked}>
                        <i className='fa fa-file-pdf-o' aria-hidden='true'></i>
                        Export Pdf
                    </button>
                </div>
            </>
        );
    }
};

export default NavbarComponent;
