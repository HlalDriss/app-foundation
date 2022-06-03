import { useContext, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import baContext from '../context/baContext';
import * as aiaReducer from 'config/store/reducers/aiaReducer';
import { uniqueId } from 'config/utils/system';

const useBindInputToStep = ({ hRef, property }: any) => {
    const dispatch = useDispatch();
    const context = useContext(baContext);
    const baId: any = context.baId;
    const [inputId] = useState(uniqueId(property));
    const currentStep = useSelector((state: any) => state?.aia?.[baId]?.steps?.current, shallowEqual);
    const [step, setStep] = useState(currentStep); // Important : Save the step when AddInput, it will be used when unmount.
    // It's prevent the effect of changing current step

    const status = useSelector(
        (state: any) => state?.aia?.[baId]?.steps?.[currentStep]?.[hRef]?.[property]?.status?.value,
        shallowEqual
    );

    const messageList = useSelector(
        (state: any) => status === 'error' && state.aia[baId].steps[currentStep][hRef][property].status.messageList,
        shallowEqual
    );

    useEffect(() => {
        if (!hRef) return;
        dispatch(aiaReducer.aiaStepAddInput({ baId, hRef, property, step: currentStep, inputId }));
        setStep(currentStep);

        return () => {
            dispatch(aiaReducer.aiaStepRemoveInput({ baId, hRef, property, step }));
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hRef]);

    return { inputId, status, messageList };
};

export default useBindInputToStep;
