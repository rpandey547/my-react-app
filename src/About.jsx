import React from "react";

import web from "../src/images/Doraemon.png";
import Common from "./Common";

 const About = () => {
    return(
        
<>
<Common 
name="Welcome to About Page"
 imgsrc={web} 
 visit="/contact"
 btname="About me"/>
</>
      
        )  ;
        
        }
export default About;