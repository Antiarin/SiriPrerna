import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/header/Logo.svg";
import pencil from "../../assets/header/pencil.svg";
import whatsapp from "../../assets/header/WhatsApp.svg";
import Home from "../../assets/header/icons/Home.svg";
import Engage from "../../assets/header/icons/Engage.svg";
import Kids from "../../assets/header/icons/Kids.svg";
import Why from "../../assets/header/icons/Why.svg";
import Donate from "../../assets/header/icons/Donate.svg";
import "./header.css";
import NavMobile from "./NavMobile/NavMobile";

export const Headermob = ({ ismobile }) => {
  const Navigate = useNavigate();

  const nav = [
    {
      title: "Home",
      to: "/",
      delay: ".10",
      icon: Home,
    },
    {
      title: "Why us",
      to: "/whyus",
      delay: ".12",
      icon: Why,
    },
    {
      title: "Our Kids",
      to: "/ourkids",
      delay: ".14",
      icon: Kids,
    },
    {
      title: "Engage",
      to: "/engage",
      delay: ".16",
      icon: Engage,
    },
    {
      title: "Donate",
      to: "https://pmny.in/Xrz1Hou3Rfau",
      delay: ".18",
      ignore: true,
      icon: Donate,
    },
  ];
  return (
    <div className="headermob_cnt">
      <div className="hmbl">
        <NavMobile items={nav} />
        <div className="hlogo" onClick={() => Navigate("/")}>
          <img src={Logo} alt="" />
          <span>
            <p>Prerna</p>
            <p>Children's</p>
            <p>Home</p>
          </span>
        </div>
      </div>
      <div className="hm">
        <ul>{nav.map((e) => Navoptions(e))}</ul>
      </div>
      <div className="hmbr">
        <a href="https://pmny.in/Xrz1Hou3Rfau">
          {" "}
          <button>DONATE</button>
        </a>
        {!ismobile && (
          <span>
            <a href="https://api.whatsapp.com/send/?phone=919441922022&text&app_absent=0">
              <img src={whatsapp} alt="" />
              <p>+91 94419 22022</p>
            </a>
          </span>
        )}
      </div>
    </div>
  );
};

const Navoptions = (e) => {
  const isActive = useLocation();
  return (
    <div  key={e.title} className="nav_links">
   {!e.ignore && <li>
      <NavLink to={e.to}>{e.title}</NavLink>
      {isActive.pathname === e.to && <img src={pencil} alt="" />}
    </li>}
    </div>
  );
};
