import axios from 'axios';
import Posts from '../Posts/Posts';
import NewPost from '../../components/NewPost/NewPost'
import PostsContext from '../../context/PostsContext'
import PostDetails from '../../components/PostDetails/PostDetails';
import { useEffect, useState } from "react";

export default function Dashboard() {


    const [flag, setFlag] = useState(true);
    const [selectedState, setSelectedState] = useState(0);
    const [addPostFlag, setAddPostFlag] = useState(false);
    const [postDetailsFlag, setpostDetailsFlag] = useState(false);
    const [postState, setPostState] = useState(
        [{
            id: 0,
            title: "",
            content: "",
            author: ""
        }]
    );

    const setSelected = (id) => {
        setSelectedState(id);
        setpostDetailsFlag(true);
    }

    const addPostBtnHandler = () => {
        setAddPostFlag(!addPostFlag);
    }

    

    const fetchPosts = () => {
        axios.get('http://localhost:8080/posts')
            .then(response => {
                console.log({ response });
                setPostState(response.data);
            })
            .catch(error => {
                console.log(error.message)
            })
    };

    const deleteButtonClicked = (id) => {
        axios.delete('http://localhost:8080/posts/' + id, postState)
            .then(response => {
                setFlag(!flag);
                setpostDetailsFlag(false);
            })
            .catch(err => {
                console.error(err);
            })
    }

    useEffect(() => {
        fetchPosts()
    }, [flag]);

    const flagHandler = () => {
        setFlag(!flag);
    }



    return (
        <PostsContext.Provider value={{ flagHandler, addPostFlag, setAddPostFlag }} >
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
        </PostsContext.Provider>
    );
}