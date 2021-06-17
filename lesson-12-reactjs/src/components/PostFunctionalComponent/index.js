import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const PostFunctionalComponent = React.memo(({ postInfo }) => {
  const { _id, author, body } = postInfo;
  console.log(postInfo);
  return (
    <Link to={`/post/${_id}`}>
      <div className="post__container">
        <p className="post__author">{author}</p>
        <p className="post__contents">{body}</p>
      </div>
    </Link>
  );
});

export default PostFunctionalComponent;
