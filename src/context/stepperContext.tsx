import React, { createContext, useState } from 'react';

const StepperContext = createContext<any>([]);

const StepperContextProvider = ({
    children,
    value
}: {
    children: any;
    value: 'transactionIds' | 'onNextPatchedFn' | any;
}) => {
    const { transactionIds, ...others } = value;
    return (
        <StepperContext.Provider value={{ transactions: useState(transactionIds), ...others }}>
            {children}
        </StepperContext.Provider>
    );
};

export { StepperContext, StepperContextProvider };
