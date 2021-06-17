import React from "react";
const Comment = (props) => {
  const { author, body } = props.comment;
  return (
    <div className="item">
      <b>{author}</b>
      <p>{body}</p>
    </div>
  );
};

export default Comment;
