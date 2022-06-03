import React, { memo } from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Theme } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import {makeStyles} from '@mui/styles';

import { formatValue as formatVal } from 'config/utils/functions';

export interface OutputTextProps {
    id?: string;
    visible?: boolean;
    label?: string;
    value?: string;
    buttonIcon?: JSX.Element;
    onClick?: () => void;
    orientation?: 'vertical' | 'horizontal';
    loading?: boolean;
    tooltipTitle?: JSX.Element | string;
    htmlTooltipMode?: boolean;
    interactiveTooltip?: boolean;
    formatValue?: (value: any) => string | number | undefined;
    format?: 'text' | 'currency' | 'currencyLong' | 'percent' | 'decimal' | 'number' | 'date' | 'dateLong' | 'iban';
    bold?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        rowGap: 14,
        columnGap: 24,
        alignItems: 'baseline',
        flexDirection: ({ orientation }: any) => (orientation === 'vertical' ? 'column' : 'row'),
        width: ({ orientation }: any) => (orientation === 'vertical' ? 278 : '100%')
    },
    label: {
        ...theme.typography.bodySmall,
        width: ({ orientation }: any) => (orientation === 'vertical' ? '100%' : 118)
    },
    value: {
        ...theme.typography.body,
        display: 'flex',
        gap: 12,
        alignItems: 'end',
        maxWidth: ({ orientation }: any) => (orientation === 'vertical' ? '100%' : 198),
        fontWeight: ({ bold }: any) => (bold ? 500 : theme.typography.fontWeightRegular)
    },
    buttonIcon: {
        width: 20,
        color: theme.palette.project.interactive.interactive_01,
        height: 20,
        display: 'flex',
        cursor: 'pointer',
        '&:hover': {
            color: theme.palette.project.hover.hover_01
        },
        '& > svg': {
            height: 20,
            width: 20
        }
    },
    arrow: {
        color: theme.palette.project.neutral.neutral_05,
        '&:before': {
            border: `1px solid ${theme.palette.project.neutral.neutral_04}`
        }
    },
    tooltip: {
        ...theme.typography.body,
        backgroundColor: theme.palette.project.neutral.neutral_05,
        width: 220,
        padding: 10,
        border: `1px solid ${theme.palette.project.neutral.neutral_04}`
    }
}));

const OutputText = ({
    label,
    value,
    buttonIcon,
    onClick,
    orientation = 'vertical',
    loading = false,
    tooltipTitle = '',
    htmlTooltipMode = false,
    interactiveTooltip = false,
    formatValue,
    format = 'text',
    bold,
    ...rest
}: OutputTextProps) => {
    const classes = useStyles({ bold, orientation });
    const formattedValue = () => {
        if (!value) return '-';
        if (formatValue) {
            return formatValue(value);
        }
        else {
            return formatVal(value, format);
        }
    };

    return (
        <div className={classes.root} {...rest}>
            {label && <div className={classes.label}>{label}</div>}
            {loading ? (
                <Skeleton style={{ width: '130px' }} variant="text" />
            ) : (
                <div className={classes.value}>
                    {formattedValue()}
                    {buttonIcon && (
                        <Tooltip
                            classes={htmlTooltipMode ? { tooltip: classes.tooltip, arrow: classes.arrow } : {}}
                            arrow
                            title={tooltipTitle}
                            placement={'top'}
                            disableInteractive={interactiveTooltip}
                        >
                            <div onClick={onClick} role="icon-button" className={classes.buttonIcon}>
                                {buttonIcon}
                            </div>
                        </Tooltip>
                    )}
                </div>
            )}
        </div>
    );
};
export default memo(OutputText);
