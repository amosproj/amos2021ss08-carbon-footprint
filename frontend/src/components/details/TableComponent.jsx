import React, { Component } from 'react';
import { Container } from 'react-grid-system';
import theme from 'resources/theme';
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
        headers: [
            { id: 'header-1', value: 'Impact Category' },
            { id: 'header-2', value: 'Unit' },
            { id: 'header-3', value: 'total' },
            { id: 'header-4', value: 'Materials LPT' },
            { id: 'header-5', value: 'Manufacturing and Transport' },
            { id: 'header-6', value: 'Operations' },
            { id: 'header-7', value: 'End of Life' }
        ],
        rows: [
            {
                id: 'row-1',
                impactCategory: 'Global Warming',
                unit: 'kg CO2 eq',
                total: '2,350,811',
                materialsLPT: '874,356',
                manufacturing: '71,532',
                operations: '2,114,344',
                endOfLife: '-790,420'
            },
            {
                id: 'row-2',
                impactCategory: 'Ozon layer depletion',
                unit: 'kg CFC-11 eq',
                total: '12',
                materialsLPT: '0',
                manufacturing: '0',
                operations: '12',
                endOfLife: '0'
            },
            {
                id: 'row-3',
                impactCategory: 'Photochemical oxidant formation (POCP)',
                unit: 'kg C2H4 eq',
                total: '2,350,811',
                materialsLPT: '874,356',
                manufacturing: '71,532',
                operations: '2,114,344',
                endOfLife: '-332'
            },
            {
                id: 'row-4',
                impactCategory: 'Acidification',
                unit: 'kg SO2 eq',
                total: '12',
                materialsLPT: '0',
                manufacturing: '0',
                operations: '12',
                endOfLife: '12,159'
            },
            {
                id: 'row-5',
                impactCategory: 'Eutrophication',
                unit: 'kg PO4 eq',
                total: '12',
                materialsLPT: '0',
                manufacturing: '0',
                operations: '12',
                endOfLife: '–5,016'
            },
            {
                id: 'row-6',
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
            <Container fluid='true'>
                {/* TODO: dynamic display of product and model */}
                <h5
                    style={{
                        fontSize: theme.typography.smallSubtitle.fontSize,
                        fontWeight: theme.typography.smallSubtitle.fontWeight
                    }}
                >
                    Large Power Transformer
                </h5>
                <h6
                    style={{
                        fontSize: theme.typography.secondSmallSubtitle.fontSize,
                        fontWeight: theme.typography.secondSmallSubtitle.fontWeight
                    }}
                >
                    3 Phase GSU transformer
                </h6>

                <table className='w3-table-all w3-card-4 w3-small w3-center'>
                    <thead>
                        <tr style={{ backgroundColor: theme.uniformStyle.color.tableHeaderColor }}>
                            {this.state.headers.map((item) => (
                                <th key={'thead' + item.id}>{item.value}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.rows.map((item) => (
                            <tr>
                                <td key={idKey + 'td' + item.id}>{item.impactCategory}</td>
                                <td key={idKey + 'td' + item.id}>{item.unit}</td>
                                <td key={idKey + 'td' + item.id}>{item.total}</td>
                                <td key={idKey + 'td' + item.id}>{item.materialsLPT}</td>
                                <td key={idKey + 'td' + item.id}>{item.manufacturing}</td>
                                <td key={idKey + 'td' + item.id}>{item.operations}</td>
                                <td key={idKey + 'td' + item.id}>{item.endOfLife}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>
        );
    }
}

export default TableComponent;
