import React from 'react';
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme:Theme) => ({
    root: {
        display: 'flex',
        gap: 4,
        alignItems: 'center'
    },
    url: {
        ...theme.typography.bodySmall,
   
        color: theme.palette.error.light,
        textTransform: 'capitalize',
        '&:hover': {
            cursor: 'pointer',
            textDecoration: 'underline'
        },
        '&:active': {
              color: theme.palette.project.interactive.interactive_02
        }
    },
    label: {
          ...theme.typography.bodySmall,
        fontSize: 12,
        color: theme.palette.info.dark,
        textTransform: 'capitalize'
    }
}));

const Link = ({ url, label, onClick }: { url: string; label?: string; onClick: () => void }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {label && <div className={classes.label}>{label} :</div>}
            <div className={classes.url} onClick={onClick}>
                {url}
            </div>
        </div>
    );
};

export default Link;
