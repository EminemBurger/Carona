import React from 'react';
import  Signupdiv from '../components/Signupdiv';
import { Monariza } from '../components/Monariza';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateRows: '100%',
        gridTemplateColumns:'50% 50%',
    }
}));



export default function Signup() {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Monariza/>
            <Signupdiv/>
        </div>
   
    )
}

