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
            <div className='navbar w3-row' vertical='center' horizontal='space-between'>
                <Link to={{ pathname: slugs.categories }}>
                    <btn className='w3-col l1 m1 s1 w3-center'>
                        <i class='fa fa-chevron-left' aria-hidden='true' />
                    </btn>
                </Link>
                <b className='w3-col l6 m6 s4'>{props.scenarioName}</b>

                <Link to={{ pathname: slugs.details }} onClick={props.onExportClicked}>
                    <pdfbtn className='w3-col l3 m3 s4'>
                        <i className='fa fa-file-pdf-o ' aria-hidden='true'></i>
                        Export Pdf
                    </pdfbtn>
                </Link>
                <Link to={{ pathname: slugs.details }} onClick={props.onCompareClick}>
                    <addbtn className='w3-col l2 m2 s2'>
                        <i className='fa fa-fw fa-plus-circle' /> Add
                    </addbtn>
                </Link>
            </div>
        );
    } else {

        return (
            <div className='navbar w3-row' vertical='center' horizontal='space-between'>
                <b className='w3-col l7 m7 s6'>{props.scenarioName}</b>
                <Link to={{ pathname: slugs.details }} onClick={props.onExportClicked}>
                    <pdfbtn className='w3-col l5 m5 s6 w3-right'>
                        <i className='fa fa-file-pdf-o ' aria-hidden='true'></i>
                        Export Pdf
                    </pdfbtn>
                </Link>
                

                <Link to={{ pathname: slugs.details }}>
                    <closebtn className='w3-col l5 m5 s6 w3-right'>
                        <i className='fa fa-times-circle-o' aria-hidden='true'></i>
                        Close
                    </closebtn>
                </Link>
                
            </div>

        );

        }


        
};

export default NavbarComponent;
