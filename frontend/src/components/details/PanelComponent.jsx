import { IconHeart, IconPlus } from 'assets/icons';
import React from 'react';
import theme from 'resources/theme';

/**
 * a divider Pannel for seperating search compoents and result components
 * and also providing the comparison feature by compare button
 *
 * @author Parham Gandomkar, Irem Toroslu, Julian Oelhaf
 */

const PanelComponent = (props) => {
    return (
        <div
            className='w3-panel w3-padding-small'
            style={{ backgroundColor: '#466e78', height: 50, marginLeft: 15 }}
        >
            <div className='w3-row'>
                {/* "l" will be used in large screen sizes in terms of scaling the screen 
                and "s" will be used when the size of screen is small */}
                <div className='w3-col l8 m4 s4'>
                    <h2
                        style={{
                            color: 'white',
                            fontSize: theme.typography.subtitle.fontSize,
                            fontWeight: theme.typography.subtitle.fontWeight,
                            lineHeight: theme.typography.subtitle.lineHeight,
                            letterSpacing: theme.typography.subtitle.letterSpacing,
                            marginTop: 5,
                            marginBottom: 5
                        }}
                    >
                        Baseline Scenario
                    </h2>
                </div>
                <div className='w3-col l2 m1 s1 w3-left' >
                    {/* calling the compare button by using props which its parrent has provided*/}

                    <button
                        onClick={props.onCompareClick}
                        className='w3-button w3-hover-none w3-margin-right:700em'
                        style={{ backgroundColor: '#466e78'}}
                        disabled={props.loadComparePage}
                        style={{height:40}}
                    >
                        <div style={{
                            marginTop:-5,
                            color:'white',
                            fontSize: theme.typography.subtitle.fontSize,
                            fontWeight: theme.typography.subtitle.fontWeight,
                            lineHeight: theme.typography.subtitle.lineHeight,
                            letterSpacing: theme.typography.subtitle.letterSpacing
                            }}
                            
                        ><IconHeart/>favorites</div>
                    </button>

                </div>
                <div className='w3-col l2 m1 s1  w3-center' >
                    {/* calling the compare button by using props which its parrent has provided*/}

                    <button
                        onClick={props.onCompareClick}
                        className='w3-button w3-hover-none '
                        style={{ backgroundColor: '#466e78'}}
                        disabled={props.loadComparePage}
                        style={{height:40}}
                    >
                        <div style={{
                            marginTop:-5,
                            color:'white',
                            fontSize: theme.typography.subtitle.fontSize,
                            fontWeight: theme.typography.subtitle.fontWeight,
                            lineHeight: theme.typography.subtitle.lineHeight,
                            letterSpacing: theme.typography.subtitle.letterSpacing
                            }}
                        >                            
                            <IconPlus/>Add</div>
                    </button>

                </div>




            </div>
        </div>
    );
};

export default PanelComponent;
