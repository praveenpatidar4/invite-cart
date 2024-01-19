import React from "react";
import { Link } from "react-router-dom";
import mapIcon from "../images/icons/icon_map_pin.svg";

const ContactComponent = () => {
  return (
    <div className="ic_page_contact_wrapper">
      <div className="container">
        <div className="ic_heading_wrapper">
          <p>Contact Us</p>
          <h1>Let's Work Together</h1>
        </div>
        <div className="ic_contact_info">
          <div className="ic_contact_info_item">
            <div className="ic_contact_info_icon">
              <img
                className="img-fluid"
                src={mapIcon}
                width={24}
                height={24}
                alt="map pin icon"
              />
            </div>
            <div className="ic_contact_info_details">
              <Link to="">MineralTree101 Arch Street9th Floor</Link>
            </div>
          </div>
          <div className="ic_contact_info_item">
            <div className="ic_contact_info_icon">
              <img
                className="img-fluid"
                src={mapIcon}
                width={24}
                height={24}
                alt="map pin icon"
              />
            </div>
            <div className="ic_contact_info_details">
              <Link to="mailto:info@invitecard.me">info@invitecard.me</Link>
            </div>
          </div>
          <div className="ic_contact_info_item">
            <div className="ic_contact_info_icon">
              <img
                className="img-fluid"
                src={mapIcon}
                width={24}
                height={24}
                alt="map pin icon"
              />
            </div>
            <div className="ic_contact_info_details">
              <Link to="tel:+919644400446">(+91) 96444-00446</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
