import React, { Component } from 'react';
import { Container } from 'react-grid-system';
import {
    getImpactCategoriesTableHeaders,
    getImpactCategoriesTableData
} from 'interface/projectInterface';
import PropTypes from 'prop-types';

/**
 * Mobile version of the TableComponent. Restructures the Table to be displayable on a mobile screen.
 * Switches Rows and Headers and splits the table in two parts.
 */
class MobileTableComponent extends Component {
    state = {
        headers: getImpactCategoriesTableHeaders(this.props.modelID),
        rows: getImpactCategoriesTableData(this.props.modelID)
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
                                <td key={'table1' + idKey + 'thead' + header.key + index + '3'}>
                                    {Object.values(this.state.rows[3])[index + 1]}
                                </td>
                                <td key={'table1' + idKey + 'thead' + header.key + index + '4'}>
                                    {Object.values(this.state.rows[4])[index + 1]}
                                </td>
                                <td key={'table1' + idKey + 'thead' + header.key + index + '5'}>
                                    {Object.values(this.state.rows[5])[index + 1]}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div style={{ margin: '20px' }} />

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
                                key={'table2' + idKey + 'tr' + index}
                            >
                                <th key={'table2' + idKey + 'thead' + header.key + index}>
                                    {header.value}
                                </th>
                                <td key={'table2' + idKey + 'thead' + header.key + index + '0'}>
                                    {Object.values(this.state.rows[0])[index + 1]}
                                </td>
                                <td key={'table2' + idKey + 'thead' + header.key + index + '1'}>
                                    {Object.values(this.state.rows[1])[index + 1]}
                                </td>
                                <td key={'table2' + idKey + 'thead' + header.key + index + '2'}>
                                    {Object.values(this.state.rows[2])[index + 1]}
                                </td>
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
