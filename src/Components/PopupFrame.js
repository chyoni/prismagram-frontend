import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { X } from "./Icons";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import FollowButton from "./FollowButton";

const PopUpContainer = styled.div`
  position: absolute;
  z-index: 1500;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Box = styled.div`
  ${props => props.theme.whiteBox};
  width: 500px;
  border-radius: 20px;
  min-height: 300px;
  max-height: 600px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: ${props => props.theme.boxBorder};
`;

const TitleBox = styled.div`
  display: flex;
  width: 90%;
  margin-left: 35px;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const CloseBox = styled.div`
  display: flex;
  justify-content: center;
  width: 10%;
`;

const Xbox = styled.div`
  cursor: pointer;
`;

const Main = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column; /* column 이면 세워지니까 좌우조절을 align-items로 */
  justify-content: center;
`;

const UserRow = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 15px;
  align-items: center;
  justify-content: center;
`;

const AvatarField = styled.div`
  margin-right: 15px;
`;

const InfoField = styled.div`
  width: 100%;
  display: flex;
`;

const NameField = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

const Bio = styled.span`
  font-size: 12px;
  color: ${props => props.theme.lightGreyColor};
`;

const ButtonField = styled.div`
  display: flex;
  align-items: center;
`;

const ExFollowButton = styled(FollowButton)`
  margin: 0;
`;

const PopUp = ({ togglePopFn, kind, title, data }) => {
  const kindEnum = ["FOLLOW", "SETTING", "OPTION"];
  return (
    <PopUpContainer>
      <Box>
        <Header>
          <TitleBox>
            <Title>{title}</Title>
          </TitleBox>
          <CloseBox>
            <Xbox onClick={togglePopFn}>
              <X />
            </Xbox>
          </CloseBox>
        </Header>
        <Main>
          {kind === kindEnum[0] &&
            data.map(user => {
              return (
                <UserRow key={user.id}>
                  <AvatarField>
                    <Link onClick={togglePopFn} to={`${user.username}`}>
                      <Avatar
                        big={"no"}
                        src={user.avatar}
                        username={user.username}
                        linking={false}
                      />
                    </Link>
                  </AvatarField>
                  <InfoField>
                    <NameField>
                      <Name>
                        <Link onClick={togglePopFn} to={`${user.username}`}>
                          {user.username}
                        </Link>
                      </Name>
                      <Bio>{user.bio}</Bio>
                    </NameField>
                    <ButtonField>
                      {!user.isSelf && (
                        <ExFollowButton
                          whiteCard={false}
                          id={user.id}
                          isFollowing={user.isFollowing}
                        />
                      )}
                    </ButtonField>
                  </InfoField>
                </UserRow>
              );
            })}
        </Main>
      </Box>
    </PopUpContainer>
  );
};

PopUp.propTypes = {
  togglePopFn: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.any
};

export default PopUp;
