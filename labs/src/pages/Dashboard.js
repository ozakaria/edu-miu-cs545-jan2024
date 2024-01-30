import React, { useState } from "react";
import Posts from "../components/Posts/Posts";




const Dashboard = () => {

    const [posts, setPosts] = useState([
        { id: 111, title: "Happiness", author: "John" },
        { id: 112, title: "MIU", author: "Dean" },
        { id: 113, title: "Enjoy Life", author: "Jasmine" }
    ]);
    
    const [firstPostTitle, setFirstPostTitle] = useState(posts[0].title);
    const handleTitleUpdate = () => {
        setPosts((prevPosts) => [
            { ...prevPosts[0], title: firstPostTitle }, ...prevPosts.slice(1),
        ]);
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <Posts posts={posts} />
            <br/>
            <label>Update first post title: </label>
            <input
                type="text"
                value={firstPostTitle}
                onChange={(e) => setFirstPostTitle(e.target.value)}
            />
            <button onClick={handleTitleUpdate}>Update</button>
        </div>
    );

}


export default Dashboard;