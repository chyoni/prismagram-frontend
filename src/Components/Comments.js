import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CommentWrapper = styled.div`
  width: 100%;
  margin-bottom: 3px;
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

const Comments = ({ commentsArray }) => {
  return (
    <CommentContainer>
      {commentsArray.map(comment => {
        return (
          <Comment
            key={comment.id}
            id={comment.id}
            text={comment.text}
            createdAt={comment.createdAt}
            username={comment.user.username}
          />
        );
      })}
    </CommentContainer>
  );
};

Comments.propTypes = {
  commentsArray: PropTypes.array.isRequired
};

const Comment = props => {
  return (
    <CommentWrapper>
      <Username>
        <Link to={`/${props.username}`}>{props.username}</Link>
      </Username>
      <Text>{props.text}</Text>
    </CommentWrapper>
  );
};

export default Comments;
