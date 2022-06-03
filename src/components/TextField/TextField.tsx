import React from 'react';
import { InputBaseProps } from '@mui/material/InputBase';
import {makeStyles} from '@mui/styles';

import BootstrapInput from '../InputBase/BootstrapInput';
import InputBase, { EnhancedInputBaseProps } from '../InputBase/InputBase';

const useStyles = makeStyles(() => ({
    alignRight: {
        textAlign: 'right'
    },
    alignLeft: {
        textAlign: 'left'
    }
}));

const TextField: React.FC<EnhancedInputBaseProps> = (props: EnhancedInputBaseProps) => {
    const { id, helperText, errorMessage, disabled, textAlign = 'left', ...otherProps } = props;
    const classes = useStyles();

    const handleOnChangeBlur = (onEvent: any) => (event: any) => {
        event.preventDefault();
        onEvent && onEvent(event.target.value);
    };

    return (
        <InputBase
            component={
                <BootstrapInput
                    {...(otherProps as InputBaseProps)}
                    classes={{ input: textAlign === 'right' ? classes.alignRight : classes.alignLeft, border: 0 }}
                    id={id}
                    value={props.value || ''}
                    onBlur={handleOnChangeBlur(props.onBlur)}
                    onChange={handleOnChangeBlur(props.onChange)}
                    disabled={disabled}
                    error={!!errorMessage}
                />
            }
            errorMessage={errorMessage}
            helperText={helperText}
            {...otherProps}
        />
    );
};

export default TextField;
