import React, { Component } from 'react';
import { Container } from 'react-grid-system';
import {
    getImpactCategoriesTableHeaders,
    getImpactAssessmentData
} from 'interface/projectInterface';
import PropTypes from 'prop-types';

/**
 * Mobile version of the TableComponent. Restructures the Table to be displayable on a mobile screen.
 * Switches Rows and Headers and splits the table in two parts.
 */
class MobileTableComponent extends Component {
    state = {
        headers: getImpactCategoriesTableHeaders(),
        rows: getImpactAssessmentData()
    };
    render() {
        const idKey = this.props.tableKey;
        return (
            <Container fluid={true}>
                {/* dynamic display of product and model */}
                <h5 className='TableTitle'>{this.props.productName}</h5>
                <h6 className='TableSubTitle'>
                    {/* Don't display model name if model name == product name or undefined */}
                    {this.props.modelName === this.props.productName ||
                    this.props.modelName === undefined
                        ? ''
                        : this.props.modelName}
                </h6>

                <table className='w3-table-all w3-card-4 w3-small w3-center'>
                    {/* style needs to be defined in js */}
                    <tbody>
                        {this.state.headers.map((header, index) => (
                            <tr
                                style={
                                    index === 0
                                        ? { backgroundColor: '#d1a675', fontWeight: 'bold' }
                                        : {}
                                }
                                key={'table1' + idKey + 'tr' + index}
                            >
                                <th key={'table1' + idKey + 'thead' + header.key + index}>
                                    {header.value}
                                </th>
                                {getRowDataHelper(idKey, index, this.state.rows)}
                                {/* <td key={'table1' + idKey + 'thead' + header.key + index + '3'}>
                                    {Object.values(this.state.rows[3])[index + 1]}
                                </td>
                                <td key={'table1' + idKey + 'thead' + header.key + index + '4'}>
                                    {Object.values(this.state.rows[4])[index + 1]}
                                </td>
                                <td key={'table1' + idKey + 'thead' + header.key + index + '5'}>
                                    {Object.values(this.state.rows[5])[index + 1]}
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>
        );
    }
}

MobileTableComponent.propTypes = {
    modelID: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    modelName: PropTypes.string.isRequired,
    tableKey: PropTypes.string.isRequired
};

export default MobileTableComponent;

/**
 * Makes life a little bit easier, and developers a little bit happier.
 * (By translating the row data to column data for the Mobile component)
 *
 * @param {*} idKey - allows unique id to be generated
 * @param {number} rowIndex - the index of the current row
 * @param rows - the rowdata that will be accesed
 * @returns the <td/> element of the corresponding row
 */
function getRowDataHelper(idKey, rowIndex, rows) {
    switch (rowIndex) {
        case 0:
            return <td key={idKey + 'Global Warming Mobile'}>{'Global Warming'}</td>;
        case 1:
            return (
                <td key={idKey + 'kg CO2 eq Mobile'}>
                    {'kg CO'}
                    <sub>2</sub>
                    {' eq'}{' '}
                </td>
            );
        case 2:
            return <td key={idKey + 'td-c'}>{rows.get('Total')}</td>;

        case 3:
            return <td key={idKey + 'td-e'}>{rows.get('Materials')}</td>;
        case 4:
            return <td key={idKey + 'td-b'}>{rows.get('Manufacturing and Transportation')}</td>;
        case 5:
            return <td key={idKey + 'td-g'}>{rows.get('Operation')}</td>;
        case 6:
            return <td key={idKey + 'td-h'}>{rows.get('End of life')}</td>;
        default:
            return <td />;
    }
}
