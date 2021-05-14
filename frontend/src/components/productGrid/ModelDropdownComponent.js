
import React, { useContext, useState } from 'react';
import { IconArrowDown } from 'assets/icons';
import {getModels} from 'interface/simaProInterface'
import {PrivateSectionContext} from 'hooks/PrivateSectionContext';
import { Component } from 'react';
import {Container, Row, Col } from 'react-grid-system';


//TODO: When only one model is available, => How to do that then? Should a click on the image link in that case?

/**
 * This component creates the dropdownboxes for the related products 
 * 
 * @returns the model properties of the related product depending on the model values from getModels func from interface/simaProInterface
 * @author parham, Martin Wagner, Irem Toroslu
 */

const ModelDropdownComponent = (props) =>  {
    const productID = props.productID;
    const productName = props.productName;
    

    const [ selectedProducts, setSelectedProducts ] = useContext(PrivateSectionContext);
    // set the initial values for the dropdown list derived from getModels
    const variables = getModels(productID);  
    const [ selected, setSelected ] = useState('Select a model');
    
    return (
            <Container fluid={true}>
                <Row className=' w3-dropdown-hover w3-card-4 w3-lightgrey w3-margin-bottom w3-margin-left:5em w3-margin-right w3-margin-top w3-margin-bottom:2em' >
                    <Col xs={2}>                         
                    <button className=' w3-button w3-border w3-lightgrey'>{selected}</button>
                    
                    
                    <div className='w3-dropdown-content w3-dropdown-hover w3-bar-block w3-border'>
                   
                    {variables.map((item) => (
                    
                        <a
                            onClick={(props) => {
                                const newSelectedProducts =
                                    [{
                                        productID: productID,
                                        productName: productName,
                                        modelID: item.modelID,
                                        modelName: item.modelName
                                    }]
                                    setSelected(item.modelName) ;
                                    setSelectedProducts(newSelectedProducts);
                                }} 
                                
                                className=' w3-bar w3-button'
                                
                                key={item.modelID}
                            >
                                {item.modelName}
                            </a>
                            
                        ))}
                    </div>
                    </Col>                   
                </Row>
                
            </Container>
        );
      };
    
    

export default ModelDropdownComponent;
