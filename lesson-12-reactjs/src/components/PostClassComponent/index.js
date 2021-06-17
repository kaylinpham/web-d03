import React, { Component } from "react";
import "./style.css";
class PostClassComponent extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    return nextProps.postInfo !== this.props.postInfo;
  };

  render() {
    const { id, author, contents, isClicked } = this.props.postInfo;
    console.log(contents);
    return (
      <div
        className={
          isClicked ? "post__container post-clicked" : "post__container"
        }
        onClick={() => this.props.handleClick(id)}
      >
        <p className="post__author">{author}</p>
        <p className="post__contents">{contents}</p>
      </div>
    );
  }
}

export default PostClassComponent;
