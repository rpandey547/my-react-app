import React from "react";
import { NavLink } from "react-router-dom";

import "./index.css";

 const Comm = (props) => {
    return(<>
        <section id="header"className="d-flex align-items-center">
        <div className="container-fluid"> 
                <div className="row">
                <div className="col-10 mx-auto"> 
                <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"> 
                <h1> {props.name}<strong className="brand-name"> <br/>OnJuno</strong></h1>
                
                <h2 className="my-3">  Our checking account gives you higher returns
                than a savings account with no hidden fees.
                </h2>


                
</div>
        <div className="col-lg-6 order-1 order-lg-2 header-img">
        <img src={props.imgsrc} className="img-fluid animated" alt="home img"/>
        

        </div>
         </div>
        
                </div>
        
                </div>
                
                </div>
              
        </section>
      
        </>
        )  ;
        
        }
export default Comm;