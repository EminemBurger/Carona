import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Header from '../components/Header';
import BodyHeader from '../components/BodyHeader';
import SingleWorks from '../components/SingleWorks';
import Body from '../components/Body';
import Footer from '../components/Footer';

import Information from '../img/information.jpg';
import Road from '../img/road.jpeg';
import Area from '../img/area.jpeg';


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


}));

 

export default function Home() {

    const classes = newStyles();
    
    return (
        <div className={classes.wrap}>
          <Header/>
          <BodyHeader/>
          <SingleWorks
            img={Road} 
            h_text="carona path"
            text="You can check people with corona virus where they have been"
          ></SingleWorks>

         <SingleWorks
            img={Area} 
            h_text="predicted area"
            text="You can check where most likely infected corona virus"
          ></SingleWorks>

          <SingleWorks
            img={Information} 
            h_text="share information"
            text="In forum, you can share information about corona with people"
          ></SingleWorks>

          <Body/>
          <Footer/>
        </div>
    )
}
