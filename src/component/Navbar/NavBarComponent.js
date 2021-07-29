import logo from "../../assets/logo_enviclean.svg";
import NavBarDropDownItemComponent from "../Navbar/NavBarDropDownItemComponent";
import React, {useState} from "react";
import NotificationModalComponent from "../Home/NotificationModalComponent";
import LoginModalComponent from "../Login/LoginModalComponent";
import SignupModalComponent from "../SignUp/SignupModalComponent";
import ProfileModalComponent from "../Profile/ProfileModalComponent";
import {useHistory} from "react-router-dom";
import {isLoggedInUserDepositor, isDepositorPatronMember} from '../../utils/NavbarPatronUtils.js';
import {isDepositorLoggedIn} from "../../utils/NavbarDepositUtils";
import {isCollectorLoggedIn} from "../../utils/NavbarCollectorUtils.js";

function NavBarComponent() {
    const [notificationModalState, setNotificationModalState] = useState(false);
    const [logInModalState, setLogInModalState] = useState(false);
    const [signUpModalState, setSignUpModalState] = useState(false);
    const [profileModalState, setprofileModalState] = useState(false);
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
                    },
                ],
            },
        ],
    };

    function signOut(event) {
        event.preventDefault();
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("imageUrl");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.reload();
    }

    const navBarEndDisplayHtml = [];
    const navBarLoggedInItems = [];
    if (isLoggedIn) {
        const user = JSON.parse(localStorage.getItem("user"));
        let identifier;
        let imageUrl;
        if (user) {
            identifier = user["firstName"].charAt(0) + user["lastName"].charAt(0);
        } else {
            identifier = "Hi";
        }
        imageUrl =
            "https://ui-avatars.com/api/?rounded=true" + "&name=" + identifier;
        localStorage.setItem("imageUrl", imageUrl);
        navBarEndDisplayHtml.push(
            <div className="navbar-end">
                <div className="navbar-item">
                    <img alt="User Avatar" src={imageUrl}/>
                </div>
                <div className="buttons">
                    <a className="button is-light is-small" onClick={signOut} href="/">
                        Sign out
                    </a>
                </div>
            </div>
        );
        navBarLoggedInItems.push(
            <div className="navbar-item has-dropdown is-hoverable">
                <a id="settings" className="navbar-link" href="/">
                    Settings
                </a>
                <div className="navbar-dropdown">
                    <a
                        id="notifications"
                        className="navbar-item"
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
                    <a
                        id="profile"
                        className="navbar-item"
                        onClick={() => setprofileModalState(!profileModalState)}
                    >
                        Profile
                    </a>
                    <ProfileModalComponent
                        closeModal={() => setprofileModalState(!profileModalState)}
                        modalState={profileModalState}
                    />
                </div>
            </div>
        )
    } else {
        navBarLoggedInItems.push();
        navBarEndDisplayHtml.push(
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <button
                            className="button is-light is-small"
                            onClick={() => setSignUpModalState(!signUpModalState)}
                        >
                            Sign up
                        </button>
                        <SignupModalComponent
                            closeModal={() => setSignUpModalState(!signUpModalState)}
                            modalState={signUpModalState}
                        />
                        <button
                            className="button is-light is-small"
                            onClick={() => setLogInModalState(!logInModalState)}
                        >
                            Log in
                        </button>
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
                    <img src={logo} width="300" height="71" alt="Welcome to EnviClean"/>
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
                    <a className="navbar-item" href="/blogs">
                        Blogs
                    </a>
                    {(isDepositorLoggedIn() ?
                        <a className="navbar-item" href="/depositor">
                            Depositor
                        </a> : <div></div>)}
                    {(isCollectorLoggedIn() ?
                        <a className="navbar-item" href="/collector">
                            Collector
                        </a> : <div></div>)}
                  {isLoggedIn ?
                    (isLoggedInUserDepositor() && isDepositorPatronMember() ?
                            <a key="patron" id={"patron"} className="navbar-item" href="/patron/posts">
                                Patron
                            </a> : <a key="patron" id={"patron"} className="navbar-item" href="/patron">
                                Patron
                            </a>
                    ):<div/>}

                    {navBarLoggedInItems}
                    {navBarEndDisplayHtml}
                </div>
            </div>
        </nav>
    );
}

export default NavBarComponent;
