import '../Home/stylesheets/enviclean.css'
import BlogCardComponent from "./BlogCardComponent";
import {Constants} from '../../config/constants'
import {useEffect} from "react";
import axios from "axios";

function BlogItemComponent() {
    useEffect(() => {
       axios.get(Constants.GET_ALL_BLOGS).then((response, err) => {
           if(response) {
               console.log(response.data);
           } else {
               console.log(err);
           }
       })
    });
    let cardContent = {
        data: [
            [
                {
                    blogImageUrl: "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/02/25162526/download26.jpg",
                    blogTitle: "Cleanliness",
                    blogCaption: "Who will do this work?",
                    blogSummary: "Cleanliness is next to Godliness." +
                        " We’ve heard this phrase many times. But do we follow this?" +
                        " A lot of people don’t, even though we should. However, some of us don’t even respect the people" +
                        " who clean the trash. There are a lot of cons for not maintaining cleanliness. Cleanliness should" +
                        " be followed by everyone. Let’s find out more about it.",
                    blogDetailURL: "https://www.toppr.com/guides/evs/who-will-do-this-work/cleanliness/#:~:text=Introduction%20to%20Cleanliness&text=Cleanliness%20gives%20rise%20to%20a,keeping%20clean%20externally%20and%20internally.",
                    blogCreatedTime: "9 Mar 2018"
                },
                {
                    blogImageUrl: "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/02/25162526/download26.jpg",
                    blogTitle: "Cleanliness",
                    blogCaption: "Who will do this work?",
                    blogSummary: "Cleanliness is next to Godliness." +
                        " We’ve heard this phrase many times. But do we follow this?" +
                        " A lot of people don’t, even though we should. However, some of us don’t even respect the people" +
                        " who clean the trash. There are a lot of cons for not maintaining cleanliness. Cleanliness should" +
                        " be followed by everyone. Let’s find out more about it.",
                    blogDetailURL: "https://www.toppr.com/guides/evs/who-will-do-this-work/cleanliness/#:~:text=Introduction%20to%20Cleanliness&text=Cleanliness%20gives%20rise%20to%20a,keeping%20clean%20externally%20and%20internally.",
                    blogCreatedTime: "9 Mar 2018"
                },
                {
                    blogImageUrl: "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/02/25162526/download26.jpg",
                    blogTitle: "Cleanliness",
                    blogCaption: "Who will do this work?",
                    blogSummary: "Cleanliness is next to Godliness." +
                        " We’ve heard this phrase many times. But do we follow this?" +
                        " A lot of people don’t, even though we should. However, some of us don’t even respect the people" +
                        " who clean the trash. There are a lot of cons for not maintaining cleanliness. Cleanliness should" +
                        " be followed by everyone. Let’s find out more about it.",
                    blogDetailURL: "https://www.toppr.com/guides/evs/who-will-do-this-work/cleanliness/#:~:text=Introduction%20to%20Cleanliness&text=Cleanliness%20gives%20rise%20to%20a,keeping%20clean%20externally%20and%20internally.",
                    blogCreatedTime: "9 Mar 2018"
                },
                {
                    blogImageUrl: "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/02/25162526/download26.jpg",
                    blogTitle: "Cleanliness",
                    blogCaption: "Who will do this work?",
                    blogSummary: "Cleanliness is next to Godliness." +
                        " We’ve heard this phrase many times. But do we follow this?" +
                        " A lot of people don’t, even though we should. However, some of us don’t even respect the people" +
                        " who clean the trash. There are a lot of cons for not maintaining cleanliness. Cleanliness should" +
                        " be followed by everyone. Let’s find out more about it.",
                    blogDetailURL: "https://www.toppr.com/guides/evs/who-will-do-this-work/cleanliness/#:~:text=Introduction%20to%20Cleanliness&text=Cleanliness%20gives%20rise%20to%20a,keeping%20clean%20externally%20and%20internally.",
                    blogCreatedTime: "9 Mar 2018"
                }
            ]
        ]
    }
    let constructBlogCardGridBasedOnJSON = [];
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
            constructBlogCardGridBasedOnJSON.push(
                <div className="columns px-6">
                    {currentRowContent}
                </div>
            );
        } else {
            constructBlogCardGridBasedOnJSON.push(
                <div className="columns px-6 py-6">
                    {currentRowContent}
                </div>
            );
        }
    }
    return (
        <div className="py-6">
            {constructBlogCardGridBasedOnJSON}
        </div>
    );
}

export default BlogItemComponent;