import React, { useState } from "react";
import PropTypes from "prop-types";
import useInput from "../../Hooks/useInput";
import PostPresenter from "./PostPresenter";
import { useMutation } from "react-apollo-hooks";
import { TOGGLE_LIKE, ADD_COMMENT } from "./PostQueries";
import { toast } from "react-toastify";

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
  const [selfComments, setSelfComments] = useState([]);
  const [isOpenLikes, setIsOpenLikes] = useState(false);
  const comment = useInput("");
  const toggleLikeMutation = useMutation(TOGGLE_LIKE, {
    variables: { postId: id }
  });
  const addCommentMutation = useMutation(ADD_COMMENT, {
    variables: { postId: id, text: comment.value }
  });

  const handleIsOpen = () => {
    if (isOpenLikes) {
      setIsOpenLikes(false);
    } else {
      setIsOpenLikes(true);
    }
  };

  const toggleLike = () => {
    if (isLikedState === true) {
      setIsLiked(false);
      setLikeCount(likeCountState - 1);
    } else {
      setIsLiked(true);
      setLikeCount(likeCountState + 1);
    }
    try {
      toggleLikeMutation();
    } catch (e) {
      setIsLiked(!isLikedState);
      toast.error("일시적 오류입니다😥");
    }
  };

  const onKeyDown = async e => {
    const { keyCode } = e;
    if (keyCode === 13) {
      e.preventDefault();
      try {
        comment.setValue("");
        const {
          data: { addComment }
        } = await addCommentMutation();
        console.log(addComment);
        setSelfComments([...selfComments, addComment]);
      } catch (e) {
        toast.error("일시적 오류입니다😥");
      }
    }
  };

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
      toggleLike={toggleLike}
      onKeyDown={onKeyDown}
      selfComments={selfComments}
      isOpenLikes={isOpenLikes}
      handleIsOpen={handleIsOpen}
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
