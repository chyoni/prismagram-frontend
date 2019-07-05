import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";
import UserList from "../Components/UserList";

const EXPLORE_SUGGESTED = gql`
  query explore {
    explore {
      users {
        id
        avatar
        username
        fullName
        bio
        isFollowing
        isSelf
      }
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  width: 100%;
  color: ${props => props.theme.blackColor};
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 15px;
`;

const PeopleBox = styled.div`
  ${props => props.theme.whiteBox};
  height: 100%;
  min-height: 60vh;
  padding: 10px;
  width: 100%;
`;

const People = () => {
  const { data, loading } = useQuery(EXPLORE_SUGGESTED);
  if (loading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else {
    const users = data.explore.users;
    return (
      <Wrapper>
        <Title>Suggested</Title>
        <PeopleBox>
          <UserList users={users} />
        </PeopleBox>
      </Wrapper>
    );
  }
};

export default People;
