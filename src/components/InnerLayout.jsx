import React from "react";
import Breadcrumb from "./Breadcrumb";

const InnerLayout = () => {
  return (
    <>
    <div className="ic_inner_content_wrapper">
      <div className="container">
        <div className="ic_inner_page_wrapper">
          <div className="ic_inner_header_wrap">
            <Breadcrumb />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default InnerLayout;
