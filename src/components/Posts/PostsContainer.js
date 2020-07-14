import React from "react";
import Post from "./Post";
// import dummyData from "../../dummy-data";
import "./Posts.css";

const PostsContainer = (props) => {
  // Make sure the parent of Posts is passing the right props!
  const { likePost, post } = props;

  return (
    <div className="posts-container-wrapper">
      {/* map through the posts here to return a Post component */}
      {/* Check the implementation of Post to see what props it requires! */}
      {post.map((crrV) => {
        return (
          <Post
            childPost={crrV}
            key={crrV.id}
            likePost={likePost}
            likeCount={crrV}
          />
        );
      })}
    </div>
  );
};

export default PostsContainer;
