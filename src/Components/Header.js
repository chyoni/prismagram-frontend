import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Logo, Explore, Heart, User } from "./Icons";
import { Link } from "react-router-dom";
import Input from "./Input";
import useInput from "../Hooks/useInput";

const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 77px;
  ${props => props.theme.whiteBox};
`;

const HeaderInSide = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 960px;
`;

const HomeLogoBox = styled.div`
  display: flex;
`;

const HomeLogo = styled.div`
  cursor: pointer;
  margin-right: 15px;
`;

const DivideLine = styled.div`
  background-color: ${props => props.theme.blackColor};
  width: 1px;
  height: 27px;
  margin-right: 15px;
`;

const Wonstargram = styled.span`
  font-family: "Pacifico", cursive;
  font-size: 23px;
  color: ${props => props.theme.blackColor};
`;

const SearchBox = styled.div`
  form {
    input {
      width: 220px;
      &::placeholder {
        text-align: center;
        font-size: 12px;
        color: ${props => props.theme.lightGreyColor};
      }
      &:focus {
        background-color: white;
      }
    }
  }
`;

const EtcLogoBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ExploreLogo = styled.div`
  cursor: pointer;
  margin-right: 35px;
`;

const HeartLogo = styled.div`
  cursor: pointer;
  margin-right: 35px;
`;

const UserLogo = styled.div`
  cursor: pointer;
`;

const Header = ({ isLoggedIn }) => {
  const search = useInput("");
  const onSearchSubmit = e => {
    e.preventDefault();
  };

  return isLoggedIn ? (
    <HeaderBox>
      <HeaderInSide>
        <Link to={"/"}>
          <HomeLogoBox>
            <HomeLogo>
              <Logo />
            </HomeLogo>
            <DivideLine />
            <Wonstargram>Wonstargram</Wonstargram>
          </HomeLogoBox>
        </Link>
        <SearchBox>
          <form onSubmit={onSearchSubmit}>
            <Input {...search} bigSize={false} placeholder={"검색"} />
          </form>
        </SearchBox>
        <EtcLogoBox>
          <ExploreLogo>
            <Explore />
          </ExploreLogo>
          <HeartLogo>
            <Heart />
          </HeartLogo>
          <UserLogo>
            <User />
          </UserLogo>
        </EtcLogoBox>
      </HeaderInSide>
    </HeaderBox>
  ) : null;
};
Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default Header;
