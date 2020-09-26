
import React from "react";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import juno from "../src/images/juno.png";
import Nav from "./Nav";
import New from "./New";
import Services from "./Services";
 const Home = () => {
    return(<>
    
        <section id="header"className="d-flex align-items-center">
        <div className="container-fluid"> 
                <div className="row">
                <div className="col-10 mx-auto"> 
                <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" > 
                <h1> <strong >The Most Powerful Checking Account </strong></h1>
                <h2>Our checking account gives you higher returns
than a savings account with no hidden fees. </h2>
              
                <div className="mt-3">
                    <NavLink  className="nav-link" to="/" className="btn-get-started"> Join Now</NavLink>
                </div>
                </div>
        <div className="col-lg-6 order-1 order-lg-2 header-img">
        <img src={juno} className="img-fluid animated" alt="home img"/>
        

        </div>
         </div>
        
                </div>
        
                </div>
                
                </div>
        </section>
        <New/>
        
        
        <Services/>
     </>)
 }
        
export default Home;