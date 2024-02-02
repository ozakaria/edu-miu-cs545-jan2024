// AddPost.js
import React, { useContext, useState, useRef } from "react";
import axios from "axios";
import { usePostsContext } from "../../context/PostsContext";

const AddPost = () => {
    const [values, setValues] = useState({
        title: "",
        content: "",
        author: "",
    });

    const { flagHandler, addPostFlag, setAddPostFlag } = usePostsContext();
    const formRef = useRef();

    const handleChange = ({ target: { name, value } }) =>
        setValues((prev) => ({ ...prev, [name]: value }));

    const addPostSubmitHandler = (e) => {
        e.preventDefault();
        const data = {
            title: values.title,
            content: values.content,
            author: values.author,
        };

        axios
            .post("http://localhost:8080/posts", data)
            .then(() => {
                setAddPostFlag(false);
                flagHandler();
                // Reset form values
                setValues({
                    title: "",
                    content: "",
                    author: "",
                });
                // Clear form inputs using useRef
                formRef.current.reset();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return addPostFlag === true ? (
        <form ref={formRef}>
            <label>Title:</label>
            <input
                name="title"
                type="text"
                value={values.title}
                onChange={handleChange}
            />
            <br />

            <label>Content:</label>
            <input
                name="content"
                type="text"
                value={values.content}
                onChange={handleChange}
            />
            <br />

            <label>Author:</label>
            <input
                name="author"
                type="text"
                value={values.author}
                onChange={handleChange}
            />
            <br />

            <button onClick={addPostSubmitHandler}>Submit</button>
        </form>
    ) : null;
};

export default AddPost;
