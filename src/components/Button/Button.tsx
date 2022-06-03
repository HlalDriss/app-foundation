import React from 'react';
import ButtonMat from '@mui/material/Button';
// import { Theme } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import {makeStyles} from '@mui/styles';

export type RemoveStatus =
    | {

          /**
           * If true, the button will be changed to red (supporting_01) color.
           */
          remove?: true;

          /**
           * Button types.
           */
          buttonType: 'tertiary';
      }
    | {

          /**
           * If true, the button will be changed to red (supporting_01) color.
           */
          remove?: false;

          /**
           * Button types.
           */
          buttonType: 'primary' | 'secondary' | 'tertiary' | 'iconOnly';
      };

export type IconStatus =
    | {

          /**
           * Element placed before the children.
           */
          icon: JSX.Element;

          /**
           * Button types.
           */
          buttonType: 'iconOnly';
      }
    | {

          /**
           * Element placed before the children.
           */
          icon?: JSX.Element;

          /**
           * The content of the button.
           */
          children?: any;

          /**
           * Button types.
           */

          buttonType: 'primary' | 'secondary' | 'tertiary';
      };

export type ButtonProps = IconStatus &
    RemoveStatus & {

        /**
         * Button id.
         */
        id?: string;

        /**
         * Tooltip's text to display under the button.
         */
        tooltip?: string;

        /**
         * Override or extend the styles applied to the component.
         */
        className?: any;

        /**
         * If true, the button will be disabled.
         */
        disabled?: boolean;

        /**
         * The content of the button.
         */
        children?: any;

        onClick?: any;

        active?: boolean | false;

        /**
         * The HTML "type" property for button.
         */
        type?: 'button' | 'reset' | 'submit';
    };
