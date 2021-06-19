import {useState} from "react";

function NotificationModalComponent(props) {
    const [savedMessage, setSavedMessage] = useState("");
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
        savedMessageContent.push(
            <div className="notification is-primary">
                <button className="delete" onClick={handleCloseNotification}>
                </button>
                Hurray!! Preference saved!
            </div>
        );
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
                                <input id="notificationCheck" type="checkbox"/>
                                <span className="px-3 is-size-6">Notify me</span>
                                <div className="select is-small is-primary">
                                    <select id="notificationTime">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <span className="px-3 is-size-6">hr before the pickup time</span>
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