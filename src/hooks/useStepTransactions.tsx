import { useContext, useLayoutEffect, useState } from 'react';

import { StepperContext } from '../context/stepperContext';

const useStepTransactions = (defaultTransactionList: Array<string> = []) => {
    const { transactions } = useContext(StepperContext);
    const [, setTransactionIds] = transactions ?? [[], () => null];
    const [prevTransactionList, setPrevTransactionList] = useState<Array<string>>([]);
    useLayoutEffect(() => {
        setTransactionIds((transactionIds: string[]) => {
            const ids = transactionIds.concat(defaultTransactionList);
            setPrevTransactionList(transactionIds);
            return ids.filter((item, pos) => ids.indexOf(item) === pos);
        });
        return () => setTransactionIds(prevTransactionList);
    }, []);
};

export default useStepTransactions;
