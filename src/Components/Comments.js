import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Avatar from "./Avatar";

const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CommentWrapper = styled.div`
  width: 100%;
  margin-bottom: 3px;
`;

const MetaDiv = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
`;

const AvatarDiv = styled.div``;

const CommentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Time = styled.span`
  display: block;
  font-size: 13px;
  color: ${props => props.theme.lightGreyColor};
`;

const Div = styled.div`
  width: 100%;
  margin-left: 17px;
`;

const Username = styled.span`
  font-size: 14px;
  color: ${props => props.theme.blackColor};
  font-weight: 600;
  margin-bottom: 5px;
`;

const Text = styled.span`
  font-size: 14px;
  padding-left: 7px;
  color: ${props => props.theme.blackColor};
`;

const Comments = ({ commentsArray, avatar = false }) => {
  if (avatar) {
    return (
      <CommentContainer>
        {commentsArray.map(comment => {
          return (
            <Comment
              key={comment.id}
              isAvatar={avatar}
              id={comment.id}
              text={comment.text}
              createdAt={comment.createdAt}
              username={comment.user.username}
              avatar={comment.user.avatar}
            />
          );
        })}
      </CommentContainer>
    );
  } else {
    return (
      <CommentContainer>
        {commentsArray.map(comment => {
          return (
            <Comment
              key={comment.id}
              isAvatar={avatar}
              id={comment.id}
              text={comment.text}
              createdAt={comment.createdAt}
              username={comment.user.username}
            />
          );
        })}
      </CommentContainer>
    );
  }
};

Comments.propTypes = {
  commentsArray: PropTypes.array.isRequired
};

const Comment = props => {
  let createdTime = "";
  if (props.createdAt) {
    const createdAt = props.createdAt;
    createdTime = createdAt.split("T")[0];
  }
  if (props.isAvatar) {
    return (
      <CommentWrapper>
        <MetaDiv>
          <AvatarDiv>
            <Avatar
              big={"no"}
              src={props.avatar}
              username={props.username}
              linking={true}
            />
          </AvatarDiv>
          <CommentDiv>
            <Div>
              <Username>
                <Link to={`/${props.username}`}>{props.username}</Link>
              </Username>
              <Text>{props.text}</Text>
            </Div>
            <Div>
              <Time>{createdTime}</Time>
            </Div>
          </CommentDiv>
        </MetaDiv>
      </CommentWrapper>
    );
  } else {
    return (
      <CommentWrapper>
        <Username>
          <Link to={`/${props.username}`}>{props.username}</Link>
        </Username>
        <Text>{props.text}</Text>
      </CommentWrapper>
    );
  }
};

export default Comments;
