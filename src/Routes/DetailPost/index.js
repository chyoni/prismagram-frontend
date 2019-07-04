import React from "react";
import { withRouter } from "react-router-dom";
import DetailPostContainer from "./DetailPostContainer";
import { useQuery } from "react-apollo-hooks";
import { DETAIL_POST } from "./DetailPostQueries";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 1044px;
  justify-content: center;
  align-items: center;
`;

const DetailPostIndex = withRouter(({ match: { params: { postId } } }) => {
  const { data, loading } = useQuery(DETAIL_POST, {
    variables: { id: postId }
  });
  if (loading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else {
    return <DetailPostContainer post={data.seeFullPost} />;
  }
});
export default DetailPostIndex;
