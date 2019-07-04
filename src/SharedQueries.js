import { gql } from "apollo-boost";

export const ME = gql`
  {
    me {
      username
    }
  }
`;

export const NOTIFICATION = gql`
  query seeNotification($username: String!) {
    seeNotification(username: $username) {
      id
      createdAt
      from {
        id
        avatar
        username
        isFollowing
      }
      to {
        id
        avatar
        username
      }
      type
      post {
        id
        files {
          id
          url
        }
      }
    }
  }
`;
