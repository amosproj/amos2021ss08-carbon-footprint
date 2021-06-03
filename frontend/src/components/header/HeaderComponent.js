import React, { useContext } from 'react';
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarContext } from 'hooks/useSidebar';
import SLUGS from 'resources/slugs';
import { IconArrow, IconLogin } from 'assets/icons';
import { PrivateSectionContext } from 'hooks/PrivateSectionContext';

// const useStyles = createUseStyles((theme) => ({
//     avatar: {
//         height: 35,
//         width: 35,
//         minWidth: 35,
//         borderRadius: 50,
//         marginLeft: 14,
//         border: `1px solid ${theme.color.lightGrayishBlue2}`,
//         '@media (max-width: 768px)': {
//             marginLeft: 14
//         }
//     },
//     container: {
//         height: 50,
//         widht: 200,
//         color: theme.uniformStyle.color.highlightingColor // header title color
//     },
//     name: {
//         ...theme.typography.itemTitle,
//         textAlign: 'right',
//         '@media (max-width: 768px)': {
//             display: 'none'
//         }
//     },
//     separator: {
//         borderLeft: `1px solid ${theme.color.lightGrayishBlue2}`,
//         marginLeft: 40,
//         marginRight: 10,
//         marginTop: 5,
//         height: 30,
//         width: 3,
//         '@media (max-width: 768px)': {
//             marginLeft: 14,
//             marginRight: 0
//         }
//     },
//     icontitle: {
//         ...theme.typography.icontitle,
//         marginLeft: 40,
//         marginTop: 0,
//         '@media (max-width: 1080px)': {
//             // marginLeft:50
//         },
//         '@media (max-width: 468px)': {
//             fontSize: 15
//         }
//     },
//     subtitle: {
//         ...theme.typography.title,
//         '@media (max-width: 1080px)': {
//             marginLeft: 0
//         },
//         '@media (max-width: 468px)': {
//             fontSize: 15
//         }
//     },
//     title: {
//         ...theme.typography.title,
//         '@media (max-width: 1080px)': {
//             marginLeft: 80
//         },
//         '@media (max-width: 468px)': {
//             fontSize: 15
//         }
//     },
//     iconStyles: {
//         cursor: 'pointer',
//         marginLeft: 0,
//         width: 200,
//         height: 200,

//         '@media (max-width: 768px)': {
//             marginLeft: 12
//         }
//     }
// }));

/**
 * The Header Component is a shared component between all pages. It displays
 * the related header title of the selected section in the SidebarComponent changes.
 *
 * @author Irem Toroslu
 * @returns the header title, subtitles related to the selected section in the SidebarComponent. It also displays the user name in the header bar as well.
 */
function HeaderComponent() {
    const { currentItem } = useContext(SidebarContext); // get the current Path selected in the Sidebar
    const [selectedProducts] = useContext(PrivateSectionContext);
    const theme = useTheme();
    // const classes = useStyles({ theme });

    let title;
    let subtitle;
    let subsubtitle;

    switch (true) {
        case currentItem === SLUGS.dashboard:
            title = 'My Dashboard';
            break;
        case currentItem === SLUGS.categories:
            title = 'Categories';
            break;
        case currentItem === SLUGS.generation:
            title = 'Generation';
            break;
        case currentItem === SLUGS.transmission:
            title = 'Transmission';
            break;
        case currentItem === SLUGS.industrialApplications:
            title = 'Industrial Applications';
            break;
        case currentItem === SLUGS.details:
            title = 'Details ';
            subtitle = ' Selected product   ';
            subsubtitle =
                selectedProducts[0].productName === undefined
                    ? ' Please select a model first'
                    : ' ' + selectedProducts[0].productName;
            break;
        case currentItem === SLUGS.generation + '/products':
            title = 'Product Catagory';
            break;
        case currentItem === SLUGS.generation + '/solutions':
            title = 'Solutions';
            break;
        case currentItem === SLUGS.generation + '/services':
            title = 'Services';
            break;
        case currentItem === SLUGS.settings:
            title = 'Settings';
            break;
        default:
            title = '';
    }

    function UseArrow(selected) {
        if (title === 'Details ' && !(selected === undefined)) {
            // return <IconArrow height='10' />;
            return <i className='fa fa-fw fa-arrow-right' /> 
        }
        return null;
    }

    return (
        <Row
            className='HeaderContainer'
            vertical='center'
            horizontal='space-between'
            style={{
                background: theme.uniformStyle.color.secondaryBackgroundColor,
                height: 70
            }}
        >
            <span className={'HeaderTitle' + ' w3-padding-16 w3-margin-left'}>
                {title}
                <UseArrow/>
                {subtitle}
                <UseArrow/>
                {subsubtitle}
            </span>

            <Row vertical='baseline' horizontal='flex-start' style={{ marginRight: 20 }}>
                <div className='HeaderIconSyle'>
                    <i className='fa fa-user-circle-o' color='white' />
                </div>
                <div className='HeaderUserName'>user name</div>
            </Row>
        </Row>
    );
}

HeaderComponent.propTypes = {
    title: string
};

export default HeaderComponent;
