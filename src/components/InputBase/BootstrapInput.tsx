import React from 'react';
import InputBaseMat, { InputBaseProps } from '@mui/material/InputBase';
import { alpha, Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import {makeStyles} from '@mui/styles';
import {withStyles} from '@mui/styles';

const removeUndefined = (obj: any) => Object.keys(obj).reduce((acc, key) => {
    const newAcc: any = acc;
    if (obj[key] !== undefined) newAcc[key] = obj[key];
    return newAcc;
}, {});

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: (props: any) => props.width || '278px',
        border: (props: any) => (props.isBorderInput === true || props.isBorderInput === undefined
            ? '1px solid ' + theme.palette.project.neutral.neutral_03
            : 'unset'),
        '&:focus': {
            boxShadow: (props: any) => (props.isBorderInput === true || props.isBorderInput === undefined
                ? `${alpha(theme.palette.project.interactive.interactive_01, 0.01)} 0 0 0 0.2rem`
                : 'unset'),
            borderColor: theme.palette.project.interactive.interactive_01
        }
    }
}));

const CustomInput = withStyles((theme: Theme) => createStyles({
    root: {
        height: 37,
        '& .Mui-error': {
            color: 'green'
        },
        background: theme.palette.project.neutral.white,

        borderRadius: 4,
        ...theme.typography.body
    },
    error: {
        borderColor: `${theme.palette.project.supporting.supporting_01} !important`
    },
    disabled: {
        background: theme.palette.project.neutral.neutral_04,
        color: theme.palette.project.neutral.neutral_02,
        fontWeight: 500
    },
    input: {
        position: 'relative',
        textAlign: (props: any) => props.align || 'left',
        padding: (props: any) => (props.disabled ? '0 12px' : props.padding || '8px 12px'),
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&::placeholder': {
            ...theme.typography.body,
            color: theme.palette.project.neutral.neutral_02,
            opacity: 1
        }
    }
})
)(InputBaseMat);

const BootstrapInput = (props: any) => {
    const {
        isBorderInput,
        width,
        autoFocus,
        disabled,
        endAdornment,
        startAdornment,
        type,
        inputRef,
        inputProps,
        onFocus,
        onBlur,
        onChange,
        placeholder,
        error,
        id,
        required,
        classes,
        value,
        inputComponent,
        defaultValue,
        inputMode,
        onKeyDown,
        onMouseUp,
        title,
        textAlign,
        padding
    } = props;
    const classNames: any = useStyles({ isBorderInput, width });

    let inputFilteredProps: InputBaseProps = {
        autoFocus,
        disabled,
        endAdornment,
        startAdornment,
        type,
        inputRef,
        inputProps: { ...inputProps, 'data-testid': props['data-testid'], title },
        inputComponent,
        onFocus,
        onBlur,
        onChange,
        onKeyDown,
        placeholder,
        error,
        id,
        required,
        classes,
        value,
        defaultValue,
        onMouseUp
    };

    return (
        <CustomInput
            {...removeUndefined(inputFilteredProps)}
            align={textAlign}
            padding={padding}
            inputMode={inputMode}
            className={classNames.root}
        />
    );
};

export default BootstrapInput;
