import { useCallback } from 'react';

import { EnhancedInputBaseProps } from '../components/InputBase/InputBase';
import {
    formatValue,
    getLabelOfOneOf,
    getLink,
    getMaxLength,
    getMaxValue,
    getMinLength,
    getMinValue,
    getOneOfFromResponse,
    getPropertyType,
    getPropertyValue,
    isFieldEditable,
    isFieldRequired,
    isFieldVisible,
    isOneOfField,
    isValidDate
} from 'config/utils/functions';

export interface Field {
    id: string;
    min: number;
    max: number;
    visible: boolean;
    disabled: boolean;
    immediatePatch: boolean | undefined;
    required: boolean;
    minLength: number;
    maxLength: number;
    value: any;
    type: any;
    values: Array<OneofInterface>;
    format?: string;
    valueLabel?: string;
    isOneOf: boolean;
}

export interface OneofInterface {
    value: any;
    label: string;
}

export interface InputProps extends EnhancedInputBaseProps {
    hRef: string;
    property: string;
    hRefCollection?: string;
    context?: string;
    i18nOptions?: any;
    type?: string;
    onChange?: any;
    immediatePatch?: boolean;
    list?: any;
    size?: 'small' | 'medium' | undefined;
    loading?: boolean;
    notToStore?: boolean;
    noLabel?: boolean;
    labelPosition?: string;
    label?: string;
    checked?: boolean;
    useChecked?: boolean;
    mask?: any;
    endAdornment?: any;
    onBlur?: any;
    transactionId?: string;
    dataTestId?: any;

    /**
     * Will be set on the Booststrap component
     */
    width?: any;
    onImmediatePatch?: any;
    defaultPatchValue?: any;
}

export interface ErrorField {
    error: string | null;
    valid: boolean;
}

const useValidator = () => {
    const FieldWrapper = useCallback(
        (data: any, propertyName: string, type?: string, list?: any, immediatePatch?: boolean) => {
            const [editable] = isFieldEditable(data, propertyName, list);

            const value = getPropertyValue(data, propertyName, list);
            const isOneOf = isOneOfField(data, propertyName);

            return {
                id: createId(data, propertyName),
                min: getMinValue(data, propertyName, list),
                max: getMaxValue(data, propertyName, list),
                visible: isFieldVisible(data, propertyName, list),
                disabled: !editable,
                immediatePatch: immediatePatch,
                required: isFieldRequired(data, propertyName),
                minLength: getMinLength(data, propertyName, list),
                maxLength: getMaxLength(data, propertyName, list),
                value: type ? formatValue(value, type) : value,
                type: type ?? getPropertyType(data, propertyName, list),
                values: getOneOfFromResponse(data, propertyName, list),
                valueLabel: isOneOf && getLabelOfOneOf(data, propertyName, value),
                isOneOf
            };
        },
        []
    );

    const createId = (data: any, propertyName: string) => {
        let elementId = '';
        if (data) {
            const link = getLink(data, 'self');
            const baArray = link && link.split('/');
            const id =
                baArray &&
                link
                    ?.split('/')
                    ?.slice(baArray.length - 1, baArray.length)[0]
                    ?.split('-')?.[1];
            elementId = id + '_' + propertyName;
        }

        return elementId;
    };

    const Validation = useCallback((InputWrapper: Field, newValue: any, type?: string) => {
        let validate: ErrorField = {
            error: '',
            valid: true
        };
        validate = ValidateMinMaxValue(InputWrapper, newValue, validate);
        validate = ValidateMinMaxlength(InputWrapper, newValue, validate);

        switch (type) {
            case 'email':
                validate = ValidateEmail(newValue, validate);
                break;
            case 'number':
                validate = ValidateNumber(newValue, validate);
                break;
            case 'inputDate':
                validate = ValidateDate(newValue, validate);
                break;
        }

        return validate;
    }, []);

    const ValidateMinMaxValue = (InputWrapper: Field, value: any, errorField: ErrorField): ErrorField => {
        // Check for max and min values
        if (InputWrapper?.min || InputWrapper?.max) {
            if (+value > InputWrapper.max) {
                errorField.error = 'MORE_THAN_MAXVALUE';
                errorField.valid = false;
            }
            else if (+value < InputWrapper?.min) {
                errorField.error = 'LESS_THAN_MINVALUE';
                errorField.valid = false;
            }

            return errorField;
        }

        return errorField;
    };

    const ValidateMinMaxlength = (InputWrapper: Field, value: any, errorField: ErrorField): ErrorField => {
        // Check for max and min values
        if (InputWrapper?.minLength || InputWrapper?.maxLength) {
            if (value.length > InputWrapper?.maxLength) {
                errorField.error = 'MORE_THAN_MAXLENGTH';
                errorField.valid = false;
            }
            else if (value.length < InputWrapper?.minLength) {
                errorField.error = 'LESS_THAN_MINLENGTH';
                errorField.valid = false;
            }

            return errorField;
        }

        return errorField;
    };

    const ValidateEmail = (value: any, errorField: ErrorField) => {
        if (value && value !== '') {
            const emailRegex = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$');
            const emailValidation = emailRegex.test(value);
            if (!emailValidation) {
                errorField.error = '_ENTER_VALID_EMAIL';
                errorField.valid = false;
            }
        }

        return errorField;
    };

    const ValidateNumber = (value: any, errorField: ErrorField) => {
        if (value && value !== '' && !Number(value)) {
            errorField.error = 'INVALID_NUMBER';
            errorField.valid = false;
        }

        return errorField;
    };

    const ValidateDate = (value: any, errorField: ErrorField) => {
        if (value && value !== '' && !isValidDate(value)) {
            errorField.valid = false;
            errorField.error = 'Invalid Date Format';
        }

        return errorField;
    };

    return { FieldWrapper, Validation };
};

export default useValidator;
