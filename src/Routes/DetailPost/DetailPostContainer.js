import React, { useState } from "react";
import DetailPostPresenter from "./DetailPostPresenter";
import { useMutation } from "react-apollo-hooks";
import { TOGGLE_LIKE, ADD_COMMENT } from "../../Components/Post/PostQueries";
import { toast } from "react-toastify";
import useInput from "../../Hooks/useInput";

const DetailPostContainer = ({ post }) => {
  console.log(post);
  const [currentItem, setCurrentItem] = useState(0);
  const [isLikedState, setIsLiked] = useState(post.isLiked);
  const [likeCountState, setLikeCount] = useState(post.likeCount);
  const [selfComments, setSelfComments] = useState([]);
  const [isOpenLikes, setIsOpenLikes] = useState(false);
  const comment = useInput("");
  const toggleLikeMutation = useMutation(TOGGLE_LIKE, {
    variables: { postId: post.id }
  });
  const addCommentMutation = useMutation(ADD_COMMENT, {
    variables: { postId: post.id, text: comment.value }
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
        setSelfComments([...selfComments, addComment]);
      } catch (e) {
        toast.error("일시적 오류입니다😥");
      }
    }
  };

  return (
    <DetailPostPresenter
      post={post}
      isLikedState={isLikedState}
      likeCountState={likeCountState}
      toggleLike={toggleLike}
      newComment={comment}
      currentItem={currentItem}
      setCurrentItem={setCurrentItem}
      onKeyDown={onKeyDown}
      selfComments={selfComments}
      isOpenLikes={isOpenLikes}
      handleIsOpen={handleIsOpen}
    />
  );
};

export default DetailPostContainer;
