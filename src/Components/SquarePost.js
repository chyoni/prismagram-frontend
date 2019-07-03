import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { HeartFull, CommentFull, Many } from "./Icons";

const GridContainer = styled.div`
  margin-top: 10px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 300px;
  grid-auto-rows: 300px;
`;
const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 0;
  opacity: 0;
  height: 100%;
  svg {
    fill: white;
    width: 19px;
    height: 19px;
  }
`;
// 필독사항 ! 중요한것은 오버레이 두개와 사진div 이 세개가 하나에 합쳐져있다는것
// 일단 백그라운드 이미지로 사진이 들어갈 div태그가 젤 밑에 있고
// 걔는 position:relative; padding-bottom:100%; display:flex; align-items:stretch;
// flex-shrink:0; 속성이 있어야함
// 그리고 그 위에 여러개의 사진을 의미하는 북마크오버레이 div태그가 있어야함
// 얘는 그냥 투명도 0으로 설정하고 svg만 띄워주면 됨 width:100%; height:100%;로주고
// 중요한건 그냥 overlay임 얘는 좋아요수랑 댓글 수를 보여주기위한 오버레이
// 얘는 position:absolute에 width:100%; top:0; height:100%; 여야함
const BookMarkOverlay = styled.div`
  z-index: 300;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  svg {
    fill: white;
    padding-top: 8px;
    padding-right: 8px;
    width: 24px;
    height: 24px;
    float: right;
  }
`;

const PostContainer = styled.div`
  position: relative;
  padding-bottom: 100%;
  display: flex;
  align-items: stretch;
  flex-shrink: 0;
  background-image: url(${props => props.thumbNail});
  background-position: center;
  background-size: cover;
  cursor: pointer;
  &:hover {
    ${Overlay} {
      opacity: 1;
    }
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  &:first-child {
    margin-right: 40px;
  }
`;

const Count = styled.span`
  color: white;
  margin-left: 10px;
  font-weight: 600;
`;

const SquarePost = ({ postArray }) => {
  const updateCurrentArray = postArray.reverse();
  return (
    <GridContainer>
      {updateCurrentArray.map(post => {
        return (
          <MapToPost
            key={post.id}
            id={post.id}
            commentCount={post.commentCount}
            likeCount={post.likeCount}
            thumbNail={post.files[0].url}
            fileLength={post.files.length}
          />
        );
      })}
    </GridContainer>
  );
};

const MapToPost = ({ id, commentCount, likeCount, thumbNail, fileLength }) => {
  return (
    <PostContainer
      thumbNail={thumbNail}
      onClick={/*PostDetail Comming Soon*/ null}
    >
      {fileLength > 1 && (
        <BookMarkOverlay>
          <Many />
        </BookMarkOverlay>
      )}
      <Overlay>
        <Box>
          <HeartFull />
          <Count>{likeCount}</Count>
        </Box>
        <Box>
          <CommentFull />
          <Count>{commentCount}</Count>
        </Box>
      </Overlay>
    </PostContainer>
  );
};

SquarePost.propTypes = {
  postArray: PropTypes.array
};

export default SquarePost;
