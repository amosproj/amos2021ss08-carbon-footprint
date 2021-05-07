import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import MiniCardComponent from 'components/cards/MiniCardComponent';
import logo from './LogoCarbonteam.png'
import logo_1 from './Image_1.PNG'
import logo_2 from './Image_2.PNG'
import SLUGS from 'resources/slugs';
import { Link } from 'react-router-dom';
import DropdownComponent from 'components/dropdown';

// Card component style properties
const useStyles = createUseStyles({
    cardsContainer: {
        marginRight: -30,
        marginTop: -30
    },
    cardRow: {
        marginTop: 30,
        '@media (max-width: 768px)': {
            marginTop: 0
        }
    },
    miniCardContainer: {
        flexGrow: 1,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none',
            maxHeight:160
        }
    },
    todayTrends: {
        marginTop: 30
    },
    lastRow: {
        marginTop: 30
    },
    unresolvedTickets: {
        marginRight: 30,
        '@media (max-width: 1024px)': {
            marginRight: 0
        }
    },
    tasks: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            marginTop: 30
        }
    }
});


  

/**
 * 
 * @returns create new cards for the each product items
 */
function ProductComponent() {

    //list the product images 
    const products = [logo,logo_1,logo_2,logo_1,logo_2,logo_1];
    const classes = useStyles();
    return (
        <Column>                

               <Row
                    className={classes.cardRow}
                    wrap
                    flexGrow={1}
                    vertical='center'
                    breakpoints={{ 50: 'column' }}
                >
               {products.map((item,index) => 

              
                    <DropdownComponent 
                        key={`option-${index}`}
                        label={    
                            <MiniCardComponent 
                            className={classes.miniCardContainer}
                            // define the path of the image to show on the cards
                            path={item}
    
                       />  }
                        options={[
                            {
                                key:`option-${index}#`,
                                label: 'Transformer 3-phase GSU',
                                onClick: () => console.log('Transformer 3-phase GSU')
                            },
                            {
                                key:`option-${index}#`,
                                label: 'Transformer 3-phase GSU #2',
                                onClick: () => console.log('Transformer 3-phase GSU')
                            },
                            {
                                key:`option-${index}#`,
                                label: 'Transformer 3-phase GSU #3',
                                onClick: () => console.log('Transformer 3-phase GSU')
                            },
 
                        ]}
                        position={{
                            top: 30,
                            right: -14
                        }}
                        />

                  )     
                        
}



            </Row>
        </Column>
    );
}

export default ProductComponent;
