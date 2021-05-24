import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const newStyles = makeStyles((theme) => ({
    body_header: {
        gridArea:'body_header',
        textAlign: 'center',
        boxSizing: 'border-box',
        fontWeight: 'normal',
        fontStyle: 'normal',
    
        "& span": {
          marginTop: '20px',
          display: "inline-block",
          width: '60px',
          height:'3px',
          marginBottom: '4px',
          backgroundColor: '#8e9775',
        },
        "& h2": {
          fontSize: '44px',
        },
    
      },

}));


export default function BodyHeader() {
    const classes = newStyles();

    return (
        <div className={classes.body_header}>
        <span></span>
        <h2>Visualized corona virus</h2>
        <p>We search with corona virus and make data.</p>
      </div>
    )
}
