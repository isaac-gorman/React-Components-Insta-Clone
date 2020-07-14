// You will add code to this file
import React from "react";
import Comments from "../Comments/Comments";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

const Post = (props) => {
  // Make sure the parent of Post is passing the right props!
  const { childPost, likePost, likeCount } = props;

  return (
    <div className="post-border">
      <PostHeader
        username={childPost.username}
        thumbnailUrl={childPost.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={childPost.imageUrl}
        />
      </div>
      {/* LikeSection is missing a prop it needs to function! */}
      <LikeSection
        likePost={() => likePost(childPost.id)}
        likeCount={likeCount.likes}
      />
      {/* Comments also wants its props! */}
      <Comments comments={childPost.comments} />
    </div>
  );
};

export default Post;
