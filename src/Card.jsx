import React from "react"; 
import { NavLink } from "react-router-dom";
import junoblackcard  from "../src/images/junoblackcard.png";
import junobasic  from "../src/images/junobasic.png";
import junoplus from "../src/images/junoplus.png";

import "./index";
 const Card = () => {
    return(<>
  <div class="card-deck">
  <div class="card">
    <img src={junoblackcard} class="card-img-top" alt={junoblackcard}/>
    <div class="card-body">
    <h1>METAL</h1>
      <h5 class="card-title">Includes</h5>
      <p class="card-text"><b>Charcoal Black Metal Card</b></p>
      <p>2.15%<sup>1</sup> Bonus Rate Checking Account</p>
      <p>5% Cash back on brands you love</p>
      <p>Free Cash Withdrawals</p>
      <p>Phone & Chat Support</p>
      <NavLink to="/" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Sign Up Now</NavLink>
      <p class="card-text"><small class="text-muted">Fund your account with a minimum opening deposit of <b>$1000.</b> 3 additional free ATM withdrawals per month from out of network ATMs.</small></p>
    </div>
  </div>
  <div class="card">
    <img src={junobasic} class="card-img-top" alt={junobasic}/>
    <div class="card-body">
    <h1>PREMIUM</h1>
      <h5 class="card-title">Includes</h5>
      <p class="card-text"><b>Free Debit Card</b></p>
      <p class="card-text">1.65%<sup>2</sup> Bonus Rate Checking Account</p>
      <p class="card-text">4% Cash back on brands you love.</p>
      <p class="card-text">Free Cash Withdrawals.</p>
      <p class="card-text">Phone & Chat Support.</p>
      
      <NavLink to="/" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Up Next</NavLink>

      <p class="card-text"><small class="text-muted">Fund your account with a minimum opening deposit of <b>$500.</b> 2 additional free ATM withdrawals per month from out of network ATMs.</small></p>
    </div>
  </div>
  <div class="card">
    <img src={junoplus} class="card-img-top" alt={junoplus}/>
    <div class="card-body">
    <h1>BASIC</h1>
    <h5 class="card-title">Includes</h5>
    <p class="card-text"><b>Free Debit Card</b></p>
      <p class="card-text">1.15%<sup>3</sup> Bonus Rate Checking Account</p>
      <p class="card-text">3% Cash back on brands you love.</p>
      <p class="card-text">Free Cash Withdrawals.</p>
      <p class="card-text">Phone & Chat Support.</p>
      <NavLink to="/" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Coming Soon</NavLink>
      <p class="card-text"><small class="text-muted">Fund your account with a minimum opening deposit of <b>$0.</b></small></p>
    </div>
  </div>
</div>



          
  </>
    )  ;

}
export default Card;