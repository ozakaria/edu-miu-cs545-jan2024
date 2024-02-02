import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Posts from '../Posts/Posts';
import NewPost from '../../components/NewPost/NewPost';
import PostDetails from '../../components/PostDetails/PostDetails';
import { usePostsContext } from '../../context/PostsContext';

const Dashboard = () => {
    const { flag, flagHandler, selectedPostId, setSelectedPostId, addPostFlag, setAddPostFlag } = usePostsContext();
    const [postDetailsFlag, setPostDetailsFlag] = React.useState(false);
    const [postState, setPostState] = React.useState([
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

    React.useEffect(() => {
        fetchPosts();
    }, [flag]);

    return (
        <div>
            <h1>Dashboard</h1>
            <nav>
                <Link to="/">Posts</Link>
                <Link to="/newpost">Add New Post</Link>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Posts
                        posts={postState}
                        deletePost={deleteButtonClicked}
                        setSelected={setSelected}
                    />
                </Route>
                <Route path="/newpost">
                    <NewPost />
                </Route>
                <Route path="/post/:id">
                    <PostDetails id={selectedPostId} showFlag={postDetailsFlag} />
                </Route>
            </Switch>
        </div>
    );
};

export default Dashboard;
