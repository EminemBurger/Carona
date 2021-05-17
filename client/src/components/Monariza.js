import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import MonarizaPic from '../img/monariza.jpg';

const useStyles = makeStyles((theme) => ({
    monariza: {
        width:'100%', 
        height:'100%',
        backgroundImage: `url(${MonarizaPic})`,
        backgroundPosition: 'center 5%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        opacity:'0.6',
    }
}));

export const Monariza = () => {
    
    const classes = useStyles();
    return (
        <div className={classes.monariza}>
            
        </div>
    )
}
