// import { posts } from "../HomePage/index";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";
import PostFunctionalComponent from "../../components/PostFunctionalComponent";
const Posts = React.memo(() => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/posts/").then((res) => {
      const newPosts = res.data.posts;
      setPosts(newPosts);
    });
  }, []);

  return (
    <div className="posts__wrapper">
      {posts.map((post) => {
        return <PostFunctionalComponent postInfo={post} key={post.id} />;
      })}
    </div>
  );
});

export default Posts;
