
import { Link, NavLink } from "react-router-dom";
import React from "react";






export const Navbar = () => {


  return (
    <header className="navigation fixed-top">
      <div className="container">
        <nav className="navbar  navbar-expand-lg navbar-white">
          <Link to={"/"} className="navbar-brand font-weight-bold mr-0 order-1" >
            VidSaver
          </Link>
          <div className="collapse navbar-collapse text-center order-lg-2 order-3" id="navigation">
            <ul className="navbar-nav ml-auto">

              <li className="nav-item ">
                <NavLink className="nav-link" to={"/"}>Youtube

                </NavLink>
              </li>
              <li className="nav-item">

                <NavLink className="nav-link" to={"/instagram-video-to-mp4"}>Instagram</NavLink>

              </li>
              <li className="nav-item">

                <NavLink className="nav-link" to={"/tiktok-video-to-mp4"}>Tiktok</NavLink>

              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/facebook-video-to-mp4"}>Facebook</NavLink>
              </li>
            </ul>
          </div>
          <div className="order-2 order-lg-3 d-flex align-items-center">
            <button className="navbar-toggler border-0 order-1" type="button" data-toggle="collapse" data-target="#navigation">
              <i className="ti-menu"></i>
            </button>
          </div>
        </nav>
      </div>
    </header>



  );
}
