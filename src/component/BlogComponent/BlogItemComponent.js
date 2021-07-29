import '../Home/stylesheets/enviclean.css'
import BlogCardComponent from "./BlogCardComponent";
import {Constants} from '../../config/constants'
import {useEffect, useState} from "react";
import axios from "axios";

function BlogItemComponent() {
    const [constructBlogCardGridBasedOnJSON, setConstructBlogCardGridBasedOnJSON] = useState([]);
    useEffect(async () => {
        let cardContent = {};
        axios.get(Constants.GET_ALL_BLOGS).then((response, err) => {
            if (response) {
                console.log(response);
                cardContent.data = response.data.payload;
                let constructBlogCardGridBasedOnJSONLocal = [];
                let cardData = cardContent.data;
                for (let i = 0; i < cardData.length; i++) {
                    let cardArray = cardData[i];
                    let currentRowContent = [];
                    for (let j = 0; j < cardArray.length; j++) {
                        let itemContent = cardArray[j];
                        currentRowContent.push(
                            <div className="column is-one-quarter">
                                <BlogCardComponent data={itemContent}/>
                            </div>
                        );
                    }
                    if (i > 0) {
                        constructBlogCardGridBasedOnJSONLocal.push(
                            <div className="columns px-6">
                                {currentRowContent}
                            </div>
                        );
                    } else {
                        constructBlogCardGridBasedOnJSONLocal.push(
                            <div className="columns px-6 py-6">
                                {currentRowContent}
                            </div>
                        );
                    }
                }
                setConstructBlogCardGridBasedOnJSON(constructBlogCardGridBasedOnJSONLocal);
            } else {
                setConstructBlogCardGridBasedOnJSON([]);
                console.log(err);
            }
        });
    });

    return (
        <div className="py-6">
            {constructBlogCardGridBasedOnJSON}
        </div>
    );
}

export default BlogItemComponent;