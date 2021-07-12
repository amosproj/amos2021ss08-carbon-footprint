import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Col, Container, Row } from 'react-grid-system';

const useStyles = createUseStyles({
    '@keyframes loadingSpin': {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' }
    },
    container: { margin: 0, padding: 0 },
    loading: {
        border: `12px dotted`,
        borderRadius: '50%',
        borderTop: `12px groove #8a00e5`,
        borderRight: '12px solid #f0f0f0',
        width: 120,
        height: 120,
        animationName: '$loadingSpin',
        animationTimingFunction: 'linear',
        animationDuration: '3s',
        animationIterationCount: 'infinite'
    },
    loadingSpan: {
        color: '#8a00e5',
        marginTop: '12px',
        fontSize: 18
    }
});

function LoadingComponent({
    backgroundColor,
    children,
    fullScreen,
    hideText,
    loading,
    noTransparency,
    zIndex,
    text
}) {
    const theme = useTheme();
    const classes = useStyles({ theme, fullScreen, noTransparency, backgroundColor, zIndex });
    return (
        <div style={{ flexGrow: true }}>
            {loading && (
                <>
                    <Container fluid>
                        <Row>
                            <div style={{ marginTop: '30vh', marginRight: 0, marginLeft: 0 }} />
                        </Row>
                        <Row>
                            <Col className={classes.container} align='center' justify='center'>
                                <div className={classes.loading}></div>
                                {!hideText && (
                                    <div className={classes.loadingSpan}>
                                        {text === undefined ? 'Loading ...' : text}
                                    </div>
                                )}
                            </Col>
                        </Row>
                    </Container>
                </>
            )}
            {children || <div />}
        </div>
    );
}

LoadingComponent.propTypes = {
    backgroundColor: PropTypes.string,
    children: PropTypes.any,
    fullScreen: PropTypes.bool,
    height: PropTypes.number,
    hideText: PropTypes.any,
    loading: PropTypes.any,
    noTransparency: PropTypes.bool,
    width: PropTypes.number,
    zIndex: PropTypes.number
};

LoadingComponent.defaultProps = {
    fullScreen: true,
    zIndex: 10
};

export default LoadingComponent;
