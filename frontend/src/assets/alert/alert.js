/**
 * @param {*} error error message status code(400/502/401) recieved from SimaPro API
 */

export function ErrorAlert(error) {
    if (error === 400) {
        alert(
            'There are no preset calculation settings for this product. Please contaact your system administrator.'
        );
    } else if (error === 502) {
        alert(
            'You tried to request data for multiple projects at once. Handling this error is work in progress. For now, please restart both frontend and backend to resolve this error.'
        );
    } else if (error === 401) {
        alert('Please verify the SimaPro cerdentials provided at the backend.');
    }
}
