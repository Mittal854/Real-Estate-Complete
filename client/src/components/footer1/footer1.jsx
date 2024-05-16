import React from "react";
import "./footer1.css";
function Footer1() {
  return (
    <section id="footer">
      <div className="whole">
        <div className="left">
          <div className="logo-end">
            <img src="/logo.png" className="le" alt="Logo" />
          </div>
          <p className="p1">More about Home Haven</p>
          <p className="p2">
            At HomeHaven, our promise is simple: to provide you with an
            exceptional renting experience. We're dedicated to transparency,
            offering accurate information and prompt, courteous service at every
            turn. With carefully curated listings and a supportive community,
            we're here to help you find your perfect home. Thank you for
            choosing HomeHaven—we're committed to your satisfaction.
          </p>
        </div>

        <div className="right1">
          <p className="pp" >Sign up for the latest properties and news</p>
          <input type="email" placeholder="email address" />
          <button class="button1">Subscribe</button>
          <p style={{ marginTop: "20px", marginLeft:"20px" }}>Follow Home Haven</p>
          {/* Make sure Font Awesome icons are imported properly */}
          <i className="fab fa-facebook"></i>
          <i className="fab fa-pinterest"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </section>
  );
}

export default Footer1;
