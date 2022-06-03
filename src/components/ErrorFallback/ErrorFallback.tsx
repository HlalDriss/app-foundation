import React from 'react';

import Button from '../Button/Button';

const ErrorFallback = ({ error, resetErrorBoundary }: any) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} role="alert">
        <h2>Something went wrong:</h2>
        <div style={{ fontSize: 16, width: '80%', paddingBottom: 20 }}>{error.message}</div>
        <Button buttonType={'primary'} onClick={resetErrorBoundary}>
            Try again
        </Button>
    </div>
);

export default ErrorFallback;
