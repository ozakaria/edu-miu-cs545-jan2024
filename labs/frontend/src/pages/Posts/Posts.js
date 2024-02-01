import Post from "../../components/Post/Post"

const Posts = (props) => {
    const posts = 
    (<div className="posts">
    {props.posts.map(post => {

        return (

            <Post
                id={post.id}
                title={post.title}
                icontentd={post.content}
                author={post.author}
                deletePost={() => { props.deletePost(post.id) }}
                setSelected={() => { props.setSelected(post.id) }}
            />
        )
    })
    }
    </div>);
    return posts;
};


export default Posts;