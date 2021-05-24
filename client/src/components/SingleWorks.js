import React from 'react'
import { makeStyles } from '@material-ui/core/styles';





export default function SingleWorks({img, h_text, text}) {
    const newStyles = makeStyles((theme) => ({
        single_works: {
            marginLeft: '60px',
            marginRight: '60px',
            textAlign: 'center',
            "& img": {
              height:'200px',
              width: '100%',
              background: `url(${img}) no-repeat center center`,
              backgroundSize: 'cover',
            }
        
          },
    }));
    
    const classes = newStyles();

    
    return (
        <div className={classes.single_works}>
        <img></img>
        <h3>{h_text}</h3>
        <p>{text}</p>
        </div>
    )
}
