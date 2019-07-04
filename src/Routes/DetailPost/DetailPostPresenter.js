import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Avatar from "../../Components/Avatar";
import Comments from "../../Components/Comments";
import {
  Heart,
  Chat,
  BookMark,
  Share,
  Prev,
  Next,
  HeartFull
} from "../../Components/Icons";
import TextareaAutosize from "react-autosize-textarea";
import Indicator from "../../Components/Indicator";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 1044px;
  justify-content: center;
  align-items: center;
`;

const PostBox = styled.div`
  width: 100%;
  display: flex;
  height: 598px;
`;

const PostFileColumn = styled.div`
  position: relative;
  width: 600px;
  padding-bottom: 100%;
  display: flex;
  z-index: 1;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
`;

const PostFile = styled.div`
  width: 600px;
  height: 598px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  opacity: ${props => (props.showing ? 1 : 0)};
  transition: opacity 0.5s linear;
`;

const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: ${props => props.theme.boxBorder};
  background-color: white;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  width: 335px;
  height: 100%;
`;

const MetaHeader = styled.div`
  width: 100%;
  height: 72px;
  padding: 15px;
  display: flex;
  align-items: center;
  border-bottom: ${props => props.theme.boxBorder};
`;

const Username = styled.span`
  font-size: 15px;
  font-weight: 600;
  margin-left: 17px;
`;

const MetaCaption = styled.div`
  width: 100%;
  height: 93px;
  padding: 15px;
  display: flex;
  align-items: center;
`;

const AvatarDiv = styled.div``;

const CaptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Div = styled.div`
  width: 100%;
`;

const Caption = styled.span`
  font-size: 14px;
  margin-left: 5px;
`;

const Time = styled.span`
  display: block;
  margin-left: 17px;
  font-size: 13px;
  color: ${props => props.theme.lightGreyColor};
`;

const MetaComment = styled.div`
  width: 100%;
  height: 270px;
  display: flex;
  /**/
  overflow-y: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  /*이 세줄이 스크롤바 기능은 있지만 보이진 않게하는 거*/
  flex-direction: column;
  border-bottom: ${props => props.theme.boxBorder};
`;

const MetaAction = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  border-bottom: ${props => props.theme.boxBorder};
`;

const BottomActionSection = styled.div`
  display: flex;
  padding: 0 16px;
  align-items: center;
  margin-top: 4px;
  width: 100%;
  min-height: 40px;
`;
const Button = styled.div`
  width: 50px;
  height: 40px;
  display: flex;
  align-items: center;
`;
const BookMarkButton = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Action = styled.div`
  cursor: pointer;
`;

const BottomLikeCountSection = styled.div`
  margin-bottom: 9px;
  padding: 0 16px;
`;

const LikeCount = styled.span`
  cursor: pointer;
  font-size: 14px;
`;

const Count = styled.span`
  font-weight: 600;
  font-size: 14px;
`;

const BigTime = styled(Time)`
  margin-top: 5px;
`;

const MetaAddComment = styled.div`
  width: 100%;
  height: 63px;
  display: flex;
  align-items: center;
`;

const BottomAddCommentSection = styled.div`
  width: 100%;
  display: flex;
  min-height: 10px;
  align-items: center;
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

const ToggleSlide = styled.div`
  width: 100%;
  display: flex;
  margin-top: 290px;
  margin-bottom: 230px;
`;

const PrevButton = styled.div`
  z-index: 2;
  width: 50%;
  display: flex;
  justify-content: flex-start;
`;

const PrevAction = styled.div`
  cursor: pointer;
  padding-left: 10px;
  svg {
    fill: white;
  }
`;

const NextButton = styled.div`
  z-index: 2;
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;

const NextAction = styled.div`
  cursor: pointer;
  padding-right: 10px;
  svg {
    fill: white;
  }
