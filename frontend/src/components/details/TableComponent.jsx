import React, { Component } from 'react';
import { Container } from 'react-grid-system';
import {
    getImpactCategoriesTableHeaders,
    getImpactAssessmentData
} from 'interface/projectInterface';
/**
 *
 * @returns the impact catagories table of the selected model of the related product.
 *
 * @author Parham Gandomkar, Irem Toroslu
 *
 *
 */
class TableComponent extends Component {
    state = {
        headers: getImpactCategoriesTableHeaders(),
        rows: [
            {
                key: 'row-1',
                impactCategory: 'Global Warming',
                unit: getImpactAssessmentData[6],
                total: getImpactAssessmentData[5],
                materialsLPT: getImpactAssessmentData[4],
                manufacturing: getImpactAssessmentData[0],
                operations: getImpactAssessmentData[3],
                endOfLife: getImpactAssessmentData[2]
            }
        ]
    };
    render() {
        console.log('getImpactAssessmentData[6]');
        console.log(getImpactAssessmentData[6]);
        const idKey = this.props.id;
        return (
            // TODO:left margin value needed to be fixed
            <Container fluid={true}>
                {/* TODO: dynamic display of product and model */}
                <h5 className='TableTitle'>Large Power Transformer</h5>
                <h6 className='TableSubTitle'>3 Phase GSU transformer</h6>

                <table className='w3-table-all w3-card-4 w3-small w3-center'>
                    <thead>
                        <tr key={'FirstRow'} style={{ backgroundColor: '#82baa9' }}>
                            {this.state.headers.map((item) => (
                                <th key={idKey + 'thead' + item.key}>{item.value}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.rows.map((item, index) => (
                            <tr key={idKey + index} className='TableItems'>
                                <td key={idKey + 'td-a' + item.key}>{item.impactCategory}</td>
                                <td key={idKey + 'td-b' + item.key}>{item.unit}</td>
                                <td key={idKey + 'td-c' + item.key}>{item.total}</td>
                                <td key={idKey + 'td-e' + item.key}>{item.materialsLPT}</td>
                                <td key={idKey + 'td-f' + item.key}>{item.manufacturing}</td>
                                <td key={idKey + 'td-g' + item.key}>{item.operations}</td>
                                <td key={idKey + 'td-h' + item.key}>{item.endOfLife}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>
        );
    }
}

export default TableComponent;
