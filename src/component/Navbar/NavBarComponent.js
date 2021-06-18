import logo from "../../assets/logo_enviclean.svg";
import profileIcon from "../../assets/profile_icon.svg";
import NavBarDropDownItemComponent from "../Navbar/NavBarDropDownItemComponent";
import React, { useState } from "react";
import NotificationModalComponent from "../Home/NotificationModalComponent";

function NavBarComponent() {
  const [modalState, setModalState] = useState(false);

  function toggleBurgerMenu() {
    document.querySelector(".navbar-menu").classList.toggle("is-active");
  }

  let menu_data = {
    menu_items: [
      {
        id: "mission",
        title: "The Mission",
        url: "",
        item_data: [
          {
            id: "aboutUs",
            name: "About us",
            url: "#aboutUs",
          },
          {
            id: "why",
            name: "Why EnviClean?",
            url: "#why",
          },
          {
            id: "contactUs",
            name: "Contact us",
            url: "#contactUs",
          },
        ],
      },
      {
        id: "deposit",
        title: "Deposit",
        url: "/depositor",
        item_data: [
          {
            id: "scheduleDeposit",
            name: "Book new",
            url: "/depositor",
          },
          {
            id: "myDeposits",
            name: "My Deposits",
            url: "/depositor",
          },
        ],
      },
      {
        id: "patron",
        title: "Patron",
        url: "/patron",
        item_data: [
          {
            id: "patronHome",
            name: "Patron Home",
            url: "/patron",
          },
        ],
      },
      {
        id: "login",
        title: "Login",
        url: "/login",
        item_data: [
          {
            id: "login",
            name: "Login",
            url: "/login",
          },
        ],
      },
      {
        id: "signup",
        title: "Sign Up",
        url: "/signup",
        item_data: [
          {
            id: "signup",
            name: "Sign Up",
            url: "/signup",
          },
        ],
      },
    ],
  };
  return (
    <nav
      className="navbar is-primary is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={logo} width="370" height="71" alt="Welcome to EnviClean" />
        </a>
        <button
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={toggleBurgerMenu}
        >
          <span aria-hidden="true"> </span>
          <span aria-hidden="true"> </span>
          <span aria-hidden="true"> </span>
        </button>
      </div>
      <div id="enviNavBar" className="navbar-menu px-6">
        <div className="navbar-end">
          <NavBarDropDownItemComponent menu_data={menu_data} />
          <div className="navbar-item has-dropdown is-hoverable">
            <a id="settings" className="navbar-link" href="/">
              Settings
            </a>
            <div className="navbar-dropdown">
              <a
                id="notifications"
                className="navbar-item"
                href="/#"
                onClick={() => setModalState(!modalState)}
              >
                Notifications
              </a>
              <NotificationModalComponent
                closeModal={() => setModalState(!modalState)}
                modalState={modalState}
              />
              <a id="profile" className="navbar-item" href="/">
                Profile
              </a>
            </div>
          </div>
          <div className="navbar-item">
            <img alt="Group 6" src={profileIcon} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBarComponent;
