import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader";
import UserCard from "../../Components/UserCard";
import SquarePost from "../../Components/SquarePost";

const LoadingWrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const UserColumn = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const MetaLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const MetaTitle = styled.span`
  display: flex;
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.theme.lightGreyColor};
`;
const MetaAll = styled.span`
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  a {
    color: ${props => props.theme.blueColor};
  }
`;

const Title = styled.span`
  width: 100%;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 6px;
  &:first-child {
    margin-bottom: 10px;
  }
  color: ${props => props.theme.lightGreyColor};
`;

const PostColumn = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const ExplorePresenter = ({ data, loading }) => {
  if (loading) {
    return (
      <LoadingWrapper>
        <Loader />
      </LoadingWrapper>
    );
  } else {
    const users = data.explore.users;
    const posts = data.explore.posts;
    let hiddenUser = [];
    if (users.length > 5) {
      hiddenUser.push(users[0], users[1], users[2], users[3], users[4]);
    } else {
      hiddenUser = users;
    }
    return (
      <ContentWrapper>
        <UserColumn>
          {users.length > 4 ? (
            <MetaLine>
              <MetaTitle>Discover People</MetaTitle>
              <MetaAll>
                <Link to={"/explore/people"}>See All</Link>
              </MetaAll>
            </MetaLine>
          ) : (
            <Title>Discover People</Title>
          )}
          <UserCard userArray={hiddenUser} whiteCard={true} tooMany={true} />
        </UserColumn>
        <PostColumn>
          <Title>Explore</Title>
          <SquarePost postArray={posts} />
        </PostColumn>
      </ContentWrapper>
    );
  }
};

export default ExplorePresenter;
