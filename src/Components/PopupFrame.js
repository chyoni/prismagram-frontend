import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { X } from "./Icons";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { gql } from "apollo-boost";
import FollowButton from "./FollowButton";
import { useMutation, useQuery } from "react-apollo-hooks";
import { NOTIFICATION } from "../SharedQueries";
import Loader from "./Loader";
import UserList from "./UserList";

const PopUpContainer = styled.div`
  position: fixed;
  z-index: 1500;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Box = styled.div`
  ${props => props.theme.whiteBox};
  width: ${props =>
    props.kind === "FOLLOW"
      ? "500px"
      : props.kind === "NOTIFICATION"
      ? "500px"
      : "400px"};
  border-radius: 20px;
  min-height: 300px;
  max-height: 600px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: ${props => props.theme.boxBorder};
`;

const TitleBox = styled.div`
  display: flex;
  width: 90%;
  margin-left: 35px;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const CloseBox = styled.div`
  display: flex;
  justify-content: center;
  width: 10%;
`;

const Xbox = styled.div`
  cursor: pointer;
`;

const Main = styled.div`
  width: 100%;
  padding: ${props => (props.kind === "SETTING" ? "" : "10px")};
  display: flex;
  flex-direction: column; /* column 이면 세워지니까 좌우조절을 align-items로 */
  justify-content: center;
  overflow-y: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SettingRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:active {
    background-color: ${props => props.theme.superLightGreyColor};
  }
  height: 50px;
  border-bottom: ${props => props.theme.boxBorder};
`;

const SettingText = styled.span`
  font-size: 16px;
  color: ${props => props.theme.blackColor};
`;

const UserRow = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 15px;
  align-items: center;
  justify-content: center;
`;

const Type = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`;

const AvatarField = styled.div`
  margin-right: 15px;
`;

const InfoField = styled.div`
  width: 100%;
  display: flex;
`;

const NameField = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

const Bio = styled.span`
  font-size: 12px;
  color: ${props => props.theme.lightGreyColor};
`;

const ButtonField = styled.div`
  display: flex;
  align-items: center;
`;

const ExFollowButton = styled(FollowButton)`
  margin: 0;
`;

const TypeNameField = styled(NameField)`
  width: auto;
`;

const TextField = styled.div`
  display: flex;
  margin-left: 15px;
  align-items: center;
  width: 250px;
  min-width: 200px;
`;

const PostField = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const TypeButton = styled(PostField)``;

const PostFile = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${props => props.url});
  background-position: center;
  background-size: cover;
`;

const Text = styled.span`
  font-size: 12px;
  color: ${props => props.theme.blackColor};
`;

const CreatedTime = styled.span`
  font-size: 11px;
  color: ${props => props.theme.lightGreyColor};
  margin-left: 6px;
`;

const LOG_OUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;
const WHO_LIKES = gql`
  query whoLike($postId: String!) {
    whoLike(postId: $postId) {
      user {
        id
        username
        bio
        fullName
        avatar
        isSelf
        isFollowing
      }
    }
  }
