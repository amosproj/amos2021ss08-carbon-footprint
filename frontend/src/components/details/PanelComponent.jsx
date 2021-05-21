import React, { Component } from 'react';
import theme from 'resources/theme';
import ExportPDF from "./PdfComponent";
import jsPDF from "jspdf";
import "jspdf-autotable";
const pdfConverter = require("jspdf")

/**
 * a divider Pannel for seperating search compoents and result components
 * and also providing the comparison feature by compare button
 *
 * @author Parham Gandomkar, Irem Toroslu, Julian Oelhaf
 */

const PanelComponent = (props) => {
    return (
        <div className='w3-panel w3-padding-small' style={{ backgroundColor: '#466e78', marginLeft: 15 }}>
            <div className='w3-row'>
                <div className='w3-col s9'>
                    <h2 className='w3-opacity' style={{ color: 'white', fontSize: theme.typography.subtitle.fontSize, fontWeight: theme.typography.subtitle.fontWeight, lineHeight: theme.typography.subtitle.lineHeight, letterSpacing: theme.typography.subtitle.letterSpacing, marginTop: 6 }}>Canvas page</h2>
                </div>
                <div className='w3-col s3  w3-center'>
                    {/* calling the compare button by using props which its parrent has provided*/}
                    <button

                        onClick={props.onCompareClick}
                        className='w3-button w3-border'
                        disabled={props.loadComparePage}
                    >
                        <b style={{ color: 'white', fontSize: theme.typography.buttonSendtitle.fontSize, fontWeight: theme.typography.buttonSendtitle.fontWeight, lineHeight: theme.typography.buttonSendtitle.lineHeight, letterSpacing: theme.typography.buttonSendtitle.letterSpacing }}>Compare</b>
                    </button>
                    
                    {/* Space to seperate buttons, dont get how the div works to put buttons next to each other*/}
                    {" "} 

                    {/* button: create pdf report by calling ExportPDF from PdfComponent*/}
                    <button
                        onClick={() => ExportPDF()}
                        className='w3-button w3-border'
                    >
                        <b style={{ color: 'white', fontSize: theme.typography.buttonSendtitle.fontSize, fontWeight: theme.typography.buttonSendtitle.fontWeight, lineHeight: theme.typography.buttonSendtitle.lineHeight, letterSpacing: theme.typography.buttonSendtitle.letterSpacing }}>Create PDF Report</b>
                    </button>
                </div>
                <div className='w3-col s3  w3-center'>
                    
                </div>
            </div>
        </div>
    );
};

export default PanelComponent;
