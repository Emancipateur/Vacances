import React from "react";
import { NavLink } from 'react-router-dom';


const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarContent">
      <h1 className="title">Destinations</h1>
  
            <ul>
                <li>
                    <NavLink to="/" className={(navData)=> navData.isActive ? "active" : ""}><i className="fas fa-home"></i><span> Home</span></NavLink>
                </li>
                <li>
                    <NavLink to="/mexique" className={(navData)=> navData.isActive ? "active" : ""}><span>Mexique</span></NavLink>
                </li>
                <li>
                    <NavLink to="/chine" className={(navData)=> navData.isActive ? "active" : ""}><span>Chine</span></NavLink>
                </li>
                <li>
                    <NavLink to="/book" className={(navData)=> navData.isActive ? "active" : ""}><span>Réserver</span></NavLink>
                </li>
            </ul>
      

        <div className="sideBarSocial">
          <ul>
            <li>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"> </i>
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"> </i>
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"> </i>
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"> </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
