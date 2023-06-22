import React from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { responsiveFontSizes } from "@mui/material";
import AirplayIcon from "@mui/icons-material/Airplay";
import AnalyticsIcon from "@mui/icons-material/Analytics";
const Service = () => {
  return (
    <>
      {/* <Header/> */}

      <div className="services">
        <div className="service">
          <h1>We rank the best cousre on web</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            eligendi nobis, excepturi facere porro magnam.
          </p>
          <div className="textBox">
            <div className="textbox1">type message</div>
            {/* <div className="textbox2"></div> */}
            <button className="textbox2">Click now</button>
          </div>
        </div>
        <div className="service1">
          <div className="serviceBox1">
            <AirplayIcon
              style={{ color: "violet", marginTop: "25px", fontSize: "50px" }}
            />
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae.
            </h3>
          </div>
          <div className="serviceBox2">
            <EmojiEventsIcon
              style={{ color: "violet", marginTop: "25px", fontSize: "50px" }}
            />
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae.
            </h3>
          </div>
          <div className="serviceBox3">
            <AnalyticsIcon
              style={{ color: "violet", marginTop: "25px", fontSize: "50px" }}
            />
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