`;

const PopUp = ({ togglePopFn, kind, title, data, postId }) => {
  const seeNotificationQuery = useQuery(NOTIFICATION, {
    skip: data === undefined || typeof data !== "string",
    variables: { username: data }
  });

  const { data: whoLikesData, loading: whoLikesLoading } = useQuery(WHO_LIKES, {
    skip: postId === undefined,
    variables: { postId }
  });

  console.log(whoLikesData, whoLikesLoading);
  const logOutMutation = useMutation(LOG_OUT);
  const logOutClick = () => {
    togglePopFn();
    logOutMutation();
  };

  const kindEnum = ["FOLLOW", "SETTING", "OPTION", "NOTIFICATION", "LIKE"];
  return (
    <PopUpContainer>
      <Box kind={kind}>
        <Header>
          <TitleBox>
            <Title>{title}</Title>
          </TitleBox>
          <CloseBox>
            <Xbox onClick={togglePopFn}>
              <X />
            </Xbox>
          </CloseBox>
        </Header>
        <Main kind={kind}>
          {kind === kindEnum[0] &&
            data.map(user => {
              return (
                <UserRow key={user.id}>
                  <AvatarField>
                    <Link onClick={togglePopFn} to={`${user.username}`}>
                      <Avatar
                        big={"no"}
                        src={user.avatar}
                        username={user.username}
                        linking={false}
                      />
                    </Link>
                  </AvatarField>
                  <InfoField>
                    <NameField>
                      <Name>
                        <Link onClick={togglePopFn} to={`${user.username}`}>
                          {user.username}
                        </Link>
                      </Name>
                      <Bio>{user.bio}</Bio>
                    </NameField>
                    <ButtonField>
                      {!user.isSelf && (
                        <ExFollowButton
                          whiteCard={false}
                          id={user.id}
                          isFollowing={user.isFollowing}
                        />
                      )}
                    </ButtonField>
                  </InfoField>
                </UserRow>
              );
            })}
          {kind === kindEnum[1] && (
            <>
              <SettingRow onClick={logOutClick}>
                <SettingText>Log Out</SettingText>
              </SettingRow>
              <SettingRow onClick={() => console.log("Edit")}>
                <SettingText>Edit Profile</SettingText>
              </SettingRow>
            </>
          )}
          {kind === kindEnum[3] ? (
            seeNotificationQuery.data.seeNotification ? (
              // eslint-disable-next-line
              seeNotificationQuery.data.seeNotification.map(note => {
                const createdAt = note.createdAt.split("T")[0];
                if (note.type === "LIKE") {
                  return (
                    <Type key={note.id}>
                      <AvatarField>
                        <Avatar
                          big={"no"}
                          src={note.from.avatar}
                          linking={true}
                          username={note.from.username}
                        />
                      </AvatarField>
                      <InfoField>
                        <TypeNameField>
                          <Name>
                            <Link
                              onClick={togglePopFn}
                              to={`${note.from.username}`}
                            >
                              {note.from.username}
                            </Link>
                          </Name>
                        </TypeNameField>
                        <TextField>
                          <Text>
                            님이 좋아합니다
                            <span role={"img"} aria-label={"이모지"}>
                              😉
                            </span>
                          </Text>
                          <CreatedTime>{createdAt}</CreatedTime>
                        </TextField>
                        <PostField>
                          <Link
                            onClick={togglePopFn}
                            to={`/post/${note.post.id}`}
                          >
                            <PostFile url={note.post.files[0].url} />
                          </Link>
                        </PostField>
                      </InfoField>
                    </Type>
                  );
                } else if (note.type === "FOLLOW") {
                  return (
                    <Type key={note.id}>
                      <AvatarField>
                        <Avatar
                          big={"no"}
                          src={note.from.avatar}
                          linking={true}
                          username={note.from.username}
                        />
                      </AvatarField>
                      <InfoField>
                        <TypeNameField>
                          <Name>
                            <Link
                              onClick={togglePopFn}
                              to={`${note.from.username}`}
                            >
                              {note.from.username}
                            </Link>
                          </Name>
                        </TypeNameField>
                        <TextField>
                          <Text>
                            님이 당신을 팔로우합니다
                            <span role={"img"} aria-label={"이모지"}>
                              😘
                            </span>
                          </Text>
                          <CreatedTime>{createdAt}</CreatedTime>
                        </TextField>
                      </InfoField>
                      <TypeButton>
                        <ExFollowButton
                          whiteCard={false}
                          id={note.from.id}
                          isFollowing={note.from.isFollowing}
                        />
                      </TypeButton>
                    </Type>
                  );
                } else if (note.type === "COMMENT") {
                  return (
                    <Type key={note.id}>
                      <AvatarField>
                        <Avatar
                          big={"no"}
                          src={note.from.avatar}
                          linking={true}
                          username={note.from.username}
                        />
                      </AvatarField>
                      <InfoField>
                        <TypeNameField>
                          <Name>
                            <Link
                              onClick={togglePopFn}
                              to={`${note.from.username}`}
                            >
                              {note.from.username}
                            </Link>
                          </Name>
                        </TypeNameField>
                        <TextField>
                          <Text>
                            님이 댓글을 남겼습니다
                            <span role={"img"} aria-label={"이모지"}>
                              😎
                            </span>
                          </Text>
                          <CreatedTime>{createdAt}</CreatedTime>
                        </TextField>
                        <PostField>
                          <Link
                            onClick={togglePopFn}
                            to={`/post/${note.post.id}`}
                          >
                            <PostFile url={note.post.files[0].url} />
                          </Link>
                        </PostField>
                      </InfoField>
                    </Type>
                  );
                }
              })
            ) : (
              <UserRow>
                <Loader />
              </UserRow>
            )
          ) : null}
          {kind === kindEnum[4] ? (
            whoLikesLoading ? (
              <UserRow>
                <Loader />
              </UserRow>
            ) : (
              !whoLikesLoading &&
              whoLikesData && (
                <UserList users={whoLikesData.whoLike} filtering={true} />
              )
            )
          ) : null}
        </Main>
      </Box>
    </PopUpContainer>
  );
};

PopUp.propTypes = {
  togglePopFn: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.any
};

export default PopUp;
