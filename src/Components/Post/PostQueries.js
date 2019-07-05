import { gql } from "apollo-boost";

export const TOGGLE_LIKE = gql`
  mutation toggleLike($postId: String!) {
    toggleLike(postId: $postId)
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: String!, $text: String!) {
    addComment(postId: $postId, text: $text) {
      id
      text
      user {
        avatar
        username
      }
    }
  }
`;

export const WHO_LIKES = gql`
  query whoLikes($postId: String!) {
    whoLikes(postId: $postId) {
      user {
        id
        username
        avatar
        isSelf
        isFollowing
      }
    }
  }
`;
