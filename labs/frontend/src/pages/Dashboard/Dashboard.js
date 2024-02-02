import axios from 'axios';
import Posts from '../Posts/Posts';
import NewPost from '../../components/NewPost/NewPost'
// import PostsContext from '../../context/PostsContext'
import PostDetails from '../../components/PostDetails/PostDetails';
import { useEffect, useState } from "react";
import { usePostsContext } from '../../context/PostsContext';

export default function Dashboard() {
    const { flag, flagHandler, selectedPostId, setSelectedPostId, addPostFlag, setAddPostFlag } = usePostsContext();
    const [postDetailsFlag, setPostDetailsFlag] = useState(false);
    const [postState, setPostState] = useState([
        {
            id: 0,
            title: "",
            content: "",
            author: ""
        }
    ]);

    const setSelected = (id) => {
        setSelectedPostId(id);
        setPostDetailsFlag(true);
    };

    const addPostBtnHandler = () => {
        setAddPostFlag(!addPostFlag);
    };

    const fetchPosts = () => {
        axios.get('http://localhost:8080/posts')
            .then(response => {
                console.log({ response });
                setPostState(response.data);
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    const deleteButtonClicked = (id) => {
        axios.delete(`http://localhost:8080/posts/${id}`, postState)
            .then(response => {
                flagHandler();
                setPostDetailsFlag(false);
            })
            .catch(err => {
                console.error(err);
            });
    };

    useEffect(() => {
        fetchPosts();
    }, [flag]);

    return (
        <PostsProvider>
            <div>
                <div>
                    <h1>Dashboard</h1>
                    <Posts
                        posts={postState}
                        deletePost={deleteButtonClicked}
                        setSelected={setSelected} />
                </div>
                <div>
                    <PostDetails id={selectedState} showFlag={postDetailsFlag} />
                </div>
                <div>
                    <button onClick={addPostBtnHandler}>
                        Add Post
                    </button>
                    <NewPost />
                </div>
            </div>
        </PostsProvider>
    );
}