import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InvitationCardTemplate from "../components/InvitationCardTemplate";
import Pagination from "../components/Pagination";
import FeatureHome from "../components/FeatureHome";
import { templates } from "../data";
import HomeModal from "../components/modal/HomeModal";

function HomePage() {

  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 1000)
  },[])

  return (
    <>
      <section>
        <div className="ic_invitation_wrapper">
          <div className="container">
            <div className="ic_heading_wrapper">
              <h1>Wedding Invitations Video & Card PDF</h1>
              <p>
                Create wedding invitation PDF card and video at just one attempt{" "}
              </p>
            </div>
            <div className="ic_filter_wrapper">
              <div className="ic_filter_list">
                <Link to="/" className="ic_filter_list_items active">
                  All
                </Link>
                <Link to="/" className="ic_filter_list_items">
                  Hindu Wedding
                </Link>
                <Link to="/" className="ic_filter_list_items">
                  Sindhi Wedding
                </Link>
                <Link to="/" className="ic_filter_list_items">
                  Jain Wedding
                </Link>
                <Link to="/" className="ic_filter_list_items">
                  Cristian Wedding
                </Link>
                <Link to="/" className="ic_filter_list_items">
                  Islamic Wedding
                </Link>
                <Link to="/" className="ic_filter_list_items">
                  Panjabi Wedding
                </Link>
              </div>
            </div>
            <div className="ic_filter_radio">
              <div className="form-check ic_form_check form-check-inline">
                <input
                  className="form-check-input ic_form_check_input"
                  type="radio"
                  name="filterRadioOptions"
                  id="multiEvents"
                  value="option1"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="multiEvents">
                  Multi events
                </label>
              </div>
              <div className="form-check ic_form_check form-check-inline">
                <input
                  className="form-check-input ic_form_check_input"
                  type="radio"
                  name="filterRadioOptions"
                  id="saveTheDate"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="saveTheDate">
                  Save the date
                </label>
              </div>
            </div>
            <div className="ic_invitation_card_wrapper">
              <div className="ic_invitation_card_list">
                {templates.map((item, index) => {
                  return <InvitationCardTemplate key={`template_card_${index}`} item={item} />
                })}
              </div>
              <Pagination />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="ic_video_invitation">
          <div className="container">
            <div className="ic_card ic_card_lg">

            <div className="ic_heading_wrapper">
              <h1>Create Wedding Video Invitations Online</h1>
            </div>
            <p>
              VideoInvites.net helps you create your personalized wedding
              invitation video online in just 5 minutes. You can customize the
              videos with the couple names, event details, your own photos and a
              personalized invitation message. You can customize your Video
              Invitation with your own choice of Music.
            </p>
            <p>
              Make a real impression on your guests with a beautiful animated
              video to announce your Wedding. Wow factor guaranteed! Stand out
              from the crowd and set your wedding apart from all the others with
              a beautiful video invitation for your marriage.
            </p>
            <p>
              We have a wide range of Video Invitation Categories for Wedding
              like, North Indian Wedding Invitation, South Indian Wedding
              Invitation, Traditional Hindu Wedding Invitation, Christian
              Wedding Invitation, Islamic/Nikah Wedding Invitation, etc. You can
              make sure that your video invitations are more personal and they
              convey the right emotions to your guests.
            </p>
            <p>
              Select the best wedding invitation from our wide range of themes
              and create your video invitation today. Share the marriage video
              invitation with your loved ones on WhatsApp, Facebook, Instagram
              and other social networks.
            </p>
            <p>
              An animated way to share your love story and tell your guests to
              save the date for your big day! Use it as a save the date video,
              an invitation or an itinerary video for your wedding.
            </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="ic_feature_wrapper">
          <div className="container">
            <div className="ic_feature_grid">
          <FeatureHome/>
          <FeatureHome/>
          <FeatureHome/>
          <FeatureHome/>
          <FeatureHome/>
          <FeatureHome/>
            </div>
          </div>
        </div>
      </section>
      <HomeModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
}

export default HomePage;
