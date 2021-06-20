import logo from "../../assets/logo_enviclean.svg";
import profileIcon from "../../assets/profile_icon.svg";
import NavBarDropDownItemComponent from "../Navbar/NavBarDropDownItemComponent";
import React, {useState} from "react";
import NotificationModalComponent from "../Home/NotificationModalComponent";
import LoginModalComponent from "../Login/LoginModalComponent";
import SignupModalComponent from "../SignUp/SignupModalComponent";
import {useHistory} from "react-router-dom";

function NavBarComponent() {
    const [notificationModalState, setNotificationModalState] = useState(false);
    const [logInModalState, setLogInModalState] = useState(false);
    const [signUpModalState, setSignUpModalState] = useState(false);
    let isLoggedIn = false;
    const history = useHistory();

    if (localStorage.getItem("isLoggedIn")) {
        isLoggedIn = true;
    }

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
                        url: "/#aboutUs",
                    },
                    {
                        id: "why",
                        name: "Why EnviClean?",
                        url: "/#why",
                    }
                ],
            },
            {
                id: "Collect",
                title: "Collect",
                url: "/collector",
                item_data: [
                    {
                        id: "Collect",
                        name: "Collect",
                        url: "/collector",
                    },
                ],
            }
        ],
    };

    function signOut(event) {
        event.preventDefault();
        localStorage.removeItem("isLoggedIn");
        window.location.reload();
    }

    const navBarEndDisplayHtml = [];
    if (isLoggedIn) {
        navBarEndDisplayHtml.push(
            <div className="navbar-end">
                <div className="navbar-item">
                    <img alt="Group 6" src={profileIcon}/>
                </div>
                <div className="buttons">
                    <a
                        className="button is-light is-small"
                        onClick={signOut}
                        href="/"
                    >
                        Sign out
                    </a>
                </div>
            </div>
        );
    } else {
        navBarEndDisplayHtml.push(
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a
                            className="button is-light is-small"
                            onClick={() => setSignUpModalState(!signUpModalState)}
                        >
                            Sign up
                        </a>
                        <SignupModalComponent
                            closeModal={() => setSignUpModalState(!signUpModalState)}
                            modalState={signUpModalState}
                        />
                        <a
                            className="button is-light is-small"
                            onClick={() => setLogInModalState(!logInModalState)}
                        >
                            <p>Log in</p>
                        </a>
                        <LoginModalComponent
                            closeModal={() => setLogInModalState(!logInModalState)}
                            modalState={logInModalState}
                        />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <nav
            className="navbar is-primary is-fixed-top"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src={logo} width="370" height="71" alt="Welcome to EnviClean"/>
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
                    <NavBarDropDownItemComponent menu_data={menu_data}/>
                    <a className="navbar-item" href="/depositor">
                        Depositor
                    </a>
                    <a className="navbar-item" href="/patron">
                        Patron
                    </a>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a id="settings" className="navbar-link" href="/">
                            Settings
                        </a>
                        <div className="navbar-dropdown">
                            <a
                                id="notifications"
                                className="navbar-item"
                                href="/#"
                                onClick={() =>
                                    setNotificationModalState(!notificationModalState)
                                }
                            >
                                Notifications
                            </a>
                            <NotificationModalComponent
                                closeModal={() =>
                                    setNotificationModalState(!notificationModalState)
                                }
                                modalState={notificationModalState}
                            />
                            <a id="profile" className="navbar-item" href="/">
                                Profile
                            </a>
                        </div>
                    </div>
                    {navBarEndDisplayHtml}
                </div>
            </div>
        </nav>
    );
}

export default NavBarComponent;
