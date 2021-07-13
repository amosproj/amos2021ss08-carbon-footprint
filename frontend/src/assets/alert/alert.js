export function ErrorAlert(error) {
    if (error === 400) {
        alert(
            'There are no preset calculation settings for this product. Please check with the admin'
        );
    } else if (error === 502) {
        alert(
            'Multiple requests are sent for the same product. Handling this error is work in progress. For now, please restart both frontend and backend. To resolve this error.'
        );
    }
}
