import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Posts from './pages/Posts';
import NewPost from './pages/NewPost';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {
    return (
        <Router>
            <div>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/posts">Posts</Link>
                            </li>
                            <li>
                                <Link to="/newpost">New Post</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <hr />

                <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/newpost" component={NewPost} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;