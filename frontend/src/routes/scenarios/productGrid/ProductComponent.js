import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import MiniCardComponent from 'components/cards/MiniCardComponent';
import logo from 'assets/logo/LogoCarbonteam.png'
import DropdownComponent from 'components/dropdown';
import {getModels, getProducts} from 'interface/projectInterface'
import Dropdownbutton from "./Dropdownbutton"

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
    const products = getProducts(); //TODO: declare and write.
    // [logo,logo_1,logo_2,logo_1,logo_2,logo_1];
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
               {products.map((product,index) => 

                <Column><MiniCardComponent

                className={classes.miniCardContainer}
                // define the path of the image to show on the cards
                path={product}

           /> <Dropdownbutton/> </Column>
                    

                  )     
                        
}



            </Row>
        </Column>
    );
}

export default ProductComponent;
