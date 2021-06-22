import PropTypes from 'prop-types';
import React from 'react';
import slugs from 'resources/slugs';

/**
 * a divider Pannel for seperating search compoents and result components
 * and also providing the comparison feature by compare button
 *
 * @author Parham Gandomkar, Irem Toroslu, Julian Oelhaf
 */

const PanelComponent = (props) => {
    return (
        <>
            <div className='navbar' vertical='center' horizontal='space-between'>
                <b>{props.scenarioName}</b>

                <button href={slugs.details} onClick={props.onExportClicked}>
                    <i className='fa fa-file-pdf-o' aria-hidden='true'></i>
                    Export Pdf
                </button>
                <button href={slugs.details} onClick={props.onCompareClick}>
                    <i className='fa fa-fw fa-plus-circle' /> Add
                </button>
            </div>
        </>
    );
};

PanelComponent.propTypes = {
    onCompareClick: PropTypes.func,
    onExportClicked: PropTypes.func,
    scenarioName: PropTypes.string
};

export default PanelComponent;
