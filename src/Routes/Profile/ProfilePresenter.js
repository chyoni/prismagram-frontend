import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Avatar from "../../Components/Avatar";
import { More } from "../../Components/Icons";
import FollowButton from "../../Components/FollowButton";
import SquarePost from "../../Components/SquarePost";
import PopUp from "../../Components/PopupFrame";

const Wrapper = styled.div`
  width: 100%;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const UserColumn = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 70px;
  padding-left: 70px;
  border-bottom: ${props => props.theme.boxBorder};
`;

const PostColumn = styled.div`
  margin-top: 50px;
`;

const UserImage = styled.div`
  margin-right: 100px;
`;

const UserMeta = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  button {
    margin: 0;
  }
  &:first-child {
    margin-bottom: 17px;
  }
  &:nth-child(2) {
    margin-bottom: 17px;
  }
`;

const Name = styled.span`
  font-size: 30px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  margin-bottom: 5px;
  margin-right: 35px;
`;

const Setting = styled.div`
  cursor: pointer;
  svg {
    width: 30px;
    height: 30px;
    fill: ${props => props.theme.blackColor};
  }
`;

const PostCount = styled.div`
  font-size: 17px;
  margin-right: 45px;
`;
const FollowersCount = styled.div`
  font-size: 17px;
  cursor: pointer;
  margin-right: 45px;
`;

const FollowingsCount = styled.div`
  font-size: 17px;
  cursor: pointer;
`;
const Count = styled.span`
  font-weight: 600;
  margin-right: 4px;
`;

const Bio = styled.span`
  margin-top: 5px;
  font-size: 16px;
  font-weight: 600;
`;

const ProfilePresenter = ({
  loading,
  data: { seeUser },
  isOpenFollowers,
  isOpenFollowing,
  isOpenSetting,
  toggleFollowers,
  toggleFollowing,
  toggleSetting
}) => {
  console.log(seeUser);
  return (
    <Wrapper>
      {loading ? (
        <Loader />
      ) : (
        !loading &&
        seeUser.posts &&
        seeUser.user && (
          <ProfileBox>
            <UserColumn>
              <UserImage>
                <Avatar linking={false} src={seeUser.user.avatar} big={"yes"} />
              </UserImage>
              <UserMeta>
                <Section>
                  <Name>{seeUser.user.username}</Name>
                  {seeUser.user.isSelf ? (
                    <Setting onClick={toggleSetting}>
                      <More />
                    </Setting>
                  ) : (
                    <FollowButton
                      id={seeUser.user.id}
                      whiteCard={false}
                      isFollowing={seeUser.user.isFollowing}
                    />
                  )}
                </Section>
                <Section>
                  <PostCount>
                    <Count>{seeUser.posts.length}</Count> posts
                  </PostCount>
                  <FollowersCount onClick={toggleFollowers}>
                    <Count>{seeUser.user.followers.length}</Count> followers
                  </FollowersCount>
                  <FollowingsCount onClick={toggleFollowing}>
                    <Count>{seeUser.user.following.length}</Count> following
                  </FollowingsCount>
                </Section>
                <Section>
                  <Bio>{seeUser.user.bio}</Bio>
                </Section>
              </UserMeta>
            </UserColumn>
            <PostColumn>
              <SquarePost postArray={seeUser.posts} />
            </PostColumn>
          </ProfileBox>
        )
      )}
      {isOpenFollowers && (
        <PopUp
          title={"Followers"}
          kind={"FOLLOW"}
          togglePopFn={toggleFollowers}
          data={seeUser.user.followers}
        />
      )}
      {isOpenFollowing && (
        <PopUp
          title={"Following"}
          kind={"FOLLOW"}
          togglePopFn={toggleFollowing}
          data={seeUser.user.following}
        />
      )}
      {isOpenSetting && (
        <PopUp title={"Setting"} kind={"SETTING"} togglePopFn={toggleSetting} />
      )}
    </Wrapper>
  );
};

ProfilePresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object
};

export default ProfilePresenter;