`;

const SlideIndicator = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailPostPresenter = ({
  post,
  toggleLike,
  newComment,
  currentItem,
  setCurrentItem,
  onKeyDown,
  selfComments,
  isLikedState,
  likeCountState
}) => {
  console.log(post);
  const filesLength = post.files.length;
  const createdAt = post.createdAt;
  const createdTime = createdAt.split("T")[0];
  return (
    <Wrapper>
      <PostBox>
        <PostFileColumn>
          {post.files &&
            post.files.map((file, index) => (
              <PostFile
                key={file.id}
                src={file.url}
                showing={index === currentItem}
              >
                {filesLength > 1 && (
                  <ToggleSlide>
                    {currentItem !== 0 ? (
                      <PrevButton>
                        <PrevAction
                          onClick={() => setCurrentItem(currentItem - 1)}
                        >
                          <Prev />
                        </PrevAction>
                      </PrevButton>
                    ) : (
                      <PrevButton />
                    )}
                    {currentItem + 1 !== filesLength ? (
                      <NextButton>
                        <NextAction
                          onClick={() => setCurrentItem(currentItem + 1)}
                        >
                          <Next />
                        </NextAction>
                      </NextButton>
                    ) : (
                      <NextButton />
                    )}
                  </ToggleSlide>
                )}
                {filesLength > 1 && (
                  <SlideIndicator>
                    <Indicator
                      countArray={post.files}
                      currentItem={currentItem}
                    />
                  </SlideIndicator>
                )}
              </PostFile>
            ))}
        </PostFileColumn>
        <MetaContainer>
          <MetaHeader>
            <Avatar
              big={"no"}
              username={post.user.username}
              src={post.user.avatar}
              linking={true}
            />
            <Username>
              <Link to={`/${post.user.username}`}>{post.user.username}</Link>
            </Username>
          </MetaHeader>
          <MetaCaption>
            <AvatarDiv>
              <Avatar
                big={"no"}
                username={post.user.username}
                src={post.user.avatar}
                linking={true}
              />
            </AvatarDiv>
            <CaptionDiv>
              <Div>
                <Username>
                  <Link to={`/${post.user.username}`}>
                    {post.user.username}
                  </Link>
                </Username>
                <Caption>{post.caption}</Caption>
              </Div>
              <Div>
                <Time>{createdTime}</Time>
              </Div>
            </CaptionDiv>
          </MetaCaption>
          <MetaComment>
            <Comments commentsArray={post.comments} avatar={true} />
            <Comments commentsArray={selfComments} avatar={true} />
          </MetaComment>
          <MetaAction>
            <BottomActionSection>
              <Button>
                <Action onClick={toggleLike}>
                  {isLikedState ? <HeartFull /> : <Heart />}
                </Action>
              </Button>
              <Button>
                <Action>
                  <Chat />
                </Action>
              </Button>
              {!post.user.isSelf && (
                <Button>
                  <Action>
                    <Share />
                  </Action>
                </Button>
              )}
              <BookMarkButton>
                <Action>
                  <BookMark />
                </Action>
              </BookMarkButton>
            </BottomActionSection>
            <BottomLikeCountSection>
              <LikeCount>
                {`좋아요 `}
                <Count>{likeCountState}</Count>
                {`개`}
              </LikeCount>
            </BottomLikeCountSection>
            <BigTime>{createdTime}</BigTime>
          </MetaAction>
          <MetaAddComment>
            <BottomAddCommentSection>
              <Textarea
                placeholder={"댓글 달기..."}
                onKeyDown={onKeyDown}
                value={newComment.value}
                onChange={newComment.onChange}
              />
            </BottomAddCommentSection>
          </MetaAddComment>
        </MetaContainer>
      </PostBox>
    </Wrapper>
  );
};

DetailPostPresenter.propTypes = {
  post: PropTypes.object.isRequired,
  toggleLike: PropTypes.func.isRequired,
  newComment: PropTypes.object.isRequired,
  currentItem: PropTypes.number.isRequired,
  setCurrentItem: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  selfComments: PropTypes.array.isRequired,
  isLikedState: PropTypes.bool.isRequired,
  likeCountState: PropTypes.number.isRequired
};

export default DetailPostPresenter;
