import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import ProfilePresenter from "./ProfilePresenter";
import { useQuery } from "react-apollo-hooks";
import { USER_PROFILE } from "./ProfileQueries";
const ProfileContainer = withRouter(({ match: { params: { username } } }) => {
  const { data, loading } = useQuery(USER_PROFILE, { variables: { username } });
  const [isOpenFollowers, setIsOpenFollowers] = useState(false);
  const [isOpenFollowing, setIsOpenFollowing] = useState(false);
  const [isOpenSetting, setIsOpenSetting] = useState(false);
  const toggleFollowers = () => {
    if (isOpenFollowers) {
      setIsOpenFollowers(false);
    } else {
      setIsOpenFollowers(true);
    }
  };
  const toggleFollowing = () => {
    if (isOpenFollowing) {
      setIsOpenFollowing(false);
    } else {
      setIsOpenFollowing(true);
    }
  };
  const toggleSetting = () => {
    if (isOpenSetting) {
      setIsOpenSetting(false);
    } else {
      setIsOpenSetting(true);
    }
  };

  return (
    <ProfilePresenter
      loading={loading}
      data={data}
      isOpenFollowers={isOpenFollowers}
      isOpenFollowing={isOpenFollowing}
      isOpenSetting={isOpenSetting}
      toggleFollowers={toggleFollowers}
      toggleFollowing={toggleFollowing}
      toggleSetting={toggleSetting}
    />
  );
});

export default ProfileContainer;
