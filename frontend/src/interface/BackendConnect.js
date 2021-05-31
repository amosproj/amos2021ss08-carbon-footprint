import axios from 'axios';

class BackendConnect {
    /**
     * Get request to det the details of all the projects from the API via backend.
     * @returns the list of all the projects.
     *
     */
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
    /**
     *   Post request to initiate the calculation for a project based on the project id.
     *   This request returns the calculationId(calcd). which is then used to retrieve the impact
     *   results of a project.
     */
    postCalculationRequest(projectId) {
        // POST request using axios with set headers
        let calcId;
        const headers = {
            Authorization: 'Bearer',
            'My-Custom-Header': 'foobar'
        };
        axios.post(`https://localhost:44323/SimaPro/api/calculation/${projectId}`, { headers });
        //.then(response => this.setState({ articleId: response.data.id }));
        this.postCalculationResultRequest(calcId);
        return true;
    }
    /**
     * Post request to retrieve the impact calculations for a project based on the calculationId
     * from the previous request.
     */
    postCalculationResultRequest(calculationId) {
        // POST request using axios with set headers
        const headers = {
            Authorization: 'Bearer',
            'My-Custom-Header': 'foobar'
        };
        axios.post(`https://localhost:44323/SimaPro/api/calculation/result/${calculationId}`, {
            headers
        });
        //.then(response => this.setState({ articleId: response.data.id }));
        return true;
    }

    /**
     *  Getrequest to get the processes for a model based on the project Id
     *
     */
    async getProjectProcesses(projectId) {
        const headers = {
            Authorization: 'Bearer',
            'My-Custom-Header': 'foobar'
        };
        //console.log("------");
        //console.log(productID);
        let resultProcess;
        await axios
            .get(`https://localhost:44323/SimaPro/api/processes/referencedata/${productID}`, {
                headers
            })
            .then(function (data) {
                const items = data;
                resultProcess = items.data.Result.Data;
                console.log(resultProcess);
            });
        return resultProcess;
    }

    /**
     * Get request to get all the methods required for drop down.
     * @returns the list of methods
     */
    async getMethods() {
        const headers = {
            Authorization: 'Bearer',
            'My-Custom-Header': 'foobar'
        };
        let methods;
        await axios
            .get('https://localhost:44323/SimaPro/api/methods', { headers })
            //Please verify this step
            .then(function (data) {
                const items = data;
                methods = items.data.Result.Data;
            });
        return methods;
    }
}

export { BackendConnect };
