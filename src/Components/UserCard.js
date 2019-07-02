import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "./Button";

const GridOrNotContainer = styled.div`
  ${props =>
    props.whiteCard
      ? "margin-bottom: 50px;display: grid;grid-gap: 25px;grid-template-columns: repeat(4, 1fr);grid-template-rows: 160px;grid-auto-rows: 160px;"
      : ""};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.whiteCard ? "column" : "row")};
  ${props => (props.whiteCard ? props.theme.whiteBox : "")};
  width: 100%;
  padding-left: ${props => (props.whiteCard ? "" : "30px")};
  padding-top: ${props => (props.whiteCard ? "" : "15px")};
`;

const AvatarColumn = styled.div`
  display: flex;
  justify-content: ${props => (props.whiteCard ? "center" : "")};
  width: ${props => (props.whiteCard ? "100%" : "")};
  margin-top: ${props => (props.whiteCard ? "13px" : "")};
  margin-bottom: ${props => (props.whiteCard ? "13px" : "")};
  margin-right: ${props => (props.whiteCard ? "" : "10px")};
`;

const ExtendedAvatar = styled(Avatar)`
  width: ${props => (props.whiteCard ? "60px" : "150px")};
  height: ${props => (props.whiteCard ? "60px" : "150px")};
`;

const InfoColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.whiteCard ? "center" : "")};
  align-items: ${props => (props.whiteCard ? "center" : "")};
  padding: ${props => (props.whiteCard ? "" : "20px")};
  padding-top: ${props => (props.whiteCard ? "" : "30px")};
`;

const Username = styled.span`
  font-size: ${props => (props.whiteCard ? "14px" : "35px")};
  font-weight: 600;
  color: ${props => props.theme.blackColor};
  margin-bottom: 5px;
`;

const Bio = styled.span`
  font-size: 14px;
  color: ${props => props.theme.lightGreyColor};
`;

const FollowButton = styled(Button)`
  margin-top: ${props => (props.whiteCard ? "5px" : "15px")};
  width: 80px;
  background-color: ${props =>
    props.isFollowing ? "white" : props.theme.blueColor};
  color: ${props => (props.isFollowing ? props.theme.blackColor : "white")};
  border: ${props =>
    props.isFollowing ? `1px solid ${props.theme.lightGreyColor}` : ""};
`;

export default ({ userArray, whiteCard = true }) =>
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
        whiteCard={whiteCard}
      />
    );
  });

const UserCard = ({
  id,
  username,
  bio,
  isFollowing,
  avatar,
  isSelf,
  whiteCard
}) => {
  return (
    <GridOrNotContainer whiteCard={whiteCard}>
      <Wrapper whiteCard={whiteCard}>
        <AvatarColumn whiteCard={whiteCard}>
          <ExtendedAvatar
            big={"yes"}
            username={username}
            src={avatar}
            whiteCard={whiteCard}
          />
        </AvatarColumn>
        <InfoColumn whiteCard={whiteCard}>
          <Username whiteCard={whiteCard}>
            <Link to={`${username}`}>{username}</Link>
          </Username>
          {whiteCard ? (
            ""
          ) : (
            <Bio>{bio === "" ? `${username} 님의 프로필` : bio}</Bio>
          )}
          {isSelf ? (
            ""
          ) : (
            <FollowButton
              isFollowing={isFollowing}
              text={isFollowing ? "Unfollow" : "Follow"}
              whiteCard={whiteCard}
            />
          )}
        </InfoColumn>
      </Wrapper>
    </GridOrNotContainer>
  );
};

UserCard.propTypes = {
  whiteCard: PropTypes.bool.isRequired,
  isSelf: PropTypes.bool.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  bio: PropTypes.string,
  username: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};
