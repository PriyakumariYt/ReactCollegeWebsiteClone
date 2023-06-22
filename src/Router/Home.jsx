import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import BookIcon from "@mui/icons-material/Book";

import { Router } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section>
        {/* <h1>home page </h1> */}
        <div className="container">
          <div className="box">
            <h1>Great future start here</h1>
            <p>
              Help us to educate poverty out of existence. Make a tax deductible
              donation today. Every child deserves the right to an education.
              Donate before June 30. Multiple Donation Options. Gifts with
              Impact. Tax Breaks Australia/NZ. Services: Education,
            </p>
            <button className="btn">Enroll Now</button>

            <div className="box2">
              <div className="smallbox">
                <h2>Scholarship faculty</h2>
                <p>
                  View all students you can support and read our success
                  stories.
                </p>
                <PersonIcon style={{ color: "blue", fontSize: "30px" }} />
              </div>
              <div className="smallbox">
                <h2>Skilled Lecture</h2>
                <p>
                  View all students you can support and read our success
                  stories.
                </p>
                <BookIcon style={{ color: "blue", fontSize: "30px" }} />
              </div>
              <div className="smallbox">
                <h2>book library</h2>
                <p>
                  View all students you can support and read our success
                  stories.
                </p>
                <LocalLibraryIcon style={{ color: "blue", fontSize: "30px" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="container2box">
            <h1>Welcome to acedemic</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              quasi accusantium perspiciatis atque ut earum.
            </p>
            <img
              src="https://img.freepik.com/premium-psd/group-students-studying-together_53876-28077.jpg?w=996"
              className="img-updown"
              alt=""
            />
          </div>
        </div>
      </section>
       
    </>
  );
};
export default Home;
