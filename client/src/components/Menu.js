import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import '../App.css';

const bul = makeStyles({
    btn: {
        background: "url(\'../img/menu.png\')",
        backgroundPosition: 'center center',
        position: 'relative',
        top: '10px',
        width: '50px',
        height: '50px',
    },
  });

export default function Menu() {
    const classes = bul();

    return (
        <div style={{height:"0px"}}>
            <button className = "menubtn"/>
        </div>
    )
}

