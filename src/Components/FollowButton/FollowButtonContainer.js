import React, { useState } from "react";
import FollowButtonPresenter from "./FollowButtonPresenter";
import { useMutation } from "react-apollo-hooks";
import { FOLLOW, UNFOLLOW } from "./FollowButtonQueries";
import { toast } from "react-toastify";

const FollowButtonContainer = ({ id, whiteCard, isFollowing, className }) => {
  const [isFollowingState, setIsFollowingState] = useState(isFollowing);
  const followMutation = useMutation(FOLLOW, { variables: { id } });
  const unfollowMutation = useMutation(UNFOLLOW, { variables: { id } });

  const onClickButton = () => {
    if (isFollowingState) {
      setIsFollowingState(false);
      try {
        unfollowMutation();
      } catch {
        toast.error("일시적 오류입니다😥");
      }
    } else {
      setIsFollowingState(true);
      try {
        followMutation();
      } catch {
        toast.error("일시적 오류입니다😥");
      }
    }
  };

  return (
    <FollowButtonPresenter
      isFollowed={isFollowingState}
      onClickButton={onClickButton}
      whiteCard={whiteCard}
      className={className}
    />
  );
};

export default FollowButtonContainer;
