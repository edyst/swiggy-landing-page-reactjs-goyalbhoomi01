import React from "react";
import Cities from "./Cities";
function Footer()
{
    return(
        <footer>
<div class="container3">
    <section>
      <h3>Company</h3>
      <nav>
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Swiggy Blog</a></li>
          <li><a href="#">Bug Bounty</a></li>
          <li><a href="#">Swiggy Super</a></li>
          <li><a href="#">Swiggy Corporate</a></li>
          <li><a href="#">Swiggy Instamart</a></li>
        </ul>
      </nav>
    </section>
    <section>
      <h3>Contact</h3>
      <nav>
        <ul>
          <li><a href=""> Help & Support

            </a></li>
          <li><a href="">Partner with us</a></li>
          <li><a href="">Ride with us</a></li>
        </ul>
      </nav>
    </section>
    <section>
      <h3>Legal</h3>
      <nav>
        <ul>
          <li><a href="">Terms & Conditions</a></li>
          <li><a href="">Refund & Cancellation</a></li>
          <li><a href="">Privacy Policy</a></li>
          <li><a href="">Cookie Policy</a></li>
          <li><a href="">Offer Terms</a></li>
          <li><a href="">Phishing & Fraud</a></li>
        </ul>
      </nav>
    </section>
    <section>
      <nav>
        <ul>
          <li>
            <a href=""><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="" /></a>
          </li>
          <li>
            <a href=""><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="" /></a>
          </li>
        </ul>
      </nav>
    </section>
  </div>


<div className="cities">
  <Cities />
</div>


 <div class="part-6">
            <div class="foot-logo">
                <img src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza" alt="Swiggy logo " class="swg-png"/>
            </div>
            <div class="foot-copy">
                <p>&copy; 2021 Swiggy</p>
            </div>
            <div class="foot-social">
                <div class="fb">
                    <a href="https://www.facebook.com/swiggy.in" target="_blank"><img src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc" alt="Facebook" class="foot-social-logo"/></a>
                </div>
                <div class="pn">
                    <a href="https://in.pinterest.com/swiggyindia/_created/" target="_blank"><img src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd" alt="Pinterest" class="foot-social-logo"/></a>
                </div>
                <div class="ig">
                    <a href="https://www.instagram.com/swiggyindia/" target="_blank"><img src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh" alt="Instagram" class="foot-social-logo"/></a>
                </div>
                <div class="tw">
                    <a href="https://twitter.com/swiggy_in" target="_blank"><img src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv" alt="Twitter" class="foot-social-logo"/></a>
                </div>
            </div>
        </div> 


  </footer>
  
  
  
    );
};

export default Footer;