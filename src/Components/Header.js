import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Logo, Explore, Heart, User } from "./Icons";
import { Link, withRouter } from "react-router-dom";
import Input from "./Input";
import useInput from "../Hooks/useInput";
import { useQuery } from "react-apollo-hooks";
import { ME } from "../SharedQueries";

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

const LogoLink = styled(Link)`
  div &:active {
    div {
      svg {
        fill: ${props => props.theme.lightGreyColor};
      }
      span {
        color: ${props => props.theme.lightGreyColor};
      }
    }
  }
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
`;

const ExploreLink = styled(Link)`
  svg {
    &:active {
      fill: ${props => props.theme.lightGreyColor};
    }
  }
`;

const ExploreLogo = styled.div`
  cursor: pointer;
  margin-right: 35px;
`;

const HeartLogo = styled.div`
  cursor: pointer;
  margin-right: 35px;
`;

const UserLink = styled(Link)`
  svg {
    &:active {
      fill: ${props => props.theme.lightGreyColor};
    }
  }
`;

const UserLogo = styled.div`
  cursor: pointer;
`;

const Header = withRouter(({ history, isLoggedIn }) => {
  const search = useInput("");
  const {
    data: { me }
  } = useQuery(ME);
  console.log(me);
  const onSearchSubmit = e => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };

  return isLoggedIn ? (
    <HeaderBox>
      <HeaderInSide>
        <LogoLink to={"/"}>
          <HomeLogoBox>
            <HomeLogo>
              <Logo />
            </HomeLogo>
            <DivideLine />
            <Wonstargram>Wonstargram</Wonstargram>
          </HomeLogoBox>
        </LogoLink>
        <SearchBox>
          <form onSubmit={onSearchSubmit}>
            <Input
              value={search.value}
              onChange={search.onChange}
              bigSize={false}
              placeholder={"검색"}
            />
          </form>
        </SearchBox>
        <EtcLogoBox>
          <ExploreLogo>
            <ExploreLink to={"/explore"}>
              <Explore />
            </ExploreLink>
          </ExploreLogo>
          <HeartLogo>
            <Heart />
          </HeartLogo>
          {!me ? (
            <UserLogo>
              <User />
            </UserLogo>
          ) : (
            <UserLogo>
              <UserLink to={`/${me.username}`}>
                <User />
              </UserLink>
            </UserLogo>
          )}
        </EtcLogoBox>
      </HeaderInSide>
    </HeaderBox>
  ) : null;
});

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default Header;
