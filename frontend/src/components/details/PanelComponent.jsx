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
            style={{ backgroundColor: '#466e78', marginLeft: 15 }}
        >
            <div className='w3-row'>
                {/* "l" will be used in large screen sizes in terms of scaling the screen 
                and "s" will be used when the size of screen is small */}
                <div className='w3-col l8 m6 s6'>
                    <h2
                        className='w3-opacity'
                        style={{
                            color: 'white',
                            fontSize: theme.typography.subtitle.fontSize,
                            fontWeight: theme.typography.subtitle.fontWeight,
                            lineHeight: theme.typography.subtitle.lineHeight,
                            letterSpacing: theme.typography.subtitle.letterSpacing,
                            marginTop: 6
                        }}
                    >
                        Canvas
                    </h2>
                </div>
                <div className='w3-col l4 m6 s6  w3-center'>
                    {/* calling the compare button by using props which its parrent has provided*/}
                    <button
                        onClick={props.onCompareClick}
                        className='w3-button w3-border w3-margin-right'
                        disabled={props.loadComparePage}
                    >
                        <b
                            style={{
                                color: 'white',
                                fontSize: theme.typography.buttonSendtitle.fontSize,
                                fontWeight: theme.typography.buttonSendtitle.fontWeight,
                                lineHeight: theme.typography.buttonSendtitle.lineHeight,
                                letterSpacing: theme.typography.buttonSendtitle.letterSpacing
                            }}
                        >
                            Compare
                        </b>
                    </button>

                    {/* button: create pdf report by calling ExportPDF from PdfReport.js*/}
                    {/* <button onClick={() => ExportPDF()} className='w3-button w3-border'>
                        <b
                            style={{
                                color: 'white',
                                fontSize: theme.typography.buttonSendtitle.fontSize,
                                fontWeight: theme.typography.buttonSendtitle.fontWeight,
                                lineHeight: theme.typography.buttonSendtitle.lineHeight,
                                letterSpacing: theme.typography.buttonSendtitle.letterSpacing
                            }}
                        >
                            Create PDF Report
                        </b>
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default PanelComponent;
