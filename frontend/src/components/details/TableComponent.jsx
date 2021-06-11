import React, { Component } from 'react';
import { Container } from 'react-grid-system';
import { getImpactCategoriesTableHeaders } from 'interface/projectInterface';
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
                unit: 'kg CO2 eq',
                total: '2,350,811',
                materialsLPT: '874,356',
                manufacturing: '71,532',
                operations: '2,114,344',
                endOfLife: '-790,420'
            },
            {
                key: 'row-2',
                impactCategory: 'Ozon layer depletion',
                unit: 'kg CFC-11 eq',
                total: '12',
                materialsLPT: '0',
                manufacturing: '0',
                operations: '12',
                endOfLife: '0'
            },
            {
                key: 'row-3',
                impactCategory: 'Photochemical oxidant formation (POCP)',
                unit: 'kg C2H4 eq',
                total: '2,350,811',
                materialsLPT: '874,356',
                manufacturing: '71,532',
                operations: '2,114,344',
                endOfLife: '-332'
            },
            {
                key: 'row-4',
                impactCategory: 'Acidification',
                unit: 'kg SO2 eq',
                total: '12',
                materialsLPT: '0',
                manufacturing: '0',
                operations: '12',
                endOfLife: '12,159'
            },
            {
                key: 'row-5',
                impactCategory: 'Eutrophication',
                unit: 'kg PO4 eq',
                total: '12',
                materialsLPT: '0',
                manufacturing: '0',
                operations: '12',
                endOfLife: '–5,016'
            },
            {
                key: 'row-6',
                impactCategory: 'Nonrenewable energy',
                unit: 'MJ eq',
                total: '2,781,500,619',
                materialsLPT: '14,672,424',
                manufacturing: '1,454,845',
                operations: '2,774,610,300',
                endOfLife: '–9,236,950'
            }
        ]
    };
    render() {
        const idKey = this.props.id;
        return (
            // TODO:left margin value needed to be fixed
            <Container fluid={true}>
                {/* TODO: dynamic display of product and model */}
                <h5 className='TableTitle'>Large Power Transformer</h5>
                <h6 className='TableSubTitle'>3 Phase GSU transformer</h6>

                <table className='w3-table-all w3-card-4 w3-small w3-center'>
                    <thead>
                        <tr key={'FirstRow'} style={{ backgroundColor: '#e2d000' }}>
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
