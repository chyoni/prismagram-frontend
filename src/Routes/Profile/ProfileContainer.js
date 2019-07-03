import React from "react";
import { withRouter } from "react-router-dom";
import ProfilePresenter from "./ProfilePresenter";

const ProfileContainer = withRouter(({ match: { params: { username } } }) => {
  console.log(username);
  return "Profile";
});

export default ProfileContainer;
