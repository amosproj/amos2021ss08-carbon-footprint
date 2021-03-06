import React from 'react';
import { any, arrayOf, func, string } from 'prop-types';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import CollapsibleContent from 'components/collapsible/CollapsibleContent';
import { useSidebar } from 'hooks/useSidebar';

const useStyles = createUseStyles({
    activeContainer: {
        backgroundColor: ({ theme }) => theme.color.paleBlueTransparent
    },
    container: {
        display: 'flex',
        height: 50,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: ({ theme }) => theme.color.paleBlueTransparent
        },
        paddingLeft: ({ level }) => 16 * level,
        transition: 'all 0.2s ease-in-out'
    },
    leftBar: {
        borderLeft: ({ theme, level }) =>
            level > 1 ? 'none' : `3px solid ${theme.color.darkGrayishBlue}`
    },
    title: {
        fontSize: ({ theme }) => theme.typography.icontitle.fontSize, // left bar titles
        lineHeight: '20px',
        letterSpacing: '0.2px',
        color: ({ theme, isActive }) =>
            isActive
                ? theme.uniformStyle.color.highlightingColor
                : theme.uniformStyle.color.secondaryFontColor, //(isActive ? theme.color.paleBlue : theme.color.grayishBlue),
        marginLeft: 10,
        fontWeight: 'inherit'
    }
});

/** Creates a MenuItemComponent
 *
 * @param {*} param0
 * @returns
 */
function MenuItemComponent({ children, icon = '', id, items = [], level = 1, onClick, title }) {
    const theme = useTheme();
    const isCollapsible = children && children.length > 0;
    const { isExpanded, isActive, onItemClick } = useSidebar({
        isCollapsible,
        item: id,
        items
    });
    const classes = useStyles({ theme, level, isActive });
    const classNameColumn = isActive ? classes.leftBar : '';
    const classNameContainer = [classes.container, isActive && classes.activeContainer].join(' ');
    const iconColor = isActive ? '#AE56FF' : '#F0F0F0';

    function onItemClicked(e) {
        if (onClick) {
            onClick(e);
        }
        onItemClick();
    }

    return (
        <Column key={id} className={classNameColumn}>
            <Row vertical='center' onClick={onItemClicked} className={classNameContainer}>
                {/* Styling needs to be done in js here to determin isActive properly */}
                <div className='SideBarIconStyle' style={{ color: iconColor }}>
                    <i className={icon} aria-hidden='true' />
                </div>
                <span className='SideBarTitle' style={{ color: iconColor }}>
                    {title}
                </span>
            </Row>
            {isCollapsible && (
                <CollapsibleContent expanded={isExpanded}>
                    {children.map((child) => child.type({ ...child.props }))}
                </CollapsibleContent>
            )}
        </Column>
    );
}

MenuItemComponent.defaultProps = {};

MenuItemComponent.propTypes = {
    children: any,
    icon: string,
    id: string,
    onClick: func,
    items: arrayOf(string),
    title: string
};

export default MenuItemComponent;
