import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import WorldImg from '../img/world.jpg';

import Information from '../img/information.jpg';
import Road from '../img/road.jpeg';
import Area from '../img/area.jpeg';
import Person from '../img/person.jpeg';
import Logo from '../img/carona.png';

import GitHubIcon from '@material-ui/icons/GitHub';

const newStyles = makeStyles((theme) => ({
  wrap: {
    display: 'grid',
    width: '100%',
    minHeight: '1880px',
    height: '1880px',
    gridTemplateAreas:`"header header header"
    "body_header body_header body_header"
    "single_works1 single_works2 single_works3"
    "body body body"
    "footer footer footer"`,
    gridTemplateRows:'600px 200px 400px 500px 180px', 
    gridTemplateColumns: 'minmax(550px, 1fr) minmax(550px, 1fr) minmax(550px, 1fr)',
    fontFamily: 'KoHo, sans-serif',
  },

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

  single_works1: {
    marginLeft: '60px',
    marginRight: '60px',
    textAlign: 'center',
    "& img": {
      height:'200px',
      width: '100%',
      background: `url(${Road}) no-repeat center 80%`,
      backgroundSize: 'cover',
    }

  },
  single_works2: {
    marginLeft: '60px',
    marginRight: '60px',
    textAlign: 'center',
    "& img": {
      height:'200px',
      width: '100%',
      background: `url(${Area}) no-repeat center 50%`,
      backgroundSize: 'cover',
    }

  },
  single_works3: {
    marginLeft: '60px',
    marginRight: '60px',
    textAlign: 'center',
    "& img": {
      height:'200px',
      width: '100%',
      background: `url(${Information}) no-repeat center center`,
      backgroundSize: 'cover',
    }
  },



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

 

export default function Home() {

    const classes = newStyles();
    
    return (
        <div className={classes.wrap}>
          <div className={classes.header}><p>CARONA</p></div>
          <div className={classes.body_header}>
            <span></span>
            <h2>Visualized corona virus</h2>
            <p>We search with corona virus and make data.</p>
          </div>

          <div className={classes.single_works1}>
          <img></img>
          <h3>carona path</h3>
          <p> You can check people with corona virus where they have been</p>
          </div>

          <div className={classes.single_works2}>
          <img></img>
          <h3>predicted area</h3>
          <p> You can check where most likely infected corona virus</p>
          </div>

          <div className={classes.single_works3}>
          <img></img>
          <h3>share information</h3>
          <p> In forum, you can share information about corona with people</p>
          </div>

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
        </div>

    )
}
