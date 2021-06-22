import logo from "../../assets/logo_enviclean.svg";
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
        const burger = document.querySelector(".navbar-burger");
        const menu = document.querySelector(".navbar-menu");
        document.querySelector(".navbar-burger").classList.toggle("is-active");
        document.querySelector(".navbar-menu").classList.toggle("is-active");
        const links = menu.querySelectorAll("#mission , #aboutUs, #why");
        links.forEach(link => {
            link.addEventListener("click", function () {
                if (link.id !== "notifications" && link.id !== "signup" && link.id !== "login") {
                    burger.classList.remove("is-active");
                    menu.classList.remove("is-active");
                }
            });
        });
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
            }
        ],
    };

    function signOut(event) {
        event.preventDefault();
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("imageUrl");
        window.location.reload();
    }

    const navBarEndDisplayHtml = [];
    if (isLoggedIn) {
        const params = new URLSearchParams(window.location.search);
        let imageUrl = "";
        if (params) {
            let email = params.get('email');
            if (email) {
                email.toUpperCase();
                let identifier = email.substring(0, 2);
                imageUrl = "https://ui-avatars.com/api/?rounded=true" + "&name=" + identifier;
                localStorage.setItem("imageUrl", imageUrl);
            } else {
                imageUrl = localStorage.getItem("imageUrl");
            }
        } else {
            if (localStorage.getItem("imageUrl")) {
                imageUrl = localStorage.getItem("imageUrl");
            }
        }
        navBarEndDisplayHtml.push(
            <div>
                <div className="navbar-item">
                    <img alt="User Avatar" src={imageUrl}/>
                </div>
                <div className="buttons">
                    <a
                        key="signout"
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
                <div className="buttons">
                    <a
                        key={"signup"}
                        id="signup"
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
                        key={"signin"}
                        id="login"
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
                    <img src={logo} alt="Welcome to EnviClean"/>
                </a>
                <button
                    className="navbar-burger has-background-primary"
                    aria-label="menu"
                    aria-expanded="false"
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
                    <a key="depositor" id={"depositor"} className="navbar-item" href="/depositor">
                        Deposit
                    </a>
                    <a key="collector" id={"collector"} className="navbar-item" href="/collector">
                        Collect
                    </a>
                    <a key="patron" id={"patron"} className="navbar-item" href="/patron">
                        Patron
                    </a>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a key="settings" id="settings" className="navbar-link" href="/">
                            Settings
                        </a>
                        <div className="navbar-dropdown">
                            <a
                                key={"notifications"}
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
                            <a key="profile" id="profile" className="navbar-item" href="/">
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
