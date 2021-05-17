import React from 'react'
import  LoginDiv from '../components/Logindiv';
import { Monariza } from '../components/Monariza';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateRows: '100%',
        gridTemplateColumns:'50% 50%',
        minWidth: '1600px',
    }
}));


export default function Login() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Monariza/>
            <LoginDiv/>
        </div>
    )
}









