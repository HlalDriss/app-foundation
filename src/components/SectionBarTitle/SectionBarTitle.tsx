import React, { ReactNode, useState } from 'react';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import {makeStyles} from '@mui/styles';
import withStyles from '@mui/styles/withStyles';

import { ExpandMoreIcon } from '../../assets/svg';
import { Theme } from '@mui/material';

const Accordion = withStyles({
    root: {
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0
        },
        '&:before': {
            display: 'none'
        },
        '&$expanded': {
            margin: 'auto'
        }
        // MinWidth: '1266px'
    },
    expanded: {}
})(MuiAccordion);

const AccordionDetails = withStyles(() => ({
    root: {
        display: 'block',
        marginTop: '12px',
        padding: '8px 0px 16px'
    }
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme:Theme) => ({
    chevron: {
        color: ({ expanded }: any) => (expanded ? theme.palette?.project?.interactive?.interactive_01 : theme.palette?.project?.neutral?.neutral_01)
    },
    summary: {
        width: '100%',
        alignItems: 'center',
        display: 'flex'
    },
    title: {
        ...theme.typography.h4,
        fontSize: ({ size }: any) => (size === 'small' ? '15px' : undefined),
        color: theme.palette?.project?.neutral?.black,
        whiteSpace: 'nowrap',
        marginRight: theme.spacing(1.5)
    },
    subTitle: {
        ...theme.typography.h4,
        fontSize: ({ size }: any) => (size === 'small' ? '15px' : undefined),
        color: theme.palette?.project?.neutral?.neutral_01,
        whiteSpace: 'nowrap',
        marginRight: theme.spacing(1.5)
    },
    label: {
        ...theme.typography.h4,
        fontSize: ({ size }: any) => (size === 'small' ? '15px' : undefined),
        color: ({ isError }: any) => (isError ? theme.palette.project.supporting.supporting_01 : theme.palette.project.neutral.neutral_01),
        whiteSpace: 'nowrap',
        marginLeft: theme.spacing(1.5)
    },
    labelValue: {
        ...theme.typography.h4,
        fontSize: ({ size }: any) => (size === 'small' ? '15px' : undefined),
        color: ({ isError }: any) => (isError ? theme.palette.project.supporting.supporting_01 : theme.palette.project.neutral.black),
        whiteSpace: 'nowrap',
        marginLeft: theme.spacing(1.5)
    },
    horizontalLine: {
        borderTop: '1px solid',
        borderColor: ({ isError }: any) => (isError ? theme.palette.project.supporting.supporting_01 : theme.palette.project.neutral.neutral_03),
        width: '100%'
    },
    horizontalLineEnd: {
        borderTop: '1px solid',
        borderColor: ({ isError }: any) => (isError ? theme.palette.project.supporting.supporting_01 : theme.palette.project.neutral.neutral_03),
        width: ({ collapsible }: any) => (collapsible ? '20px' : '58px'),
        marginLeft: theme.spacing(1.5),
        marginRight: ({ collapsible }: any) => collapsible && theme.spacing(1.5)
    },
    AccordionSummaryRoot: {
        marginBottom: -1,
        height: 37,
        minHeight: 37,
        cursor: ({ collapsible }: any) => (collapsible ? 'pointer' : 'default !important'),
        '&$expanded': {
            minHeight: 37
        },
        padding: 0
    },
    content: {
        '&$expanded': {
            margin: '12px 0'
        }
    },
    expanded: {}
}));

export interface SectionBarTitleProps {

    /**
     * id for inputId
     */
    id?: string;

    /**
     * Title
     */
    title: string;

    /**
     * SubTitle
     */
    subTitle?: string;

    /**
     * Label
     */
    label?: string;

    /**
     * Labelvalue
     */
    labelValue?: string;

    /**
     * Size : 'small' | 'normal'
     */
    size?: 'small' | 'normal' | any;

    /**
     * Collapsible
     */
    collapsible?: boolean;

    /**
     * Expanded.
     */
    open?: boolean;

    /**
     * Children
     */
    children?: ReactNode;

    /**
     * displayOnEmpty
     */
    displayOnEmpty?: boolean;

    /**
     * ClassName
     */
    className?: any;

    /**
     * data-testid
     */
    'data-testid'?: string;

    /**
     * isError
     */
    isError?: boolean;
}

export const SectionBarTitle: React.FC<SectionBarTitleProps> = (props: SectionBarTitleProps) => {
    const {
        id,
        title,
        subTitle,
        label,
        labelValue,
        collapsible = false,
        open = true,
        children,
        displayOnEmpty = false,
        size = 'normal',
        'data-testid': dataTestId,
        isError = false
    } = props;
    const [expanded, setExpanded] = useState(open);

    const handleChange = () => {
        if (!collapsible) return;
        setExpanded(!expanded);
    };

    const classes = useStyles({ expanded, collapsible, size, isError });

    const tabIndex = collapsible ? 0 : -1;
    if (!children && !displayOnEmpty) return null;

    return (
        <div id={id} className={props.className} data-testid={dataTestId}>
            <Accordion square expanded={expanded} onChange={handleChange}>
                <MuiAccordionSummary
                    expandIcon={
                        collapsible && <ExpandMoreIcon aria-label={'collapsible'} className={classes.chevron} />
                    }
                    aria-controls={title + '-content'}
                    id={title}
                    classes={{
                        root: classes.AccordionSummaryRoot,
                        content: classes.content,
                        expanded: classes.expanded
                    }}
                    tabIndex={tabIndex}
                >
                    <div className={classes.summary}>
                        <div className={classes.title}>{title}</div>
                        {subTitle && <div className={classes.subTitle}>{subTitle}</div>}
                        <div className={classes.horizontalLine} />
                        {label && <div className={classes.label}>{label}</div>}
                        {labelValue && <div className={classes.labelValue}>{labelValue}</div>}
                        {(label || labelValue) && <div className={classes.horizontalLineEnd} />}
                    </div>
                </MuiAccordionSummary>
                <AccordionDetails>{children}</AccordionDetails>
            </Accordion>
        </div>
    );
};

export default SectionBarTitle;
