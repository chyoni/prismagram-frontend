import React, { useState } from "react";
import PropTypes from "prop-types";
import useInput from "../../Hooks/useInput";
import PostPresenter from "./PostPresenter";

const PostContainer = ({
  id,
  caption,
  location,
  likes,
  comments,
  files,
  isLiked,
  likeCount,
  createdTime,
  user
}) => {
  const [isLikedState, setIsLiked] = useState(isLiked);
  const [likeCountState, setLikeCount] = useState(likeCount);
  const [currentItem, setCurrentItem] = useState(0);
  const comment = useInput("");
  // const slide = () => {
  //   const totalFiles = files.length;
  //   if (currentItem === totalFiles - 1) {
  //     setCurrentItem(currentItem - 1);
  //   } else {
  //     setCurrentItem(currentItem + 1);
  //   }
  // };
  return (
    <PostPresenter
      id={id}
      caption={caption}
      location={location}
      files={files}
      comments={comments}
      likes={likes}
      isLikedState={isLikedState}
      likeCountState={likeCountState}
      setIsLiked={setIsLiked}
      setLikeCount={setLikeCount}
      newComment={comment}
      createdTime={createdTime}
      user={user}
      currentItem={currentItem}
      setCurrentItem={setCurrentItem}
    />
  );
};

PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  caption: PropTypes.string,
  location: PropTypes.string,
  likes: PropTypes.array,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        username: PropTypes.string.isRequired
      })
    })
  ).isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  isLiked: PropTypes.bool.isRequired,
  likeCount: PropTypes.number.isRequired,
  createdTime: PropTypes.string,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired
  }).isRequired
};

export default PostContainer;
