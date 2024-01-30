import { useState, useEffect } from "react";
import Post from "../Post/Post";

const Posts = (props) => {

    console.log("post comp");

    const postList = props.posts.map(post => {
        return <Post
        id={post.id}
        title={post.title}
        author={post.author}
            // setSelected={() => { props.setSelected(product.id) }}
        />
    });
 
    return postList;
}

export default Posts;