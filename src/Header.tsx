import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React from 'react'



const useStyles = makeStyles((theme:Theme) => ({
 
    label: {
        
         ...theme.typography.bodySmall,
        fontSize: 12,
        
        color:theme.palette.project.neutral.neutral_01,
        textTransform: 'capitalize'
    }
}));
export const Header = () => {
    const classes = useStyles();
    return (
        
            <div className={classes.label}>Foundation</div>
    );
}

export default Header;
