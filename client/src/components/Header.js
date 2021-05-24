import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import WorldImg from '../img/world.jpg';


const newStyles = makeStyles((theme) => ({

    header: {
        gridArea: 'header',
        backgroundImage: `url(${WorldImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        animation: '$slidein 2s',
        filter: 'brightness(50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        "& p": {
            fontSize: '100px',
            zIndex: '1',
            color: 'white',
            animation: '$slideout 2s',
            animationDuration: '2s',
        }
    
      },

      "@keyframes slidein" : {
        "0%" : {
          height: '400px',
          opacity:'0',
          filter: 'brightness(100%)',
        },
      
        "50%" : {
          height: '600px',
          opacity:'1',
          filter: 'brightness(100%)',
      
        },
      
        "100%" : {
          filter: 'brightness(50%)',
        },
      },
      
      
      "@keyframes slideout" : {
        "0%" : {
          filter: 'brightness(20%)',
        },
      
        "50%" : {
          filter: 'brightness(20%)',
      
        },
      
        "100%" : {
          filter: 'brightness(100%)',
        },
      },

}));



export default function Header() {
    
    const classes = newStyles();

    
    return (
        <div className={classes.header}><p>CARONA</p></div>
    )
}
