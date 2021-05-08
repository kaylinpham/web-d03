import React, { Component } from "react";
import "./style.css";
class PostClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { isClick: false };
    this.handleClick = this.handleClick.bind(this);
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    return (
      nextProps.postInfo !== this.props.postInfo || nextState !== this.state
    );
  };
  handleClick = () => {
    this.setState((state) => ({ isClick: !state.isClick }));
    this.props.handleClick(this.props.postInfo.id);
  };
  render() {
    const { author, contents, isClicked } = this.props.postInfo;
    return (
      <div
        className={
          isClicked ? "post__container post-clicked" : "post__container"
        }
        onClick={this.handleClick}
      >
        <p className="post__author">{author}</p>
        <p className="post__contents">{contents}</p>
      </div>
    );
  }
}

export default PostClassComponent;
