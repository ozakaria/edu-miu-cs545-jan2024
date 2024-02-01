import { useEffect, useState, Fragment } from "react";
import axios from "axios";

const PostDetails = (props) => {
    const space = <Fragment>&nbsp;&nbsp;</Fragment>;
    const [postDetail, setPostDetail] = useState({});

    useEffect(
        () => {
            axios.get('http://localhost:8080/posts/' + props.id)
                .then(response => {
                    setPostDetail(response.data)
                })
                .catch(err => console.log(err.message))
        },
        [props.id])

    let postDetailsDisplay = null;
    if (props.id !== 0 && props.showFlag) {

        postDetailsDisplay = (

            <div className="postDetail">
                <div>
                    Post Details
                </div>
                <h1>Title: {postDetail.title}</h1>
                <h3>Author: {postDetail.author}</h3>
                <div >
                    {postDetail.content}
                    <br />
                    <div style={{ textAlign: "center" }}>
                        {space} Comments: <br />
                        
                        {postDetail.comments != null ? postDetail.comments.map(comment => {
                            return <p>- {comment.name}</p>
                        }) : null}
                    </div>



                </div>
            </div>
        );
    }

    return postDetailsDisplay
};

export default PostDetails;