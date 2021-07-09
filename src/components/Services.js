import React from 'react';
import {FaFacebookSquare,FaInstagramSquare, FaLinkedin} from 'react-icons/fa';
import {IconContext} from 'react-icons';

const Services = () => {
    return (
        <IconContext.Provider value={{color:"black"}}>
        <div className="services">
            <h1 className="py-5">My Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-4">
                            <div className="box">
                                <h3>Web Design</h3>
                               <FaFacebookSquare className="icon"/>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="box">
                                <h3>Web Development</h3>
                                <FaInstagramSquare className="icon"/>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="box">
                                <h3>Google Ads</h3>
                                <FaLinkedin className="icon"/>
                            </div>
                        </div>
                    </div>
                </div>
           
        </div>
        </IconContext.Provider>
    )
}

export default Services;
