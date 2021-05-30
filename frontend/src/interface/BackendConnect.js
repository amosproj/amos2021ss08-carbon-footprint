import axios from 'axios';

class BackendConnect {
    async getSimaProProjects() {
        // GET request using axios with set headers
        const headers = {
            Authorization: 'Bearer',
            'My-Custom-Header': 'foobar'
        };
        let result;
        await axios
            .get('https://localhost:44323/SimaPro/api/projects', { headers })
            .then(function (data) {
                const items = data;
                result = items.data.Result.Data;
            });
        return result;
    }

    postCalculationRequest(projectId) {
        // POST request using axios with set headers
        const calcId;
        const headers = { 
            'Authorization': 'Bearer',
            'My-Custom-Header': 'foobar'
        };
        axios.post(`https://localhost:44323/SimaPro/api/calculation/${projectId}`,{ headers });
            //.then(response => this.setState({ articleId: response.data.id }));
        postCalculationResultRequest(calcId);
    }

    postCalculationResultRequest(calculationId){
        // POST request using axios with set headers
        const headers = { 
            'Authorization': 'Bearer',
            'My-Custom-Header': 'foobar'
        };
        axios.post(`https://localhost:44323/SimaPro/api/calculation/result/${calculationId}`,{ headers })
            .then(response => this.setState({ articleId: response.data.id }));
    }
}

export { BackendConnect };
