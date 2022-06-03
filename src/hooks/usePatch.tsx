import { useMutation } from 'react-query';

import useQueryFunctions from './useQueryFunctions';

export interface mutationPayload {
    payload?: any;
    href?: string;
    transactionId?: string;
}
const usePatch = (hRef?: any, options?: any, transaction?: string, params?: any) => {
    const { patchQueryFn } = useQueryFunctions();

    return useMutation(
        ({ payload, href, transactionId }: mutationPayload) => patchQueryFn(payload ?? {}, href ?? hRef, transactionId ?? transaction, params), // Fetch function
        {
            ...options
        }
    );
};
export default usePatch;
