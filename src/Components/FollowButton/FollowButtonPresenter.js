import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FollowButtonPresenter = styled.button`
  width: 80px;
  padding: 7px 0;
  border-radius: ${props => props.theme.borderRadius};
  border: 0;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  margin-top: ${props => (props.whiteCard ? "5px" : "15px")};
  background-color: ${props =>
    props.isFollowed ? "white" : props.theme.blueColor};
  color: ${props => (props.isFollowed ? props.theme.blackColor : "white")};
  border: ${props =>
    props.isFollowed ? `1px solid ${props.theme.lightGreyColor}` : ""};
`;

export default ({ isFollowed, whiteCard, onClickButton, className }) => {
  return (
    <FollowButtonPresenter
      whiteCard={whiteCard}
      className={className}
      onClick={onClickButton}
      isFollowed={isFollowed}
    >
      {isFollowed ? "Following" : "Follow"}
    </FollowButtonPresenter>
  );
};

FollowButtonPresenter.propTypes = {
  isFollowed: PropTypes.bool.isRequired,
  whiteCard: PropTypes.bool
};
