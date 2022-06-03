import React, { useContext, useEffect, useState } from 'react';

import useInput from '../../hooks/useInput';
import { InputProps } from '../../hooks/useValidator';

import OutputText from '../OutputText/OutputText';
import TextField from '../TextField/TextField';
import { ReadOnlyContext } from '../../context/ReadOnlyContext';
import { valueToUse } from 'config/utils/functions';

/**
 * Display a Input field
 * @param {props} props Contains information related to the input
 * @returns {*} Return the Input
 */

const BindTextField = (props: InputProps) => {
    const {
        inputId,
        value,
        label,
        field,
        setValue,
        loading,
        errorMessage,
        'data-testid': dataTestId
    } = useInput(props);

    const [inputValue, updateInput] = useState(value);
    const readOnlyContext = useContext<boolean | undefined>(ReadOnlyContext);
    const readOnly = props.readOnly ?? readOnlyContext;

    const onChangeMethod = (valueLocal: any) => {
        updateInput(valueLocal);
        props.onChange && props.onChange(valueLocal);
    };

    const onBlurMethod = (data: any) => {
        props.onBlur && props.onBlur(data);
        setValue(data);
    };

    useEffect(() => {
        updateInput(field.value);
    }, [field]);

    const inputValueStr = inputValue ? inputValue + '' : '';

    return readOnly ? (
        <OutputText
            id={inputId}
            label={props.noLabel ? '' : props?.label ?? label}
            loading={loading}
            value={loading ? '' : valueToUse(field, inputValueStr)}
            data-testid={dataTestId}
        />
    ) : (
        <TextField
            id={inputId}
            visible={field.visible}
            label={props.noLabel ? '' : props?.label ?? label}
            required={field?.required}
            disabled={field?.disabled}
            helperText={props.helperText}
            errorMessage={errorMessage}
            onChange={onChangeMethod}
            onBlur={onBlurMethod}
            value={loading ? '' : inputValueStr}
            endAdornment={props.endAdornment}
            dataTestId={dataTestId}
        />
    );
};

export default BindTextField;
