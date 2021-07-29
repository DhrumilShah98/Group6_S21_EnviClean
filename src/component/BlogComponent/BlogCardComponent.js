function BlogCardComponent(props) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-5by3">
                    <img src={props.data.blogImageUrl} alt="Background image"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{props.data.blogTitle}</p>
                        <p className="subtitle is-6">{props.data.blogCaption}</p>
                    </div>
                </div>
                <div className="content">
                    {props.data.blogSummary}
                    <a href={props.data.blogDetailURL} target="_blank">Read more</a><br/>
                    <time dateTime={props.data.blogCreatedTime}><b><i>{props.data.blogCreatedTime}</i></b></time>
                </div>
            </div>
        </div>
    );
}

export default BlogCardComponent;