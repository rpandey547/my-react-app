import React from "react";

import "./index.css";


const New= (props) => {

    return(<>
        <section id="header"className="d-flex align-items-center">
        <div className="container-fluid"> 
                <div className="row">
                <div className="col-10 mx-auto"> 
                <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" > 
                <h2>Start saving for a rainy day fund</h2>
                <h1> <strong >Use Our CheckinG Account to Achieve Your Financial Goals</strong></h1>
            <div className=" flex flex-row justify-start" >
              
                <p className="mt-6 md:w-full text-left xs:xs-paragraph md:lg-paragraph">
                    With the latest Federal rate cut, the largest banks are offering close to 0% APY on their checking and savings accounts. OnJuno checking will earn you more than 20x the national average*. Deposits up to $250,000 are FDIC insured through our partner bank. Grow your idle money faster with our checking account and start saving towards a rainy day fund, big expense, or vacation.
                </p>
                </div>
                
                </div>
        <div className="col-lg-6 order-1 order-lg-2 section-img">
        <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/svg/juno-apy-215.svg" className="img-fluid" width="500" height="345" padding-bottom="20px" margin-top="24px"/>
        

        </div>
         </div>
        
                </div>
        
                </div>
                
                </div>
               
        </section>
        </>
)



}
export default New;