

const Post = (props) => {
    return(
        <div className="Content" onClick={props.setSelected}>
            <h3>Title: {props.title}</h3>
            <h4>Author: {props.author}</h4>
            <div className="Field">
                {props.content}
            </div>
            <div className="Edit">
                <input
                    type="button"
                    value="Delete"
                    onClick={props.deletePost} />
            </div>

        </div>
    )
};


export default Post;