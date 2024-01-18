import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/brand_logo.png";
const HeaderComponent = () => {
  return (
    <header>
      <nav className="navbar ic_navbar navbar-expand-lg sticky-top">
        <div className="container">
          <Link className="navbar-brand ic_navbar_brand" to="/">
            <img
              src={logo}
              alt="invite cart brand logo"
              width={182}
              height={30}
            />
          </Link>
          <button
            className="navbar-toggler ic_navbar_toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#icNavbarToggleContent"
            aria-controls="icNavbarToggleContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="icNavbarToggleContent">
            <ul className="navbar-nav ic_navbar_nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ic_nav_item">
                <Link
                  className="nav-link ic_nav_link"
                  aria-current="page"
                  to="/"
                >
                  Wedding
                </Link>
              </li>
              <li className="nav-item ic_nav_item">
                <Link className="nav-link ic_nav_link" to="/about">
                  Engagement
                </Link>
              </li>
              <li className="nav-item ic_nav_item">
                <Link className="nav-link ic_nav_link" to="/about">
                  Birthday
                </Link>
              </li>
              <li className="nav-item ic_nav_item">
                <Link className="nav-link ic_nav_link" to="/about">
                  House Warming
                </Link>
              </li>
              <li className="nav-item ic_nav_item ic_mega_dropdown ic_dropdown dropdown">
                <Link
                  className="nav-link ic_nav_link ic_mega_dropdown_toggle dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </Link>
                <div className="dropdown-menu ic_dropdown_menu ic_mega_dropdown_menu">
                  <div className="ic_dropdown_events_wrap">
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <div className="ic_event_search_wrap">
                            <div className="form-group ic_form_group">
                              <div className="input-group ic_input_group">
                                <input
                                  type="text"
                                  className="form-control ic_form_control"
                                  placeholder="Search Event Type"
                                />
                                <span className="input-group-text ic_input_group_text">
                                  .00
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                          <div className="ic_dropdown_items_wrap">
                            <h4>Hindu Festival</h4>
                            <ul className="ic_dropdown_list">
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Naming Ceremony or Namkaran Sanskar{" "}
                                </Link>
                              </li>
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Hindu Festiavel
                                </Link>
                              </li>
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Gudi Padwa/Ugadi
                                </Link>
                              </li>
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Rama Navami
                                </Link>
                              </li>
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Raksha Bandhan
                                </Link>
                              </li>
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Krishna Janmashtami
                                </Link>
                              </li>
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Ganesh Chaturthi
                                </Link>
                              </li>
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Durga Ashtami
                                </Link>
                              </li>
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Karva Chauth
                                </Link>
                              </li>
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Dhan Teras
                                </Link>
                              </li>
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Maha Shivaratri
                                </Link>
                              </li>
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Sri Rama Navami
                                </Link>
                              </li>
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Hanuman Jayanti
                                </Link>
                              </li>
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Diwali{" "}
                                </Link>
                              </li>
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Vidyarambh Sansakaar{" "}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                          <div className="ic_dropdown_items_wrap">
                            <h4>Valentine's Week</h4>
                            <ul className="ic_dropdown_list">
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Rose Day
                                </Link>
                              </li>
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Propose Day
                                </Link>
                              </li>
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Chocolate Day
                                </Link>
                              </li>
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Teddy Day
                                </Link>
                              </li>
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Promise Day
                                </Link>
                              </li>
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Hug Day
                                </Link>
                              </li>
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Kiss Day
                                </Link>
                              </li>
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Valentine's Day
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                          <div className="ic_dropdown_items_wrap">
                            <h4>Hindu Festival</h4>
                            <ul className="ic_dropdown_list">
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Mata Pujan
                                </Link>
                              </li>
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Reception
                                </Link>
                              </li>
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Haldi
                                </Link>
                              </li>
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Sagai
                                </Link>
                              </li>
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  Mahila Sangeet
                                </Link>
                              </li>
                              <li className="ic_dropdown_list_items">
                                <Link
                                  to="/"
                                  className="ic_dropdown_list_item_link"
                                >
                                  All Event
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item ic_nav_item">
                <Link className="nav-link ic_nav_link" to="/about">
                  Support
                </Link>
              </li>
              <li className="nav-item ic_nav_item  ic_nav_item_dropdown_user dropdown ic_dropdown">
                <Link
                  to="/"
                  className="ic_dropdown_toggle dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="mdo"
                    width="32"
                    height="32"
                    className="rounded-circle"
                  />
                </Link>
                <ul
                  className="dropdown-menu ic_dropdown_menu"
                  data-popper-placement="bottom-end"
                >
                  <li>
                    <Link className="dropdown-item" to="/">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      My folder
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      RSVP
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Log Out
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
