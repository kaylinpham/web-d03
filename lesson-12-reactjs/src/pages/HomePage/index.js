import React from "react";
import { v4 as uuidv4 } from "uuid";

import "./style.css";
import UserFunctionalComponent from "../../components/UserFunctionalComponent";
import UserClassComponent from "../../components/UserClassComponent";
import CountClassComponent from "../../components/CountClassComponent";
import ClockClassComponent from "../../components/ClockClassComponent";
import PostClassComponent from "../../components/PostClassComponent";
import CountdownClassComponent from "../../components/CountdownClassComponent";
import CountFunctionalComponent from "../../components/CountFunctionalComponent";
import ClockFunctionalComponent from "../../components/ClockFunctionalComponent";
export const posts = [
  {
    id: uuidv4(),
    author: "Công Hiếu",
    contents: "Anh comeback với một Công Hiếu thật phong cách",
    comments: [
      { id: uuidv4(), author: "Nguyễn A", contents: "Hihi" },
      { id: uuidv4(), author: "Trần B", contents: "Haha" },
      { id: uuidv4(), author: "Thị C", contents: "Hoho" },
    ],
    isClicked: false,
  },
  {
    id: uuidv4(),
    author: "Ngọc Hiệp",
    contents: "Yêu là phải nói cũng như đói là phải ăn",
    comments: [
      { id: uuidv4(), author: "Quang Pink", contents: "Ben 10" },
      { id: uuidv4(), author: "Minh Spring", contents: "Bla bla..." },
      { id: uuidv4(), author: "Quý S", contents: "Chuẩn cơm mẹ nấu anh ơi,,," },
    ],
    isClicked: false,
  },
  {
    id: uuidv4(),
    author: "Minh Quý",
    contents: "Ahihi",
    comments: [],
    isClicked: false,
  },
];
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: posts,
    };
    this.handlePostClicked = this.handlePostClicked.bind(this);
  }
  handlePostClicked = (id) => {
    const newPost = this.state.posts.map((post) => {
      if (post.id === id) {
        return { ...post, isClicked: !post.isClicked };
      }
      return post;
    });
    this.setState((state) => ({ posts: newPost }));
  };
  render() {
    return (
      <div className="home-page">
        <UserClassComponent name="Hieu" age="18" gender="male" />
        <UserFunctionalComponent name="Hieu" age="18" gender="male" />
        <CountClassComponent />
        <CountFunctionalComponent />
        <ClockClassComponent />
        <ClockFunctionalComponent />
        <CountdownClassComponent />
        {this.state.posts.map((post) => {
          return (
            <PostClassComponent
              handleClick={this.handlePostClicked}
              key={post.id}
              postInfo={post}
            />
          );
        })}
      </div>
    );
  }
}

export default HomePage;
