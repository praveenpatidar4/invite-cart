import React from "react";
import banner from "../images/banner.png";

function HomeBanner() {
  return (
    <section>
      <div className="ic_home_banner_wrapper">
        <div className="ic_image_container">
          <img src={banner} alt="invite card home banner" className="img-fluid"/>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
