export default {
    get: jest.fn((url) => {
        if (url === 'https://localhost:44323/SimaPro/api/projects') {
            return Promise.resolve({
                status: 200,
                statusText: 'OK'
                // data: fixtures.days
            });
        }
    })
};
