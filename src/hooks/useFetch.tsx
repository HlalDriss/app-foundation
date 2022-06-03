import { useCallback } from 'react';
import { FetchQueryOptions } from 'react-query';
import queryClient from 'config/utils/queryClient';
import useQueryFunctions from 'foundation/hooks/useQueryFunctions';

const useFetch = (queryProps?: FetchQueryOptions) => {
    const { fetchQueryFn, queryKey } = useQueryFunctions();

    const fetch: any = useCallback(
        (
            hRef: string | { href: string; key?: string[] | string; customKey?: string[] | string },
            queryProp?: FetchQueryOptions,
            transactionId?: string,
            params?: any
        ) => {
            let url: string;
            let queryKeyVar: string[] | string;
            if (typeof hRef === 'string') {
                url = hRef;
                queryKeyVar = queryKey(hRef);
            }
            else {
                url = hRef?.href ?? '';
                queryKeyVar = hRef ? queryKey(hRef?.href, hRef?.key, hRef?.customKey) : '';
            }
            console.log('hreef ',hRef);
            return queryClient.fetchQuery(
                queryKeyVar,
                () => fetchQueryFn(url, transactionId, params),
                queryProp || queryProps
            );
            
            
        },
        [fetchQueryFn, queryKey, queryProps]
    );
      
      
    return { fetch };
};
export default useFetch;