const useStyles = makeStyles((theme:any) => ({
    root: { ...theme.typography.button },
    primary: {
        color: theme.palette.project.neutral.white,
        backgroundColor: theme.palette.project.interactive.interactive_01,
        border: '2px solid',
        borderColor: theme.palette.project.interactive.interactive_01,
        borderRadius: 4,
        padding: '0 24px',
        height: 36,
        '&:hover': {
            backgroundColor: theme.palette.project.interactive.interactive_01_hover,
            borderColor: theme.palette.project.interactive.interactive_01_hover
        },
        '&:focus': {
            color: theme.palette.project.interactive.interactive_01,
            backgroundColor: theme.palette.project.neutral.white,
            borderColor: theme.palette.project.interactive.interactive_01
        },
        '&:active': {
            color: theme.palette.project.neutral.white,
            backgroundColor: theme.palette.project.interactive.interactive_01,
            borderColor: theme.palette.project.interactive.interactive_01
        },
        '&:disabled': {
            color: theme.palette.project.neutral.neutral_02,
            backgroundColor: theme.palette.project.neutral.neutral_04,
            borderColor: theme.palette.project.neutral.neutral_04
        }
    },
    secondary: {
        color: theme.palette.project.interactive.interactive_01,
        backgroundColor: theme.palette.project.neutral.neutral_05,
        border: '2px solid',
        borderColor: theme.palette.project.neutral.neutral_05,
        borderRadius: 4,
        padding: (props: any) => (props.icon ? '0 24px 0 16px' : '0 24px'),
        height: 36,
        '&:hover': {
            backgroundColor: theme.palette.project.neutral.neutral_04,
            borderColor: theme.palette.project.neutral.neutral_04
        },
        '&:focus': {
            color: theme.palette.project.interactive.interactive_01,
            backgroundColor: theme.palette.project.neutral.white,
            borderColor: theme.palette.project.interactive.interactive_01
        },
        '&:active': {
            borderColor: theme.palette.project.neutral.neutral_05,
            backgroundColor: theme.palette.project.neutral.neutral_05
        },
        '&:disabled': {
            color: theme.palette.project.neutral.neutral_02,
            backgroundColor: theme.palette.project.neutral.neutral_04,
            borderColor: theme.palette.project.neutral.neutral_04
        },
        '& svg': {
            width: 20,
            height: 20
        }
    },
    tertiary: {
        color: (props: any) => (props.remove
            ? theme.palette.project.supporting.supporting_01
            : theme.palette.project.interactive.interactive_01),
        backgroundColor: 'transparent',
        border: '2px solid',
        borderColor: 'transparent',
        borderRadius: 4,
        padding: (props: any) => (props.icon ? '0 6px' : '0 2px'),
        height: 36,
        '&:hover': {
            color: (props: any) => (props.remove
                ? theme.palette.project.supporting.supporting_01_hover
                : theme.palette.project.interactive.interactive_01_hover),
            backgroundColor: 'transparent'
        },
        '&:focus': {
            
            borderColor: (props: any) => (props.remove
                ? theme.palette.project.supporting.supporting_01
                : theme.palette.project.interactive.interactive_01)
        },
        '&:active': {
            borderColor: 'transparent !important'
        },
        '&:disabled': {
            color: theme.palette.project.neutral.neutral_02
        },
        '& svg': {
            width: 20,
            height: 20
        }
    },
    icon: {
        outline: 'none',
        cursor: (props: any) => (props.disabled ? 'not-allowed' : 'pointer'),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: (props: any) => (props.active
            ? theme.palette.project.interactive.interactive_01
            : theme.palette.project.interactive.interactive_02),
        backgroundColor: (props: any) => (props.active ? theme.palette.project.neutral.white : theme.palette.project.neutral.neutral_04),
        border: '2px solid',
        borderColor: (props: any) => (props.active ? theme.palette.project.interactive.interactive_01 : theme.palette.project.neutral.neutral_04),
        borderRadius: 4,
        padding: 0,
        width: 36,
        height: 36,
        '&:hover': {
            color: theme.palette.project.interactive.interactive_01_hover, // '#083857',
            backgroundColor: theme.palette.project.neutral.neutral_04
        },
        '&:focus': {
            color: theme.palette.project.interactive.interactive_01,
            backgroundColor: theme.palette.project.neutral.white,
            borderColor: theme.palette.project.interactive.interactive_01
        },
        '&:active': {
            color: theme.palette.project.interactive.interactive_02,
            backgroundColor: theme.palette.project.neutral.neutral_04,
            borderColor: theme.palette.project.neutral.neutral_04
        },
        '&:disabled': {
            color: theme.palette.project.neutral.neutral_02,
            backgroundColor: theme.palette.project.neutral.neutral_04,
            borderColor: theme.palette.project.neutral.neutral_04
        },
        '& svg': {
            width: 24,
            height: 24
        }
    }
}));

const Button = (props: ButtonProps) => {
    const {
        buttonType = 'primary',
        children,
        className,
        icon,
        onClick,
        type = 'submit',
        tooltip,
        active,
        remove,
        ...rest
    } = props;

    const classes = useStyles({ icon, remove, active, disabled: props.disabled });

    const getStyle =
        buttonType === 'primary' ? classes.primary : buttonType === 'secondary' ? classes.secondary : classes.tertiary;

    const handleClick = (e: any) => {
        e.currentTarget.blur();
        onClick && onClick(e);
    };

    return (
        <Tooltip title={tooltip ?? ''} aria-label={tooltip}>
            {buttonType !== 'iconOnly' ? (
                <ButtonMat
                    classes={{ root: getStyle, text: classes.root }}
                    startIcon={icon}
                    className={className}
                    disableRipple
                    onClick={handleClick}
                    type={type}
                    disabled={active}
                    {...rest}
                >
                    {children}
                </ButtonMat>
            ) : (
                <button className={classes.icon} onClick={handleClick} type={type} {...rest}>
                    {icon}
                </button>
            )}
        </Tooltip>
    );
};

export default Button;
