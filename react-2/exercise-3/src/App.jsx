import usePost from "./hook/usePost";
import "./App.css";

function App() {
  const { get, remove } = usePost();

  const postsData = get();

  return (
    <div id="app">
      <h1>Enter Data</h1>
      <PostContainer />
      <FeedSection postData={postsData} removeHandler={remove} />
    </div>
  );
}

const PostContainer = () => {
  return (
    <div className="post-container">
      <div className="post-header">
        <img className="post-avatar" src="avatar.jpg" alt="Your Avatar" />
        <div className="post-author">You</div>
      </div>
      <div className="post-content">
        <textarea
          className="post-input"
          placeholder="What's on your mind?"
        ></textarea>
      </div>
      <div className="post-actions">
        <button className="post-button">Post</button>
      </div>
    </div>
  );
};

const FeedSection = ({ postData, removeHandler }) => {
  return (
    <div className="feed">
      {postData.map((post) => {
        return (
          <Post
            id={post.id}
            author={post.author}
            avatar={post.avatar}
            time={post.time}
            content={post.content}
            image={post.image}
            removeHandler={removeHandler}
          />
        );
      })}
    </div>
  );
};

const Post = (props) => {
  const { id, author, avatar, time, content, image, removeHandler } = props;
  return (
    <div className="post">
      <div className="post-header">
        <img className="post-avatar" src={avatar} alt={author} />
        <div>
          <div className="post-author">{author}</div>
          <div className="post-time">{time}</div>
        </div>
      </div>
      <div className="post-content">{content}</div>
      <img className="post-image" src={image} alt="Post 1" />
      <button onClick={() => removeHandler(id)}>DELETE</button>
    </div>
  );
};

export default App;