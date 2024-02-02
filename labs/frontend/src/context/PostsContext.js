import { createContext, useContext, useState } from 'react';

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    const [flag, setFlag] = useState(true);
    const [selectedPostId, setSelectedPostId] = useState(0);
    const [addPostFlag, setAddPostFlag] = useState(false);

    const flagHandler = () => {
        setFlag(!flag);
    };

    return (
        <PostsContext.Provider value={{ flag, flagHandler, selectedPostId, setSelectedPostId, addPostFlag, setAddPostFlag }}>
            {children}
        </PostsContext.Provider>
    );
};

export const usePostsContext = () => {
    return useContext(PostsContext);
};
