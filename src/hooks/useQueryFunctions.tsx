import { useCallback, useContext } from 'react';
import { useDispatch, useStore } from 'react-redux';

import { appConfig } from 'config/appConfig';
import baContext from '../context/baContext';
import * as aiaReducer from 'config/store/reducers/aiaReducer';
import { transactionEnd, transactionStart } from 'config/store/slices/disabledButtonSlice';
import { APIActions, getStatusReport } from 'config/utils/functions';
import queryClient from 'config/utils/queryClient';

import useNotification from './useNotification';

const useQueryFunctions = () => {
    const dispatch = useDispatch();
    const context = useContext(baContext);
    const baId: string = context.baId ? context.baId : '';
    const modifiedHeaderTag = appConfig.modifiedHeaderTag;
    const store = useStore();
    const { error } = useNotification();
    const getPropertyStatusReport = (statusReport: any, property: string) => {
        let messageList: any = [];
        let errorCount = 0;
        let warningCount = 0;
        statusReport?.messages &&
            statusReport.messages.forEach((message: any) => {
                // Specific to ERR 400
                if (typeof message.context === 'object') {
                    message.context.forEach((contextLocal: any) => {
                        contextLocal.propertyNames.forEach((propertyName: any) => {
                            if (propertyName === property) {
                                if (message.severity === 'error') errorCount += 1;
                                if (message.severity === 'warning' || message.severity === 'warn') warningCount += 1;

                                messageList.push(message);
                            }
                        });
                    });
                }
            });

        return { errorCount, warningCount, messageList };
    };
    const updateInputBound = ({ baId: baIdLocal, hRef, statusReport, state, dispatch: dispatchLocal }: any) => {
        const currentStep = state.aia[baIdLocal]?.steps?.current;
        const boundInputs = state.aia[baIdLocal]?.steps?.[currentStep]?.[hRef];

        // Here the update the status of bound input according the last status report we get on the patch
        boundInputs &&
            Object.entries(boundInputs).forEach(([property]: any) => {
                const { errorCount, warningCount, messageList }: any =
                    statusReport && getPropertyStatusReport(statusReport, property);
                // If yes, we update their status with the severity getting from status_report
                if (errorCount || warningCount) {
                    dispatchLocal(
                        aiaReducer.aiaStepSetInputStatus({
                            baId: baIdLocal,
                            hRef,
                            property,
                            status: { value: errorCount ? 'error' : 'warning', messageList }
                        })
                    );
                }
                else {
                    // If no, we update their status with value = displayed
                    dispatchLocal(
                        aiaReducer.aiaStepSetInputStatus({
                            baId: baIdLocal,
                            hRef,
                            property,
                            status: { value: 'displayed', messageList: [] }
                        })
                    );
                }
            });
    };

    const fetchQueryFn = useCallback((hRef: string, transactionId?: string, params?: any) => {
        transactionId && dispatch(transactionStart({ id: transactionId, tabId: baId }));
        const promise = APIActions.get(hRef, params);
        promise
            .catch((err: any) => {
                const errMessage = err?.response?.data?.messages[0]?.message;

                error(`${errMessage ? errMessage : err.message}`);
            })
            .finally(() => {
                transactionId && dispatch(transactionEnd({ id: transactionId, tabId: baId }));
            });

        return promise;
    }, []);

    const modifierFn = (modifiedArray: any) => {
        modifiedArray &&
            modifiedArray.forEach((message: any) => {
                if (getQueryData(message)) {
                    fetchQueryFn(message).then(
                        // We have to update the redux store on modifier header, to be able to refresh the errors
                        (response:any) => {
                            const statusReport = getStatusReport(response.data);
                            updateInputBound({
                                baId,
                                statusReport,
                                hRef: message,
                                state: store.getState(),
                                dispatch
                            });
                        }
                    );
                }
            });
    };

    const patchQueryFn = useCallback((payload: any, hRef: string, transactionId?: string, params?: any) => {
        transactionId && dispatch(transactionStart({ id: transactionId, tabId: baId }));
        const promise = APIActions.patch(hRef, payload, params);
        promise
            .then((response:any) => {
                // Case1: modified headers recieved in response headers
                if (response?.headers?.[modifiedHeaderTag.toLowerCase()]) {
                    const modifiedUrls = response.headers[modifiedHeaderTag.toLowerCase()];
                    const modifiedArray = modifiedUrls?.split(', ');
                    modifierFn(modifiedArray);
                } // Case2: When patch response is in form of messages, check modified headers & refresh url to get full response
                else if (response?.data?.messages?.length > 0) {
                    const messages = response.data.messages;
                    const modifiedArray: any = messages.find((message: any) => message.context === modifiedHeaderTag);
                    modifierFn(modifiedArray?.message);
                }

                const statusReport = getStatusReport(response.data);
                updateInputBound({ baId, statusReport, hRef: hRef, state: store.getState(), dispatch });

                response && queryClient.setQueryData(queryKey(hRef), response);
            })
            .catch((err: any) => {
                const errMessage = err?.response?.data?.messages[0]?.message;
                if (err?.response?.data) {
                    const statusReport = { messages: err.response.data.messages };
                    updateInputBound({ baId, statusReport, hRef: hRef, state: store.getState(), dispatch });
                }

                error(`${errMessage ? errMessage : err.message}`);
            })
            .finally(() => {
                transactionId && dispatch(transactionEnd({ id: transactionId, tabId: baId }));
            });

        return promise;
    }, []);

    const getPromise = (promise: any, transactionId?: string) => {
        promise
            .then((response: any) => {
                if (response?.data?.messages?.length > 0) {
                    const messages = response.data.messages;
                    const modifiedArray: any = messages.find((message: any) => message.context === modifiedHeaderTag);
                    modifierFn(modifiedArray?.message);
                }
            })
            .catch((err: any) => {
                const errMessage = err?.response?.data?.messages[0]?.message;
                error(`${errMessage ? errMessage : err.message}`);
            })
            .finally(() => {
                transactionId && dispatch(transactionEnd({ id: transactionId, tabId: baId }));
            });
    };

    const postQueryFn = useCallback((payload: any, hRef: string, transactionId?: string, params?: any) => {
        transactionId && dispatch(transactionStart({ id: transactionId, tabId: baId }));
        const promise = APIActions.post(hRef, payload, params);
        getPromise(promise, transactionId);
        return promise;
    }, []);

    const deleteQueryFn = useCallback((hRef: string, transactionId?: string, params?: any) => {
        transactionId && dispatch(transactionStart({ id: transactionId, tabId: baId }));
        const promise = APIActions.delete(hRef, params);
        getPromise(promise, transactionId);

        return promise;
    }, []);

    const optionQueryFn = useCallback((hRef: string, string:string, params?: any) => APIActions.options(hRef, params), []);

    const queryKey = useCallback(
        (url: string, key?: any[] | string, customKey?: any[] | string) => {
            // const globalId: string = baId || 'base';

            if (customKey) {
                return customKey;
            }
            else {
                if (baId) {
                    const convertedKey = typeof key === 'object' ? [baId, ...key] : [baId, key];
                    return key ? convertedKey : [baId, url];
                }
                else {
                    return key ? key : url;
                }
            }
        },
        [baId]
    );

    const refetchQueries = useCallback(
        (
            key: string[] | string | 'all',
            customKey?: boolean,
            options?: { exact?: boolean; active?: boolean; stale?: boolean }
        ) => {
            const queryOptions = { active: true, ...options };
            if (!key) return false;
            if (key === 'all') return queryClient.refetchQueries(queryOptions);
            if (customKey) return queryClient.refetchQueries(key, queryOptions);
            if (typeof key === 'object') return queryClient.refetchQueries(queryKey('', key), queryOptions);
            if (typeof key === 'string') return queryClient.refetchQueries(queryKey(key), queryOptions);
        },
        []
    );

    const getQueryData = useCallback((key: string[] | string, customKey?: boolean) => {
        if (customKey) return queryClient.getQueryData(key);
        if (typeof key === 'object') return queryClient.getQueryData(queryKey('', key));
        if (typeof key === 'string') return queryClient.getQueryData(queryKey(key));
    }, []);

    return {
        fetchQueryFn,
        postQueryFn,
        deleteQueryFn,
        patchQueryFn,
        optionQueryFn,
        queryKey,
        refetchQueries,
        getQueryData
    };
};
export default useQueryFunctions;
