import React, { useState } from 'react';
import { Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import { IconCheckboxOn, IconCheckboxOff } from 'assets/icons';
import CardComponent from 'components/cards/CardComponent';
import SLUGS from 'resources/slugs';
import { Link, Route } from 'react-router-dom';
import styled, { css } from 'styled-components'
import { object } from 'prop-types';



const Button = styled.button`
  position: absolute;
  height: 5%;
  width: 10%;
  top: 80%;
  left:50%;
  font-size: 12;
  cursor: pointer;
  box-shadow: rgba(255, 255, 255, 0.05) 0px 3px 20px;
  background-color: green;
  color:white;
  &:hover {
        background-color: darkgreen;
        color: grey;
  }
`



window.x=[]
const useStyles = createUseStyles((theme) => ({
    addButton: {
        backgroundColor: theme.color.lightGrayishBlue,
        color: theme.color.grayishBlue2,
        fontSize: '20px !important',
        padding: '9px !important'
    },
    itemTitle: {
        ...theme.typography.itemTitle,
        color: theme.color.veryDarkGrayishBlue
    

    },
    itemValue: {
        color: theme.color.grayishBlue2
    },
    greyTitle: {
        color: theme.color.grayishBlue3
    },
    tagStyles: {
        borderRadius: 5,
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: 11,
        letterSpacing: '0.5px',
        lineHeight: '14px',
        padding: '5px 12px 5px 12px'
    },
    checkboxWrapper: {
        cursor: 'pointer',
        marginRight: 16
    }
}));

const TAGS = {
    URGENT: { text: 'URGENT', backgroundColor: '#FEC400', color: '#FFFFFF' },
    NEW: { text: 'NEW', backgroundColor: '#29CC97', color: '#FFFFFF' },
    DEFAULT: { text: 'DEFAULT', backgroundColor: '#F0F1F7', color: '#9FA2B4' }
};
function ScenariosComponent(props) {
    const theme = useTheme();
    const classes = useStyles({ theme });
    let [selecteditems,setSelecteds]=useState([]);
    console.log(selecteditems)
    // TODO: the place where we need to get the data from SimaPRO!!
    let [items, setItems] = useState([
        { title: 'Scenarios-bike', checked: false /*, tag: TAGS.URGENT*/ },
        {
            title: 'Scenarios 2-gas turbin',
            checked: false,
            /*tag: TAGS.NEW*/
        },
        { title: 'Scenarios 3-solar panel', checked: false /*, tag: TAGS.DEFAULT */}
    ]);

    function onCheckboxClick(index) {

        console.log("Checkbox Clicked");
        console.log(index);
        setItems((prev) => {
            console.log("PREV:");
            console.log(prev);
            const newItems = [...prev];
            newItems[index].checked = newItems[index].checked ? false : true;
            console.log("HI!" + newItems);
            if(newItems[index].checked) {
                selecteditems.push(newItems[index]);
            }
            alert (JSON.stringify(selecteditems))
            console.log("Checkbox Items: ");
            console.log(selecteditems[index]);
                
            return newItems;
        });

        setSelecteds(() => {

        return selecteditems;
        
     } ) 
    }
    function getNextTag(current = 'URGENT') {
        const tagLabels = ['URGENT', 'NEW', 'DEFAULT'];
        const tagIndex = (tagLabels.indexOf(current) + 1) % 3;
        return TAGS[tagLabels[tagIndex]];
    }

    function onTagClick(index) {
        setItems((prev) => {
            const newItems = [...prev];
            newItems[index].tag = getNextTag(newItems[index].tag.text);
            return newItems;
        });
    }

    // array1.forEach(element => console.log(element));
    function onAddButtonClick() {
        console.log(selecteditems);
        return selecteditems;
        // console.log(index);
        // index = 1 ;
    //     setItems((prev) => {
    //         console.log("Our prev");
    //         console.log(prev);
    //         // const newItems = [...prev];
    //         // console.log("HI!" + newItems);
    //         //     if(newItems.checked) {
    //         //         selecteditems.push(newItems);
    //         //     }

    //         // // newItems.push({
    //         // //     title: `Task ${newItems.length + 1}`,
    //         // //     checked: true,
    //         // //     tag: getNextTag()
    //         // // });

    //     });
    }


    function renderAddButton() {
        return (

  
            <Link to={{ // Link to the next page
                pathname: SLUGS.details,
                data: selecteditems
              }}>
                {/* <butt            on onClick={onAddButtonClick} > Click Me </button> */}
                <Button onClick={onAddButtonClick}>Ok</Button>
            {/* <Row
                horizontal='center'
                vertical='center'
                className={[classes.tagStyles, classes.addButton].join(' ')}
                onClick={onAddButtonClick}
            >
                +
            </Row> */}
            
            </Link>
            


            
            // <Row
            //     horizontal='center'
            //     vertical='center'
            //     className={[classes.tagStyles, classes.addButton].join(' ')}
            //     onClick={onAddButtonClick}
            // >
            //     +
            // </Row>
        );
    }

    return (


        <CardComponent
            containerStyles={props.containerStyles}
            title='Scenarios'
            // link='View all'
            subtitle='Projects'
            items={[
                <Row horizontal='space-between' vertical='center'>
                    <span className={[classes.itemTitle, classes.greyTitle].join(' ')}>
                        Create new task
                    </span>
                    {renderAddButton()}
                </Row>,
                ...items.map((item, index) => (
                    <TaskComponent
                        classes={classes}
                        index={index}
                        item={item}
                        onCheckboxClick={onCheckboxClick}
                        onTagClick={onTagClick}
                        
                    />
                ))
            ]}
        />
    );
}

function TaskComponent({ classes, index, item = {}, onCheckboxClick, onTagClick }) {
    const { tag = {} } = item;
    return (
        <Row horizontal='space-between' vertical='center'>
            <Row>
                <div className={classes.checkboxWrapper} onClick={() =>onCheckboxClick(index)}>
                    {item.checked ? <IconCheckboxOn /> : <IconCheckboxOff />}
                </div>
                <span className={classes.itemTitle}>{item.title}</span>
            
            </Row>
            <TagComponent
                backgroundColor={tag.backgroundColor}
                classes={classes}
                color={tag.color}
                index={index}
                onClick={onTagClick}
                text={tag.text}
            />
        </Row>
    );
}

function TagComponent({ backgroundColor, classes, color, index, onClick, text }) {
    return (
        <Row
            horizontal='center'
            vertical='center'
            style={{ backgroundColor, color }}
            className={classes.tagStyles}
            onClick={() => onClick(index) }
        >
            {text}
        </Row>
    );
}

export default ScenariosComponent;
