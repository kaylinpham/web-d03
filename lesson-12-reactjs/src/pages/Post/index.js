import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import Comment from "../../components/Comment";
import axios from "axios";
import "./style.css";
const Post = (props) => {
  const [post, setPosts] = useState({ author: "", contents: "", comments: [] });
  let history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8080/posts/${id}`).then((res) => {
      const newPost = res.data.post;
      if (newPost) {
        setPosts(newPost);
      } else {
        history.push("/not-found/");
      }
    });
  }, []);
  return (
    <div className="post__wrapper">
      <div className="post__container">
        <p className="post__author">{post.author}</p>
        <p className="post__contents">{post.body}</p>
        {post.comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </div>
      <Link to="/posts" className="btn">
        Back
      </Link>
    </div>
  );
};

export default Post;
