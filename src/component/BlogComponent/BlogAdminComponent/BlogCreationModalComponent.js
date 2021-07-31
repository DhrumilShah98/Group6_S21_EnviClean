import {Constants} from "../../../config/constants";
import axios from "axios";
import {useState} from "react";

function BlogCreationModalComponent(props) {
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
        let options = {};
        options.blogImageUrl = document.getElementById("blogImageURL").value;
        options.blogCaption = document.getElementById("blogCaption").value;
        options.blogSummary = document.getElementById("blogSummary").value;
        options.blogTitle = document.getElementById("blogTitle").value;
        options.blogDetailURL = document.getElementById("blogDetailURL").value;
        console.log(options);
        axios.post(Constants.CREATE_BLOG, options).then((response, err) => {
            if (response) {
                console.log(response.data);
            } else {
                console.log(err);
            }
        });
        let savedMessageContent = [];
        savedMessageContent.push(
            <div className="notification is-primary">
                <button className="delete" onClick={handleCloseNotification}>
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
                        Spread the Knowledge - Create Blog
                    </p>
                    <button className="delete" onClick={props.closeModal}/>
                </header>
                <section className="modal-card-body modal-card-content-text">
                    <form>
                        <div className="field">
                            <label className="label">Title</label>
                            <div className="control">
                                <input id="blogTitle" className="input" type="text" placeholder="Enter Title" required/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Caption</label>
                            <div className="control">
                                <input id="blogCaption" className="input" type="text"
                                       placeholder="Enter suitable Caption" required/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Summary</label>
                            <div className="control">
                                <textarea id="blogSummary" className="textarea"
                                          placeholder="Provide summary of 250 words" maxLength="250" required/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Link to actual post</label>
                            <div className="control">
                                <input id="blogDetailURL" className="input" type="text"
                                       placeholder="Link to actual post" required/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Image Link</label>
                            <div className="control">
                                <input id="blogImageURL" className="input" type="text"
                                       placeholder="Thumbnail image link for the post" required/>
                            </div>
                        </div>
                        <div className="field has-text-centered">
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

export default BlogCreationModalComponent;