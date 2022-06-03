import React from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import { InputBaseProps as InputBasePropsMat } from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import {makeStyles} from '@mui/styles';

export interface InputBaseProps {

    /**
     * Component id
     */
    id?: string;

    /**
     * Label of the input
     */
    label?: string;

    /**
     * Component to use as input
     */
    component?: any;

    /**
     * Text to display under the input
     */
    helperText?: string;

    /**
     * Error message
     */
    errorMessage?: string;

    error?: boolean;

    /**
     * Is component required
     */
    required?: boolean;

    /**
     * Is component visible
     */
    visible?: boolean;

    /**
     * DataTestId for testing engine
     */
    dataTestId?: string;

    /**
     * Component width
     */
    width?: string;

    /**
     * TextAlignRight
     */
    textAlign?: 'left' | 'right' | any;

    /**
     * Inline, if true, not display label, errormessage and helpertext
     */
    inline?: boolean;

    /*
    BindComponent received its value
    */
    isInitialized?: boolean;

    /**
     * display percentage ( for rate input component)
     */
    displayPercentage?: boolean;

    /**
     * Patch immediately
     */
    immediatePatch?: boolean;

    /**
     * href for patching
     */
    href?: any;
}

export interface EnhancedInputBaseProps extends InputBasePropsMat, InputBaseProps {}

const useStyles = makeStyles((theme: any) => ({
    label: {
        ...theme.typography.bodySmall,
        color: theme.palette.project.neutral.neutral_01,
        marginBottom: 6
    },
    asterisk: {
        color: theme.palette.project.supporting.supporting_01
    },
    helperText: {
        ...theme.typography.bodySmall,
        color: theme.palette.project.neutral.black,
        marginTop: 4
    }
}));

const InputBase = (props: InputBaseProps) => {
    const {
        label,
        id,
        component,
        required,
        helperText,
        errorMessage,
        visible = true,
        dataTestId,
        inline,
        error
    } = props;
    const classes = useStyles();

    const FormHelperTextLocal: any = () => !inline &&
        (error || helperText ? (
            <FormHelperText classes={{ root: classes.helperText }} error={error}>
                {errorMessage || helperText}
            </FormHelperText>
        ) : (
            <div style={{ height: 24 }} />
        ));
    return visible ? (
        <div data-testid={dataTestId}>
            {!inline && label && (
                <InputLabel
                    id={id}
                    htmlFor={id + '-input'}
                    aria-describedby={id + '-input'}
                    classes={{ asterisk: classes.asterisk, root: classes.label }}
                    required={required}
                >
                    {label}
                </InputLabel>
            )}
            <div onClick={(event) => event.stopPropagation()}>{component}</div>

            {!inline && <FormHelperTextLocal />}
        </div>
    ) : null;
};

export default InputBase;
