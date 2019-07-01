import React from "react";
import { gql } from "apollo-boost";
import styled from "styled-components";
import Loader from "../Components/Loader";
import { useQuery } from "react-apollo-hooks";
import PostContainer from "../Components/Post";

const FEED_QUERY = gql`
  {
    seeFeed {
      id
      location
      caption
      user {
        id
        avatar
        username
      }
      files {
        id
        url
      }
      likeCount
      isLiked
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
      createdAt
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 60vh;
`;

export default () => {
  const { data, loading } = useQuery(FEED_QUERY);
  return (
    <Wrapper>
      {loading && <Loader />}
      {!loading &&
        data &&
        data.seeFeed &&
        data.seeFeed.map(post => (
          <PostContainer
            key={post.id}
            id={post.id}
            caption={post.caption}
            location={post.location}
            files={post.files}
            comments={post.comments}
            likes={post.likes}
            isLiked={post.isLiked}
            likeCount={post.likeCount}
            createdTime={post.createdAt}
            user={post.user}
          />
        ))}
    </Wrapper>
  );
};
