import React from 'react';
import { Link } from 'react-router-dom';
import Post from '../../components/Post/Post';

const Posts = (props) => {
    const posts = (
        <div className="posts">
            {props.posts.map(post => (
                <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    author={post.author}
                    deletePost={() => { props.deletePost(post.id) }}
                    setSelected={() => { props.setSelected(post.id) }}
                />
            ))}
        </div>
    );

    return (
        <div>
            <h1>Posts</h1>
            {posts}
            <Link to="/newpost">Add New Post</Link>
        </div>
    );
};

export default Posts;
