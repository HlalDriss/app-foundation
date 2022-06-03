import React from 'react';

const AllocationContext = React.createContext({
    type: '' as string,
    object_type: '' as string,
    poolLabel: '' as string,
    referentialPoolAttribute: '' as string,
    referentialPoolsUrl: '' as string,
    availablePools: '' as string,
    createPoolUrl: '' as string,
    amountAttribute: '' as string,
    fundSearchUrl: '' as string,
    financialOptionsHRef: '' as string
});

const AllocationContextProvider = ({ children, value }: { children: any; value: any }) => (
    <AllocationContext.Provider value={value}>{children}</AllocationContext.Provider>
);

export { AllocationContext, AllocationContextProvider };
