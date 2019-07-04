import { gql } from "apollo-boost";

export const DETAIL_POST = gql`
  query seeFullPost($id: String!) {
    seeFullPost(id: $id) {
      id
      location
      caption
      isLiked
      likeCount
      commentCount
      createdAt
      user {
        id
        isSelf
        avatar
        username
      }
      files {
        id
        url
        post {
          location
          caption
        }
      }
      comments {
        id
        text
        createdAt
        user {
          id
          avatar
          username
        }
      }
      likes {
        id
        user {
          id
          avatar
          username
        }
      }
    }
  }
`;
