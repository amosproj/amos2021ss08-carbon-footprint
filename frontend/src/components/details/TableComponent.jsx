import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container } from 'react-grid-system';
import {
    getImpactCategoriesTableHeaders,
    getImpactAssessmentData
} from 'interface/projectInterface';
import LoadingComponent from 'components/loading';
/**
 * displays the impact catagories table of the selected model of the related product.
 */
class TableComponent extends Component {
    state = {
        headers: [],
        rows: [],
        stillLoading: true
    };
    getData() {
        let headerData = getImpactCategoriesTableHeaders();
        let rowsData = getImpactAssessmentData();

        this.setState({ headers: headerData });

        while (
            (rowsData && headerData === []) ||
            (rowsData && headerData === undefined) ||
            (rowsData && headerData === null)
        ) {
            rowsData = getImpactAssessmentData();
            headerData = getImpactCategoriesTableHeaders();
            return <LoadingComponent />;
        }
        console.log('getImpactAssessmentData#6');
        this.setState({
            rows: [
                {
                    key: 'row-1',
                    impactCategory: 'Global Warming',
                    unit: rowsData[5],
                    total: rowsData[4],
                    materialsLPT: rowsData[3],
                    manufacturing: rowsData[0],
                    operations: rowsData[2],
                    endOfLife: rowsData[1]
                }
            ]
        });
        this.setState({ stillLoading: false });
    }
    componentDidMount() {
        this.getData();
    }
    componentWillUnmount() {
        console.log('unmount');
    }
    render() {
        const idKey = this.props.tableKey;
        return (
            <Container fluid={true}>
                {/* dynamic display of product and model */}
                <h5 className='TableTitle'>{this.props.productName}</h5>
                <h6 className='TableSubTitle'>
                    {this.props.modelName === this.props.productName ||
                    this.props.modelName === undefined
                        ? ''
                        : this.props.modelName}
                </h6>

                <table className='w3-table-all w3-card-4 w3-small w3-center'>
                    <thead className='TableHeader'>
                        <tr className='TableHeader' key={'FirstRow'}>
                            {this.state.headers.map((item) => (
                                <th key={idKey + 'thead' + item.key}>{item.value}</th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.rows.map((item, index) => (
                            <tr key={'tr' + idKey + index} className='TableItems'>
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

TableComponent.propTypes = {
    modelId: PropTypes.string.isRequired,
    modelName: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    tableKey: PropTypes.string.isRequired
};
