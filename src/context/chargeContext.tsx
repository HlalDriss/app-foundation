import React from 'react';

const ChargeContext = React.createContext({
    pool_label: '' as string,
    fund_label: '' as string,
    type: '' as string,
    scope: '' as string,
    premium_type: '' as string,
    surrender_type: '' as string,
    rate: '' as string,
    motive: '' as string,
    end_date: '' as string
});

const ChargeContextProvider = ({ children, value }: { children: any; value: any }) => (
    <ChargeContext.Provider value={value}>{children}</ChargeContext.Provider>
);

export { ChargeContext, ChargeContextProvider };
