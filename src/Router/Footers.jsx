import React from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
const Footers = () => {
  return (
    <>
      <div className="footer">
        <div className="col">
          <div className="row">
            <h5>Contact Bishop's</h5>
            <h5>Communications Office</h5>
            <h5>BU Directory</h5>
            <h5>Health Services</h5>
          </div>
          <div className="row">
            <h5>Careers@BU</h5>
            <h5>About BU</h5>
            <h5>Campus Map & Directions</h5>
            <h5>Security & Parking</h5>
          </div>
          <div className="row">
            <h5>Centennial Theatre</h5>
            <h5>Foreman Art Gallery</h5>
            <h5>Musique chez nous</h5>
            <h5>Donald Lecture Series</h5>
            <h5>lorem</h5>
            <h5>lorem</h5>
          </div>
          <div className="row">
            <h5>Accommodation & Event Services</h5>
            <h5>Mail & Print Services</h5>
            <h5>Doolittle’s Co-op</h5>
            <h5>lorem</h5>
            <h5>Employers</h5>
            <h5>lorem</h5>
          </div>
        </div>
        <hr />
        <div className="footer2">
          <AutoStoriesIcon
            style={{ color: "black", fontSize: "60px", margin: "15px 70px" }}
          />
          <h6>Copyright @ 2023 University Clone <br />Disclaimer..</h6>
        </div>
      </div>
    </>
  );
};

export default Footers;
