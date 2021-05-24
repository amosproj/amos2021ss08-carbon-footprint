import React from 'react';
import axios from 'axios';

class GetRequestSetHeaders{
    state = {
        totalReactPackages: null
    };
    componentDidMount() {
        // GET request using axios with set headers
        const headers = {
            'Authorization': 'Bearer',
            'My-Custom-Header': 'foobar'
        };
        const response= axios.get('https://localhost:44323/SimaPro/api/projects', { headers });
            //.then(response => this.setState({ totalReactPackages: response.data.total }));
        console.log(response)
    }

    /*render() {
        const { totalReactPackages } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">GET Request with Set Headers</h5>
                <div className="card-body">
                    Total react packages: {totalReactPackages}
                </div>
            </div>
        );
    }*/
}

export { GetRequestSetHeaders }; 