import React from 'react';
import slugs from 'resources/slugs';

/**
 * a divider Pannel for seperating search compoents and result components
 * and also providing the comparison feature by compare button
 *
 * @author Parham Gandomkar, Irem Toroslu, Julian Oelhaf
 */

const NavbarComponent = (props) => {
    return (
        <>
            <div className='navbar' vertical='center' horizontal='space-between'>
                <b>{props.scenarioName}</b>
                <button href={slugs.details}>
                    <i className='fa fa-fw fa-heart' /> Favorites
                </button>
                <button href={slugs.details} onClick={props.onCompareClick}>
                    <i className='fa fa-fw fa-plus-circle' /> Add
                </button>
            </div>
        </>
    );
};

export default NavbarComponent;
