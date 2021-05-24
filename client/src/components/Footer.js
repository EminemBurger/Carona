import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Logo from '../img/carona.png';
import GitHubIcon from '@material-ui/icons/GitHub';

const newStyles = makeStyles((theme) => ({
    footer: {
        gridArea: 'footer',
        display: 'grid',
        backgroundColor:'#faf2da ',
        gridTemplateColumns: 'repeat(12, auto)',
        gridTemplateRows:'150px' , 
        marginTop: '30px',
      },
      
      Info: {
        gridColumnStart: 3,
        gridColumnEnd: 6,
        "& h4": {
          fontSize: "15px",
        },
        "& p" : {
          marginTop: '40px',
          fontSize: '7px',
        }
    
      },
      help: {
        gridColumnStart: 7,
        gridColumnEnd: 9,
        display:'flex',
        alignItems:'center',
        "& img": {
          width: '120px',
          height: '120px',
          background: `no-repeat center center`,
          backgroundSize: 'cover',
        },
      },
      git: {
        gridColumnStart: 9,
        gridColumnEnd: 11,
        display: 'flex',
        alignItems:'center'
      },
    
      gitimage: {
        width:'80px', 
        height:'80px', 
        color: 'black',
        '&:hover': {
          color: '#ae3221'
        }
      },

}));


export default function Footer() {
    const classes = newStyles();

    return (
        <div className={classes.footer}>
        <div className={classes.Info}>
          <h4>Kim Dong Hyeon | YeongCheon, ChungHyRoad 97, MuGungHwa APT | 010 - 4845 -8374 </h4>
          <h4> Email | yjg03298@naver.com </h4>
          <p> &copy;Copyright 2021 CARONA International Plc. All rights reserved</p>

        </div>
        <div className={classes.help}>
        <img src={Logo}></img>
          <br></br>
        </div>
        <div className={classes.git}>
        <a href="https://github.com/EminemBurger"><GitHubIcon className={classes.gitimage}></GitHubIcon></a>
        </div>

        </div>
    )
}
