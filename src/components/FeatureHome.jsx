import React from "react";
import userIcon from "../images/icons/icon_users.svg"
// import tvIcon from "../images/icons/icon_tv.svg"
// import dimondIcon from "../images/icons/icon_dimond.svg"
// import dollorIcon from "../images/icons/icon_doller_circle.svg"
// import heartIcon from "../images/icons/icon_heart.svg"
// import downloadIcon from "../images/icons/icon_download.svg"

const FeatureHome = () => {
  return (
    <div className="ic_feature_grid_items">
      <div className="ic_card ic_card_md">
        <div className="ic_feature_item_icon">
          <img className="img-fluid" src={userIcon} width={46} height={46} alt="heart icon" />
        </div>
        <div className="ic_feature_item_content">
          <p>
            Create Premium 4K Ultra HD Video Invitations with Appealing
            Animations and Effects easily in less than 5 minutes. Personalize
            your Video Invitations with your Names, Event Details, Photos and
            Music.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureHome;
