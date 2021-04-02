import React from 'react'
import '../App.css'

export default function Home() {
    return (
        <div className="wrap">
            <div className="map-div" >
                <p>CARONA</p>
            </div>
            <div className="how-div">
                <div className="container">
                    <div className="row">
                        <div className="col-1g-12">
                            <div className="section_title">
                                <span style={{display:"inline-block", width:"60px", background:"#33D4D6", height:"3px", marginBottom:"4px"}}></span>
                                <h2 style={{fontSize:"44px"}}>Visualized corona virus</h2>
                                <p>We search with corona virus and make data.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1g-4">
                            <div className="single_works">
                                <span className="works_area">01</span>
                                <h3>carona path</h3>
                                <p> You can check people with corona virus where they have been</p>
                            </div>
                        </div>
                        <div className="col-1g-4">
                            <div className="single_works">
                                <span className="works_area">02</span>
                                <h3>predicted area</h3>
                                <p> You can check where most likely infected corona virus</p>
                            </div>
                        </div>
                        <div className="col-1g-4">
                            <div className="single_works">
                                <span className="works_area">03</span>
                                <h3>share information</h3>
                                <p> In forum, you can share information about corona with people</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
