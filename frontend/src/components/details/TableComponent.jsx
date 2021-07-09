import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container } from 'react-grid-system';
import {
    getImpactCategoriesTableHeaders,
    getImpactAssessmentData
} from 'interface/projectInterface';
/**
 * displays the impact catagories table of the selected model of the related product.
 */
class TableComponent extends Component {
    state = {
        headers: getImpactCategoriesTableHeaders(),
        rows: getImpactAssessmentData()
    };
    render() {
        const idKey = this.props.tableKey;
        return (
            <Container fluid={true}>
                <table className='w3-table-all w3-card-4 w3-center '>
                    <thead>
                        <tr className='TableHeader TableSubTitle' key={'FirstRow'}>
                            {this.state.headers.map((item) => (
                                <th key={idKey + 'thead' + item.key}>{item.value}</th>
                            ))}
                        </tr>
                    </thead>

                    <tbody >
                        <tr  className='TableItems' key={'Data'}>
                            <td key={idKey + 'Global Warming'}>{'Global Warming'}</td>
                            <td key={idKey + 'kg CO2 eq'}>
                                {'kg CO'}
                                <sub>2</sub>
                                {' eq'}{' '}
                            </td>
                            <td key={idKey + 'td-c'}>{this.state.rows.get('Total')}</td>
                            <td key={idKey + 'td-e'}>{this.state.rows.get('Materials')}</td>
                            <td key={idKey + 'td-b'}>
                                {this.state.rows.get('Manufacturing and Transportation')}
                            </td>
                            <td key={idKey + 'td-g'}>{this.state.rows.get('Operation')}</td>
                            <td key={idKey + 'td-h'}>{this.state.rows.get('End of life')}</td>
                        </tr>
                    </tbody>

                </table>
            </Container>
        );
    }
}

export default TableComponent;

TableComponent.propTypes = {
    modelID: PropTypes.string.isRequired,
    modelName: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    tableKey: PropTypes.string.isRequired
};
