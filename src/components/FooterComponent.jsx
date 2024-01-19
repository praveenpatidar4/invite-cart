import React from "react";
import { Link } from "react-router-dom";
import googlePlay from "../images/google_play.png"
import twitterIcon from "../images/icons/icon_twitter.svg"
import linkedinIcon from "../images/icons/icon_linkedin.svg"
import googleIcon from "../images/icons/icon_google.svg"
import facebookIcon from "../images/icons/icon_facebook.svg"
import ContactComponent from "./ContactComponent";
const FooterComponent = () => {
  return (
    <>
    <ContactComponent/>
    <footer className="ic_footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="ic_footer_content">
              <h6>Useful Links</h6>
              <ul className="ic_footer_list">
                <li>
                  <Link to="/" className="ic_footer_links">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ic_footer_links">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ic_footer_links">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ic_footer_links">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="ic_footer_content">
              <h6>Important Links</h6>
              <ul className="ic_footer_list">
                <li>
                  <Link to="/" className="ic_footer_links">
                    Wedding Video Invitation
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ic_footer_links">
                    Engagement Video Invitation
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ic_footer_links">
                    Valentine's Week Video Invitation
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ic_footer_links">
                    Birthday Video Invitation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="ic_footer_content">
              <h6>Important Links</h6>
              <ul className="ic_footer_list">
                <li>
                  <Link to="/" className="ic_footer_links">
                    Anniversary Video Invitation
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ic_footer_links">
                    House Warming Video Invitation
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ic_footer_links">
                    House Warming Video Invitation
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ic_footer_links">
                    Tread Ceremony Video Invitation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="ic_footer_content">
              <h6>Available On</h6>
              <div className="ic_footer_img_container">
                <img src={googlePlay} alt="invite card google play" />
              </div>
              <div className="ic_footer_social_wrap">
                <p>Get in Touch</p>
                <div className="ic_footer_social_list">
                  <Link to="/">
                    <img src={twitterIcon} alt="invite card twitter" className="img-fluid" width={24} height={24} />
                  </Link>
                  <Link to="/">
                    <img src={linkedinIcon} alt="invite card linkedIn" className="img-fluid" width={24} height={24} />
                  </Link>
                  <Link to="/">
                    <img src={googleIcon} alt="invite card google" className="img-fluid" width={24} height={24} />
                  </Link>
                  <Link to="/">
                    <img src={facebookIcon} alt="invite card facebook" className="img-fluid" width={24} height={24} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ic_footer_bottom">
          <p>Copyright © invitecard.me 2023.All rights reserved.</p>
          <p>Made with <span>&#10084;</span> in India</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default FooterComponent;
