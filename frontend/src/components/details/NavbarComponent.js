import React from 'react';
import slugs from 'resources/slugs';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

/**
 * a divider Pannel for seperating search compoents and result components
 * and also providing the comparison feature by compare button
 *
 * @author Parham Gandomkar, Irem Toroslu, Julian Oelhaf, Mani Anand
 */
const NavbarComponent = (props) => {
    const history = useHistory();
    if (!props.loadComparePage) {
        return (
            <div className='navbar' vertical='center' horizontal='space-between'>
               {/* used the history.goback() function to go one step backward where it stores the previous steps including the prevs stage of clicking items on the sidebar */}
               
                <Link  onClick={() => history.goBack()}>
                    <btn className='w3-col l3 m3 s4 w3-left' >
                        <i class='fa fa-chevron-left' aria-hidden='true' />
                    </btn>
                </Link>
                <b className='w3-col l6 m6 s4'>{props.scenarioName}</b>

                <Link to={{ pathname: slugs.details }} onClick={props.onExportClicked}>
                    <pdfbtn className='w3-col l3 m3 s4'>
                        <i className='fa fa-file-pdf-o w3-margin-right' aria-hidden='true'></i>
                        Export Pdf
                    </pdfbtn>
                </Link>
                <Link to={{ pathname: slugs.details }} onClick={props.onCompareClick}>
                    <addbtn className='w3-col l3 m3 s4 w3-right'>
                        <i className='fa fa-fw fa-plus-circle w3-margin-right' /> Add
                    </addbtn>
                </Link>
            </div>
        );
    } else {
        return (
            <div className='navbar' vertical='center' horizontal='space-between'>
                <b className='w3-col l7 m7 s6'>{props.scenarioName}</b>
                <Link to={{ pathname: slugs.details }} onClick={props.onExportClicked}>
                    <pdfbtn className='w3-col l5 m5 s6 w3-right'>
                        <i className='fa fa-file-pdf-o w3-margin-right' aria-hidden='true'></i>
                        Export Pdf
                    </pdfbtn>
                </Link>
                <Link to={{ pathname: slugs.details }} onClick={props.onExportClicked}>
                    <closebtn className='w3-col l5 m5 s6 w3-right'>
                        <i className='fa fa-times-circle-o w3-margin-right' aria-hidden='true'></i>
                    </closebtn>
                </Link>
            </div>
        );
    }
};

export default NavbarComponent;
