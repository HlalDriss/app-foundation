import React, { createContext, useContext } from 'react';

const ResultContext = createContext<any>(null);

const ResultContextProvider = ({ children, value }: { children: any; value?: any }) => (
    <ResultContext.Provider value={value}>{children}</ResultContext.Provider>
);

const useResult = () => useContext<any>(ResultContext);

export { ResultContext, ResultContextProvider, useResult };
