import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import FollowButton from "./FollowButton";

const Row = styled.div`
  width: 100%;
  display: flex;
`;

const AvatarColumn = styled.div`
  margin-right: 10px;
`;

const InfoColumn = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
`;

const Username = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 600;
`;

const Bio = styled.div`
  width: 100%;
  font-size: 14px;
  color: ${props => props.theme.lightGreyColor};
`;

const ButtonColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ExFollowButton = styled(FollowButton)`
  margin: 0;
  width: 60px;
`;

const UserList = ({ users }) => {
  return (
    <>
      {users.map(user => {
        return (
          <Row key={user.id}>
            <AvatarColumn>
              <Avatar
                big={"middle"}
                src={user.avatar}
                linking={true}
                username={user.username}
              />
            </AvatarColumn>
            <InfoColumn>
              <Username>
                <Link to={`/${user.username}`}>{user.username}</Link>
              </Username>
              <Bio>{user.bio || user.fullName}</Bio>
            </InfoColumn>
            <ButtonColumn>
              <ExFollowButton
                id={user.id}
                whiteCard={false}
                isFollowing={user.isFollowing}
              />
            </ButtonColumn>
          </Row>
        );
      })}
    </>
  );
};

export default UserList;
