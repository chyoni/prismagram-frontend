import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FollowButton from "./FollowButton";

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
  margin-bottom: ${props => (props.whiteCard ? "" : "10px")};
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
  font-size: ${props => (props.whiteCard ? "14px" : "30px")};
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  color: ${props => props.theme.blackColor};
  margin-bottom: 5px;
`;

const Bio = styled.span`
  font-size: 14px;
  color: ${props => props.theme.lightGreyColor};
`;

export default ({ userArray, whiteCard = true }) => {
  return (
    <GridOrNotContainer whiteCard={whiteCard}>
      {userArray.map(user => {
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
      })}
    </GridOrNotContainer>
  );
};

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
            id={id}
            whiteCard={whiteCard}
            isFollowing={isFollowing}
          />
        )}
      </InfoColumn>
    </Wrapper>
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
