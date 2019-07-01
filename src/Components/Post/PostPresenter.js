import React from "react";
import Avatar from "../Avatar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TextareaAutosize from "react-autosize-textarea";
import { Heart, Chat, Share, BookMark, Menu } from "../Icons";
import Comments from "../Comments";

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.theme.whiteBox};
  width: 614px;
  min-height: 600px;
  margin-bottom: 60px;
`;

const PostCreatorColumn = styled.div`
  height: 60px;
  display: flex;
  padding: 16px;
  align-items: center; /* 상하를 의미함 align-items는 justify-contents는 좌우 */
`;

const CreatorAvatar = styled.div``;

const CreatorInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 17px;
`;

const Username = styled.span`
  font-size: 14px;
  color: ${props => props.theme.blackColor};
  font-weight: 600;
  margin-bottom: 5px;
`;

const Location = styled.span`
  font-size: 12px;
  color: ${props => props.theme.blackColor};
`;

const HeaderOption = styled.div`
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const OptionAction = styled.div`
  cursor: pointer;
`;

const PostFileColumn = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
`;

const PostBottomColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 190px;
`;

const BottomActionSection = styled.div`
  display: flex;
  padding: 0 16px;
  align-items: center;
  margin-top: 4px;
  width: 100%;
  min-height: 40px;
`;

const HeartButton = styled.div`
  width: 50px;
  height: 40px;
  display: flex;
  align-items: center;
`;

const HeartAction = styled.div`
  cursor: pointer;
`;

const ChatButton = styled.div`
  width: 50px;
  height: 40px;
  display: flex;
  align-items: center;
`;

const ChatAction = styled.div`
  cursor: pointer;
`;

const ShareButton = styled.div`
  width: 50px;
  height: 40px;
  display: flex;
  align-items: center;
`;

const ShareAction = styled.div`
  cursor: pointer;
`;

const BookMarkButton = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const BookMarkAction = styled.div`
  cursor: pointer;
`;

const BottomLikeCountSection = styled.div`
  margin-bottom: 9px;
  padding: 0 16px;
`;

const LikeCount = styled.span`
  font-weight: 600;
  cursor: pointer;
  font-size: 14px;
`;

const BottomCaptionSection = styled.div`
  padding-top: 1px;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
`;

const Caption = styled.span`
  font-size: 14px;
  padding-left: 7px;
  color: ${props => props.theme.blackColor};
`;

const BottomCommentSection = styled.div`
  margin-top: 10px;
  min-height: 50px;
  max-height: 80px;
  padding: 0 16px;
  overflow-y: hidden;
`;

const BottomCreateTimeSection = styled.div`
  width: 100%;
  font-size: 12px;
  padding: 0 16px;
  color: ${props => props.theme.lightGreyColor};
  margin-top: 6px;
  margin-bottom: 10px;
`;

const BottomAddCommentSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;
  border-top: ${props => props.theme.boxBorder};
`;

const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  height: 100%;
  padding: 0 16px;
  resize: none;
  font-family: "Source Sans Pro", sans-serif;
  &:focus {
    outline: none;
  }
  font-size: 14px;
`;

export default props => {
  console.log(props);
  return (
    <PostWrapper>
      <PostCreatorColumn>
        <CreatorAvatar>
          <Avatar
            big={"no"}
            username={props.user.username}
            src={props.user.avatar}
          />
        </CreatorAvatar>
        <CreatorInfo>
          <Username>
            <Link to={`/${props.user.username}`}>{props.user.username}</Link>
          </Username>
          <Location>{props.location}</Location>
        </CreatorInfo>
        <HeaderOption>
          <OptionAction>
            <Menu />
          </OptionAction>
        </HeaderOption>
      </PostCreatorColumn>
      <PostFileColumn>
        <img
          width={612}
          src={
            props.files.length > 1
              ? props.files[0].url
              : require("../../images/noPhoto.jpg")
          }
          alt={"이미지"}
        />
      </PostFileColumn>
      <PostBottomColumn>
        <BottomActionSection>
          <HeartButton>
            <HeartAction>
              <Heart />
            </HeartAction>
          </HeartButton>
          <ChatButton>
            <ChatAction>
              <Chat />
            </ChatAction>
          </ChatButton>
          <ShareButton>
            <ShareAction>
              <Share />
            </ShareAction>
          </ShareButton>
          <BookMarkButton>
            <BookMarkAction>
              <BookMark />
            </BookMarkAction>
          </BookMarkButton>
        </BottomActionSection>
        <BottomLikeCountSection>
          <LikeCount>{`좋아요  ${props.likeCountState}개`}</LikeCount>
        </BottomLikeCountSection>
        <BottomCaptionSection>
          <Username>
            <Link to={`/${props.user.username}`}>{props.user.username}</Link>
          </Username>
          <Caption>{props.caption}</Caption>
        </BottomCaptionSection>
        <BottomCommentSection>
          <Comments commentsArray={props.comments} />
        </BottomCommentSection>
        <BottomCreateTimeSection>{props.createdTime}</BottomCreateTimeSection>
        <BottomAddCommentSection>
          <Textarea placeholder={"댓글 달기..."} {...props.newComment} />
        </BottomAddCommentSection>
      </PostBottomColumn>
    </PostWrapper>
  );
};
