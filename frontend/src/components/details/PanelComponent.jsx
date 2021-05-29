import React from 'react';

/**
 * a divider Pannel for seperating search compoents and result components
 * and also providing the comparison feature by compare button
 *
 * @author Parham Gandomkar, Irem Toroslu, Julian Oelhaf
 */


const PanelComponent = (props) => {
    return (
        <>
            <div className="navbar" vertical='center' horizontal='space-between'>
                <b>{props.scenarioName}</b>
                <a href="#"><i className="fa fa-fw fa-heart" /> Favorites</a>
                <a href="#" onClick={props.onCompareClick}><i className="fa fa-fw fa-plus-circle" /> Add</a>
            </div>
        </>
    );

};

export default PanelComponent;
