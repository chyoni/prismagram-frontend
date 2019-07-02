import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import UserCard from "../../Components/UserCard";

const SearchWrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
`;

const NoSearch = styled.span`
  font-size: 25px;
  font-weight: 600;
  color: ${props => props.theme.blackColor};
`;

const SearchFoundBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LabelText = styled.span`
  display: block;
  width: 100%;
  padding-bottom: 20px;
  padding-left: 10px;
  font-size: 19px;
  font-weight: 600;
  color: ${props => props.theme.lightGreyColor};
`;

const SearchUserCard = styled.div`
  min-height: 250px;
`;

const SearchPostCard = styled.div`
  min-height: 250px;
`;

const SearchPresenter = ({ searchTerm, loading, data }) => {
  console.log(loading, data.searchUser, data.searchPost);
  return (
    <SearchWrapper>
      {loading ? <Loader /> : null}
      {!loading &&
        searchTerm === undefined &&
        data.searchPost === undefined &&
        data.searchUser === undefined && (
          <NoSearch>
            검색어를 확인해 주세요
            <span role={"img"} aria-label={"어리둥절"}>
              🙄
            </span>
          </NoSearch>
        )}
      {!loading &&
        searchTerm !== undefined &&
        data.searchUser !== undefined &&
        data.searchPost !== undefined && (
          <SearchFoundBox>
            <SearchUserCard>
              <LabelText>User</LabelText>
              <UserCard userArray={data.searchUser} />
            </SearchUserCard>
            <SearchPostCard>
              <LabelText>Post</LabelText>
            </SearchPostCard>
          </SearchFoundBox>
        )}
    </SearchWrapper>
  );
};

SearchPresenter.propTypes = {
  searchTerm: PropTypes.string,
  loading: PropTypes.bool,
  data: PropTypes.object
};

export default SearchPresenter;
