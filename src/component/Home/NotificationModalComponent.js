import {useState} from "react";
import {Constants} from "../../config/constants";
import axios from "axios";

function NotificationModalComponent(props) {
    const [savedMessage, setSavedMessage] = useState("");
    const [settingsStatus, setSettingsStatus] = useState(false);
    let isChecked = "";
    let user = localStorage.getItem("user");
    let emailId = user.email;
    let userType = user.type;
    axios.get(Constants.GET_NOTIFICATION_SETTINGS + emailId).then(
        (response) => {
            let settings = response.data.payload;
            if (userType === "Depositor") {
                if (settings.isRemindBeforePickup) {
                    setSettingsStatus(settings.isRemindBeforePickup);
                    if (settingsStatus) {
                        isChecked = "checked";
                    }
                }
            } else {
                if (settings.isRemindBeforeCollect) {
                    setSettingsStatus(settings.isRemindBeforeCollect);
                    if (settingsStatus) {
                        isChecked = "checked";
                    }
                }
            }
        });
    if (!props.modalState) {
        return null;
    }

    function handleCloseNotification(event) {
        event.preventDefault();
        setSavedMessage("");
    }

    function handleSave(event) {
        event.preventDefault();
        let savedMessageContent = [];
        let user = localStorage.getItem("user");
        let emailId = user.email;
        let userType = user.type;
        let requestBody = {};
        let url = Constants.MODIFY_NOTIFICATION_SETTINGS + emailId;
        let notificationCheckElement = document.getElementById("notificationCheck");
        if (userType === "Depositor") {
            if (notificationCheckElement && notificationCheckElement.checked) {
                requestBody.isRemindBeforePickup = true;
                requestBody.isRemindBeforeCollect = false;
            } else {
                requestBody.isRemindBeforePickup = false;
                requestBody.isRemindBeforeCollect = false;
            }
        } else {
            if (notificationCheckElement && notificationCheckElement.checked) {
                requestBody.isRemindBeforePickup = false;
                requestBody.isRemindBeforeCollect = true;
            } else {
                requestBody.isRemindBeforePickup = false;
                requestBody.isRemindBeforeCollect = false;
            }
        }
        axios.put(url, requestBody).then((response) => {
            if (response.data.payload) {
                savedMessageContent.push(
                    <div className="notification is-primary">
                        <button className="delete" onClick={handleCloseNotification}>
                        </button>
                        Hurray!! Preference saved!
                    </div>
                );
            } else {
                savedMessageContent.push(
                    <div className="notification is-danger">
                        <button className="delete" onClick={handleCloseNotification}>
                        </button>
                        Sorry! Notifications preference could not be saved this time! Try later :(
                    </div>
                );
            }
        });
        setSavedMessage(savedMessageContent);
    }

    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={props.closeModal}/>
            <div className="modal-card">
                {savedMessage}
                <header className="modal-card-head">
                    <p className="modal-card-title is-size-5">
                        Notification Preferences
                    </p>
                    <button className="delete" onClick={props.closeModal}/>
                </header>
                <section className="modal-card-body modal-card-content-text">
                    <form>
                        <div className="field">
                            <label className="checkbox">
                                <input id="notificationCheck" type="checkbox" {isChecked} />
                                <span className="px-3 is-size-6">Notify me 1</span>
                                <span className="px-3 is-size-6">hr before the activity time</span>
                            </label>
                        </div>
                        <div className="field">
                            <button className="button is-primary" onClick={handleSave}>
                                Save
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default NotificationModalComponent;