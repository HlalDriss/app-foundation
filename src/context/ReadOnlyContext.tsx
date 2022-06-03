import React from 'react';

const ReadOnlyContext = React.createContext<boolean | undefined>(false);

const ReadOnlyContextProvider = ({ children, value }: { children: any; value?: boolean }) => (
    <ReadOnlyContext.Provider value={value}>{children}</ReadOnlyContext.Provider>
);

export { ReadOnlyContext, ReadOnlyContextProvider };
