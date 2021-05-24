import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Person from '../img/person.jpeg';

const newStyles = makeStyles((theme) => ({
    body: {
        gridArea:'body',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      body_div1: {
        marginLeft:'100px',
        marginRight:'100px',
        width:'50%',
        height: '100%',
        '& img': {
          width:'100%',
          height: "100%",
          background:`url(${Person}) no-repeat center center`,
          backgroundSize: 'cover',
          opacity: '0.8',
    
        }
      },
    
      body_div2: {
        marginLeft:'100px',
        marginRight:'100px',
        width:'50%',
        height: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        '& h2': {
          fontSize: '30px',
          marginTop: '40px',
        },
        '& p ': {
          fontSize: '20px',
          marginBottom: '10px',
        }
      },


}));

export default function Body() {
    const classes = newStyles();

    return (
        <div className={classes.body}>
        <div className={classes.body_div1}>
            <img></img>
        </div>
        <div className={classes.body_div2}>
            <h2>How can we prevent future new variants of the COVID-19 virus?</h2>
            <p>Stopping the spread at the source remains key. Current measures to reduce transmission</p>
            <p> – including frequent hand washing, wearing a mask, physical distancing, good ventilation and avoiding crowded places or closed settings –</p>
            <p>continue to work against new variants by reducing the amount of viral transmission and therefore also reducing opportunities for the virus to mutate.</p>
        </div>
      </div>
    )
}
