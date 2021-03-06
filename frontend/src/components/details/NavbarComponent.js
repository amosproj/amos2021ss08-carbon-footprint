import PropTypes from 'prop-types';
import React from 'react';
import slugs from 'resources/slugs';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

/**
 * a divider Pannel for seperating search components and result components
 * Contains following functional buttons:
 * - back button
 *      > go back to the product grid
 * - export pdf button
 *      > create pdf (at the moment .docx) with the chart data
 * - add button
 *      > adds seconds scenario
 *      >works dynamically depending on which scenario is already displayed
 * - close button
 *      > only in comparison mode
 *      > closed the corresponding scenario
 *
 */
const NavbarComponent = (props) => {
    const history = useHistory();
    if (!props.loadComparePage) {
        return (
            <div className='navbar' vertical='center' horizontal='space-between'>
                {/* used the history.goback() function to go one step backward where it stores the previous steps including the prevs stage of clicking items on the sidebar */}

                <div className='BackButton'>
                    <Link to={{}} onClick={() => history.goBack()}>
                        <i className='fa fa-chevron-left' aria-hidden='true' />
                    </Link>
                </div>
                <div className='NavbarTitle'>
                    {/* Depending on the scenario name, we display baseline or modified scenario in the navbar */}
                    {props.scenarioDisplayName.includes('baseline')
                        ? 'Baseline Scenario'
                        : 'Modified Scenario'}
                </div>
                <Link
                    style={props.onExportClicked ? { pointerEvents: 'none' } : null}
                    to={{ pathname: slugs.details }}
                    onClick={props.exportHandler}
                >
                    <div className='Pdfbtn'>
                        {props.onExportClicked ? (
                            <CircularProgress className='w3-margin-right' size='1.4rem' />
                        ) : (
                            <i className='fa fa-file-pdf-o ' aria-hidden='true' />
                        )}
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
                    {/* Depending on the scenario name, we display baseline or modified scenario in the navbar */}
                    {props.scenarioDisplayName.includes('aseline')
                        ? 'Baseline Scenario'
                        : 'Modified Scenario'}
                </div>
                {/**Close button: closed the scenario and expands the other one */}
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
    onExportClicked: PropTypes.bool,
    scenarioName: PropTypes.string.isRequired,
    scenarioDisplayName: PropTypes.string,
    exportHandler: PropTypes.func
};

export default NavbarComponent;
