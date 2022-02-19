import React from "react";
import logo from "../../assets/footer/Logo_white.svg";
import map from "../../assets/footer/map.svg";
import Message from "../../assets/footer/Message.svg";
import WhatsApp from "../../assets/footer/WhatsApp.svg";
import "./footer.scss";
import { Link } from "react-router-dom";
import { navlinks, icons } from "./constants";

export const Footermob = () => {
  return (
    <div className="footermob_cnt">

      <img id='ftr_logo' src={logo} alt="" />
      <div id="ftr_links">
        <h3>Prerna Children's Home</h3>
        <ul>
          {navlinks.map((e) => (
            <li key={e.title}>
              <Link to={`${e.to}`}>{e.title}</Link>
            </li>
          ))}
        </ul>
        <div>
          {icons.map((e) => (
            <a href={`${e.to}`} key={e.icon}>
              <img src={e.icon} alt={e.alt} />
            </a>
          ))}
        </div>
      </div>
      <div id="ftr_address">
        <h3>Address</h3>
        <span id="address">
          <img src={map} alt="" />
          <p>
            Prerna Children's home, Gopi Gopal Deva Nilayam, Dwarakamayi Colony,
            Behind IDPL Colony, Bowenpally, Balanagar Mandal, Hyderabad City,
            Telangana State, India. 500037
          </p>
        {/* <pre>
            <br />
            <br />
        &copy; 2019-2021 Prerna Children's Home All right reserved
      </pre> */}
        </span>
      </div>
      <div id="ftr_contacts">
        <h3>Contact Us</h3>
        <ul style={{padding:0}}>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "underline",
            }}
          >
            <img
              src={WhatsApp}
              alt=""
              style={{ height: "28px", width: "28.67px", marginRight: "16px" }}
            />
            <p>+91 94419 22022</p>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "underline",
            }}
          >
            <img
              src={Message}
              alt=""
              style={{ height: "28px", width: "28.67px", marginRight: "16px" }}
            />
            <p >siri.nonprofit@gmail.com </p>
          </li>
        </ul>
      </div>

      <pre style={{marginTop:"16px",fontSize:"8px",lineHeight:"9px"}}>
        &copy; 2019-2021
        <br />
        Prerna Children's Home
        <br />
        All right reserved
      </pre>
    </div>
  );
};