import { useQuery, UseQueryOptions } from 'react-query';

import useQueryFunctions from './useQueryFunctions';

interface UseQueryResponseOptions extends UseQueryOptions {
    key?: string[] | string;
    customKey?: string[] | string;
}

const useQueryResponse = (
    hRef: any,
    options?: UseQueryResponseOptions | null,
    transactionId?: string,
    params?: any
) => {
    const { fetchQueryFn, queryKey } = useQueryFunctions();

    const { key, enabled, customKey, ...rest } = options || {};
    const url: string = hRef ?? '';
    const isEnabled = !enabled ? !!url && enabled : !!url;

    return useQuery<any>(
        queryKey(url, key, customKey),
        () => fetchQueryFn(url, transactionId, params), // Fetch function
        {
            ...rest,
            notifyOnChangeProps: 'tracked',
            enabled: isEnabled
        }
    );
};
export default useQueryResponse;
