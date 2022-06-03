import { useDispatch } from 'react-redux';

import { enqueueSnackbar } from 'config/store/slices/notificationsSlice';

const useNotification = () => {
    const dispatch = useDispatch();

    const notification = (message: string, variant: 'error' | 'success' | 'warning' | 'info') => ({
        message: message,
        options: {
            key: new Date().getTime() + Math.random(),
            variant: variant
        }
    });

    const error = (message: string) => dispatch(enqueueSnackbar(notification(message, 'error')));
    const success = (message: string) => dispatch(enqueueSnackbar(notification(message, 'success')));
    const warning = (message: string) => dispatch(enqueueSnackbar(notification(message, 'warning')));
    const info = (message: string) => dispatch(enqueueSnackbar(notification(message, 'info')));

    return { error, success, warning, info };
};

export default useNotification;
