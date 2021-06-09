import React, { useState } from 'react';
import { useTheme } from 'react-jss';
import { push as Menu } from 'react-burger-menu';

const getMenuStyles = ({ theme }) => ({
    /* Position and sizing of burger button */
    bmBurgerButton: {
        position: 'absolute',
        width: 26,
        height: 20,
        left: 10,
        top: 25,
        zIndex: 19
    },
    /* Color/shape of burger icon bars */
    bmBurgerBars: {
        background: '#ededed'
    },
    /* Color/shape of burger icon bars on hover*/
    bmBurgerBarsHover: {
        background: theme.color.darkRed
    },
    /* Position and sizing of clickable cross button */
    bmCrossButton: {},
    /* Color/shape of close button cross */
    bmCross: {
        background: theme.color.grayishBlue3
    },
    /*
      Sidebar wrapper styles
      Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
    */
    bmMenuWrap: {
        position: 'fixed',
        height: '100%'
    },
    /* General sidebar styles */
    bmMenu: {
        background: theme.uniformStyle.color.secondaryBackgroundColor // left side bar backgroundcolor
    },
    bmItem: {
        outline: 'none',
        '&:focus': {
            outline: 'none'
        }
    },
    bmMorphShape: {
        fill: theme.color.veryDarkGrayishBlue
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)',
        zIndex: 20
    }
});

function MenuComponent({ pageWrapId, outerContainerId, children, isMobile }) {
    const theme = useTheme();
    const menuStyles = getMenuStyles({ theme });
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Menu
            width={'200px'}
            pageWrapId={pageWrapId}
            outerContainerId={outerContainerId}
            isOpen={!isMobile && isOpen}
            noOverlay={!isMobile}
            disableCloseOnEsc
            styles={menuStyles}
            onStateChange={(state) => {
                setIsOpen(state.isOpen);
                if (state.isOpen) {
                    document.getElementById('page-wrap').style.width = 'calc(100% - 200px)';
                } else {
                    document.getElementById('page-wrap').style.width = '100%';
                }
            }}
        >
            {children}
        </Menu>
    );
}

export default MenuComponent;
