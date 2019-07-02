import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import Button from "./Button";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding-left: 30px;
  padding-top: 15px;
`;

const AvatarColumn = styled.div`
  margin-right: 10px;
`;

const InfoColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 30px;
`;

const Username = styled.span`
  font-size: 35px;
  font-weight: 600;
  color: ${props => props.theme.blackColor};
  margin-bottom: 5px;
`;

const Bio = styled.span`
  font-size: 14px;
  color: ${props => props.theme.lightGreyColor};
`;

const FollowButton = styled(Button)`
  margin-top: 15px;
  width: 80px;
  background-color: ${props =>
    props.isFollowing ? "white" : props.theme.blueColor};
  color: ${props => (props.isFollowing ? props.theme.blackColor : "white")};
  border: ${props =>
    props.isFollowing ? `1px solid ${props.theme.lightGreyColor}` : ""};
`;

export default ({ userArray }) =>
  userArray.map(user => {
    return (
      <UserCard
        key={user.id}
        id={user.id}
        username={user.username}
        bio={user.bio}
        isFollowing={user.isFollowing}
        isSelf={user.isSelf}
        avatar={user.avatar}
      />
    );
  });

const UserCard = ({ id, username, bio, isFollowing, avatar, isSelf }) => {
  return (
    <Wrapper>
      <AvatarColumn>
        <Avatar big={"yes"} username={username} src={avatar} />
      </AvatarColumn>
      <InfoColumn>
        <Username>
          <Link to={`${username}`}>{username}</Link>
        </Username>
        <Bio>{bio === "" ? `${username} 님의 프로필` : bio}</Bio>
        {isSelf ? (
          ""
        ) : (
          <FollowButton
            isFollowing={isFollowing}
            text={isFollowing ? "Unfollow" : "Follow"}
          />
        )}
      </InfoColumn>
    </Wrapper>
  );
};
