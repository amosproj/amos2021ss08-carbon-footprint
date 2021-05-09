import React, { Component } from 'react';

class DetailTable extends Component {
    state = {
        headers: [
            { id: '1', value: 'Impact Category' },
            { id: '2', value: 'Unit' },
            { id: '3', value: 'total' },
            { id: '4', value: 'Materials LPT' },
            { id: '5', value: 'Manufacturing and Transport' },
            { id: '6', value: 'Operations' },
            { id: '7', value: 'End of Life' }
        ],
        rows: [
            {
                id: '1',
                impactCategory: 'Global Warming',
                unit: 'kg CO2 eq',
                total: '2,350,811',
                materialsLPT: '874,356',
                manufacturing: '71,532',
                operations: '2,114,344',
                endOfLife: '-790,420'
            },
            {
                id: '2',
                impactCategory: 'Ozon layer depletion',
                unit: 'kg CFC-11 eq',
                total: '12',
                materialsLPT: '0',
                manufacturing: '0',
                operations: '12',
                endOfLife: '0'
            },
            {
                id: '3',
                impactCategory: 'Global Warming',
                unit: 'kg CO2 eq',
                total: '2,350,811',
                materialsLPT: '874,356',
                manufacturing: '71,532',
                operations: '2,114,344',
                endOfLife: '-790,420'
            },
            {
                id: '4',
                impactCategory: 'Ozon layer depletion',
                unit: 'kg CFC-11 eq',
                total: '12',
                materialsLPT: '0',
                manufacturing: '0',
                operations: '12',
                endOfLife: '0'
            }
        ]
    };
    render() {
        return (
            <div className='w3-container'>
                <h5>Large Power Transformer</h5>
                <h6>3 Phase GSU transformer</h6>

                <table className='w3-table-all w3-card-4 w3-small'>
                    <thead>
                        <tr className='w3-blue-gray'>
                            {this.state.headers.map((item) => (
                                <th key={item.id}>{item.value}</th>
                            ))}
                        </tr>
                    </thead>
                    {this.state.rows.map((item) => (
                        <tr>
                            <td key={item.id}>{item.impactCategory}</td>
                            <td key={item.id}>{item.unit}</td>
                            <td key={item.id}>{item.total}</td>
                            <td key={item.id}>{item.materialsLPT}</td>
                            <td key={item.id}>{item.manufacturing}</td>
                            <td key={item.id}>{item.operations}</td>
                            <td key={item.id}>{item.endOfLife}</td>
                        </tr>
                    ))}
                </table>
            </div>
        );
    }
}

export default DetailTable;
