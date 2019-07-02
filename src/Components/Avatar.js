import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Image = styled.img`
  width: ${props => (props.big === "yes" ? "150px" : "32px")};
  height: ${props => (props.big === "yes" ? "150px" : "32px")};
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.lightGreyColor};
`;

const Avatar = ({ big = "no", username, src, className }) => {
  return (
    <Link to={`/${username}`}>
      <Image
        className={className}
        big={big}
        src={src || require("../images/noPhoto.jpg")}
        alt={`${username}님의 프로필 사진`}
      />
    </Link>
  );
};

Avatar.propTypes = {
  big: PropTypes.string,
  username: PropTypes.string,
  src: PropTypes.string
};

export default Avatar;
