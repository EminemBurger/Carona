import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import  Loginbtn  from './Loginbtn';
import Logo from '../img/carona.png';


const useStyles = makeStyles((theme) => ({
   nav_div: {
    position: 'fixed',
    top: 0,
    width:'100%',
    zIndex:3,
    height: '35px',
    fontFamily: 'KoHo, sans-serif',
   },
   
   
    nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#8e9775',
        fontSize: '25px',
        height: '100%',
        "& ul": {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: '100px',
            height: '100%',
            paddingLeft: 0,
            "&:hover": {
                backgroundColor: 'black',
            },
        },
        "& a": {
            textDecoration: 'none',
            color: 'white',
        },
        "& img": {
            width:'60px',
            marginLeft: '20px',
            height: '100%',
        },
    },


}));


export default function Nav() {
    
    const classes = useStyles();

    return (
        <div className={classes.nav_div}>
            <nav className={classes.nav}>
            <img src={Logo}></img>
            <ul>
              <Link to="/">Home</Link>
            </ul>
            <ul>
              <Link to="/Forum">Forum</Link>
            </ul>
            <ul>
              <Link to="/Map">Map</Link>
            </ul>
            <ul>
                <Loginbtn/>
            </ul>
          </nav>
        </div>
    )
}
