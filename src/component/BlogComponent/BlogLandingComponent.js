import React, {useState} from "react";
import BlogItemComponent from "./BlogItemComponent";
import '../Home/stylesheets/enviclean.css'
import Footer from "../Footer/Footer";
import BlogCreationModalComponent from "./BlogAdminComponent/BlogCreationModalComponent";

function BlogLandingComponent() {
    const [blogCreationModalComponentState, setBlogCreationModalComponentState] = useState(false);
    return (
        <div>
            <BlogItemComponent/>
            {JSON.parse(localStorage.getItem("user")).isSuperAdmin ?
                <>
                <div className="columns">
                    <div className="column has-text-centered">
                        <a className="button is-primary"
                           id="createBlogButton"
                           onClick={() =>
                               setBlogCreationModalComponentState(!blogCreationModalComponentState)
                           }>
                            Create
                        </a>
                    </div>
                    <BlogCreationModalComponent
                        closeModal={() =>
                            setBlogCreationModalComponentState(!blogCreationModalComponentState)
                        }
                        modalState={blogCreationModalComponentState}
                    />
                </div>
                </>
                : <div/>}
            <Footer/>
        </div>
    );
}

export default BlogLandingComponent;