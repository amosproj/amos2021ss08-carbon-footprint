import React from 'react';
import { Column } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import MydashboardItemComponent from './MydashboardItemComponent';
import { Container } from 'react-grid-system';

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
            maxWidth: 'none'
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

function DashboardComponent() {
    const classes = useStyles();
    return (
        <Container>
            <Column>
                <div className={classes.todayTrends}>
                    <MydashboardItemComponent />
                </div>
            </Column>
        </Container>
    );
}

export default DashboardComponent;
