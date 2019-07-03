import { gql } from "apollo-boost";

export const USER_PROFILE = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      user {
        id
        avatar
        username
        bio
        isSelf
        isFollowing
        following {
          id
          isSelf
          username
          bio
          isFollowing
          avatar
        }
        followers {
          id
          isSelf
          username
          bio
          isFollowing
          avatar
        }
      }
      posts {
        id
        likeCount
        commentCount
        files {
          url
        }
      }
    }
  }
`;
