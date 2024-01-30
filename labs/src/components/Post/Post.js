

const Post = (props) => {

    return (
        <div className="Content" id={props.id}>
            <h1>Id: {props.id}</h1>
            <div className="Field">
            Title: {props.title}
            </div>
            <div className="Field">
            Author: {props.author}
            </div>
        </div>
    );

}

export default Post;