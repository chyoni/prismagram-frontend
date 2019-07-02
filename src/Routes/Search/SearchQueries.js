import { gql } from "apollo-boost";

export const SEARCH = gql`
  query search($term: String!) {
    searchPost(term: $term) {
      id
      files {
        id
        url
        post {
          location
          caption
        }
      }
      likeCount
      commentCount
    }
    searchUser(term: $term) {
      id
      avatar
      username
      bio
      isFollowing
      isSelf
    }
  }
`;
