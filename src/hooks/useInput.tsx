import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import useBindInputToStep from './useBindInputToStep';
import useQueryResponse from './useQueryResponse';
import useSetDataToPatch from './useSetDataToPatch';
import useValidator, { Field } from './useValidator';

import usePatch from './usePatch';

/**
 * Handle features on Input
 * @param {string} hRef ressource bind the the property
 * @param {string} property property To bind
 * @param {string} type Type of value
 * @param {object} list List object consisting current list item & List name
 * @param {any} i18nOptions usefull to precise context for i18n
 * @param {any} onChange callback
 * @return {any} array of features
 */
export interface useInputValueProps {

    /**
     * Property to display
     */
    property: any;

    /**
     * Ressource bind the the property
     */
    hRef: any;

    /**
     * Type of value
     */
    type?: string;

    /**
     * If the options values for BindSelectInput should be taken from a href collection
     */
    hRefCollection?: string;

    /**
     * Usefull to precise context for i18n
     */
    i18nOptions?: string;

    /**
     * OnChange callback
     */
    onChange?: any;

    /**
     * List object consisting current list item & List name
     */
    list?: any;

    /**
     * Patch immdediately
     */
    immediatePatch?: boolean;

    /**
     * Disable buttons transaction Id
     */
    transactionId?: string;

    /**
     * Store in Redux or not to patch it further
     */
    notToStore?: boolean;

    /**
     * Trigerred after the immediate patch
     */
    onImmediatePatch?: any;

    /**
     * Hide label
     */
    noLabel?: boolean;

    /**
     * bind or not the component to the redux store
     * true by default
     * false for BindOutputText
     */
    bind?: boolean;
    defaultPatchValue?: any;
}

const useInput = ({
    hRef,
    property,
    hRefCollection,
    type,
    i18nOptions,
    onChange,
    list,
    immediatePatch,
    notToStore,
    transactionId,
    onImmediatePatch,
    noLabel,
    bind = true,
    defaultPatchValue
}: useInputValueProps) => {
    const { t } = useTranslation();
    const { data: response, isLoading: loading } = useQueryResponse(hRef, null, transactionId);
    const { setDataToPatch } = useSetDataToPatch();
    const { FieldWrapper: fieldWrapper, Validation: validation } = useValidator();
    const { inputId, status } = useBindInputToStep({
        hRef,
        property,
        bind
    });

    const { mutateAsync: patch } = usePatch(hRef, { mutationKey: 'useInputPatch' }, transactionId, null);
    const [field, setField]: any = useState({});
    const [value, _setValue] = useState(undefined);
    const [validationResult, setValidationResult]: any = useState({
        valid: true,
        error: undefined
    });

    useEffect(() => {
        if (response?.data) {
            const fieldLocal: Field = fieldWrapper(response.data, property, type, list, immediatePatch);
            setField(fieldLocal);
            _setValue(fieldLocal.value);
        }
    }, [response?.data]);

    const handleOnChange = useCallback(
        (newValue: any) => {
            onChange?.(newValue);
            // We patch immediately according API response
            // to add influencer check here later
            if (!notToStore) {
                if (field.immediatePatch && newValue !== value) {
                    patch({ payload: { [property]: newValue ?? defaultPatchValue } }).then(() => onImmediatePatch?.());
                }
                else {
                    setDataToPatch({ hRef, property, value: newValue });
                }
            }
        },
        [property, field, onChange, patch, hRef, setDataToPatch, notToStore, value]
    );

    const setValue = useCallback(
        (newValue: any) => {
            const result = validation(field, newValue, type);
            setValidationResult(result);
            _setValue(newValue);
            if (result.valid) {
                if (type === 'selectInput' && newValue === '' && hRefCollection === undefined) handleOnChange(null);
                else handleOnChange(newValue);
            }
        },
        [field, type, validation, handleOnChange]
    );

    const label = !noLabel ? property : '';
    const invalid = !validationResult.valid || status === 'error';
    const errorMessage = validationResult.error;
    const error = status === 'error';

    return {
        value,
        setValue,
        loading,
        field,
        inputId,
        invalid,
        label,
        errorMessage,
        error,
        'data-testid': property
    };
};

export default useInput;
