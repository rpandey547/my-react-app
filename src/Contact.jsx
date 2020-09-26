import React, { useState } from "react";
import "./index.css";
import cards from "../src/images/cards.png";
const Contact = () => {
    const [data,setData]=useState({
        email:"",
        password:"",
        textarea:"",

    });
    const InputEvent=(event)=> {
        const {name,value,number}=event.target;
        setData((preVal)=> {
            return {
                ...preVal,
                [name] :value,
            }
        })
    };
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My email id is: ${data.email} Here is what i want to share ${data.textarea}`)

    };
    return(<>
    <aside>
    <div className="my-5" >
    
    <h1 className="bg-white">Personal Online Login</h1>

</div>

       <div className="container contact_div"> 
                <div className="row">
                 <div className="col-md-6 col-10 mx-auto"></div>
                 <form onSubmit={formSubmit}>
                 <img src={cards} className="img-fluid animated" alt="home img"/>
  <div class="form-group">
    <label for="exampleInputEmail1">User ID</label>
    <input type="email" class="form-control" id="exampleInputEmail1" 
    name="email"
    value={data.email}
    onChange={InputEvent}
    aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your User ID with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"
    name="password"
    value={data.password}
    onChange={InputEvent} />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Phone Number</label>
    <input type="text" class="form-control" id="exampleInputPassword1"
    name="number"
    value={data.number}
    onChange={InputEvent} />
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Remember My Id</label>
  </div>
  
 
  <div className="btn">
  <button type="submit" class="btn btn-primary">Sign In</button>
  
  <button type="submit" class="btn btn-primary">Sign Up</button>
  </div>
</form>
    </div>
    </div>
    </aside>

    </>
    )  ;

}
export default Contact;