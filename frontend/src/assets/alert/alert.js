import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
}

export function ErrorAlert(error) {
    if (error === 400) {
        return (
            <div>
                <Alert severity='error'>
                    There are no preset calculation settings for this product.Please check with the
                    admin
                </Alert>
            </div>
        );
    } else if (error === 502) {
        return (
            <div>
                <Alert severity='error'>
                    Multiple requests are sent for the same product. Handling this error is in
                    progress. For now please restart both frontend and backend.
                </Alert>
            </div>
        );
    }
}
