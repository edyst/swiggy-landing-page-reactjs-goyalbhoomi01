import React from "react";
import Timer from "./Timer";

function Header()
{
    return(
      

        <div class="main">
        <div class="main-left">
            
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRltPMGDF7UGsme8WBuFxEwG8H-Ys4nW7TbOBFXG4H36Q11Ccbmc0tvVK_RU4N9-EI2GQ&usqp=CAU" alt="logo" class="logo-main"/>
                <div class="login-cont">
                    <a class="login-button" href=" ">Login</a>
                    <a class="signup-button" href=" ">Sign up</a>
                </div>
            </div>
            <div>
                <div className="timer">
                <Timer /> 
                </div>
                <p class ="small-head">Order food from favourite restaurants near you.</p> 
            </div>
            <div class="input-field">
                <input class="input-location" placeholder="Enter your delivery location" value=""></input>
  
                <label><a class="find-food" href=" ">FIND FOOD</a></label>
            </div>
            <div>
                <p class="grey-head">POPULAR CITIES IN INDIA</p>
                <a href=" " class="dark">Ahmedabad </a>
                <a href=" "class="light">Bangalore </a>
                <a href=" "class="dark">Chennai </a>
                <a href=" "class="light">Delhi </a>
                <a href=" "class="dark">Gurgaon </a>
                <a href=" "class="light">Hyderabad </a>
                <a href=" "class="dark">Kolkata </a>
                <a href=" "class="light">Mumbai </a>
                <a href=" "class="dark">Pune </a>
                <a href=" "class="light">&more. </a>
            </div>
        </div>
    
        <div class="main-right">
            
        </div>
</div>





    )
}
 export default Header