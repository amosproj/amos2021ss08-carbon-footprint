import axios from 'axios';

class BackendConnect {
    getSimaProProjects() {
        // GET request using axios with set headers
        const headers = {
            Authorization: 'Bearer',
            'My-Custom-Header': 'foobar'
        };
        let result;
        axios
            .get('https://localhost:44323/SimaPro/api/projects', { headers })
            .then(function (data) {
                const items = data;
                result = items.data.Result.Data;
                console.log(result);
            });
        return result;
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

export { BackendConnect };
