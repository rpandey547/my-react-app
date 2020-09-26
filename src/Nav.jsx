import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import oj from "../src/images/oj.png";
 const Nav = () => {
    return(
        <>
        <div className="container-fluid" nav-bg> 
        <div className="row">
        <div className="col-10 mx-auto"> 
        <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
      
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav class="navbar ">
  <NavLink className="navbar-brand" to="/">
    <img src={oj} width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy" margin="0" padding="0"/>
  <strong>OnJuno</strong>
  </NavLink>
  <div class="navbar-nav ml-auto">
            <NavLink exact activeClassName="active_class" className="nav-link" to="/Login">Login</NavLink>
            <NavLink exact activeClassName="active_class" className="nav-link"to="/Sign up" >Sign up</NavLink>
        </div>
</nav>
      </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/"> <span class="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="active_class" className="nav-link active" to="/Home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="active_class" className="nav-link" to="/About">Company</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="active_class" className="nav-link" to="/Services">Learn</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="active_class" className="nav-link" to="/Contact">Legal</NavLink>
            </li>
            
            
           
          </ul>
          
        </div>
      </nav>
      </div>

        </div>
        
        </div>
      </>
    )  ;

}
export default Nav;