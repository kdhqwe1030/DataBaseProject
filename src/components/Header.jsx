import { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/Logo.png';
import backIcon from '../assets/backIcon.png';
import langIcon from '../assets/langIcon.png';

const Header = ({ setSelectService }) => {
  const [toggle, setToggle] = useState(false);
  const onClickEvent = (target) => {
    setSelectService(target);
    setToggle(false);
  };
  return (
    <BaseContainer>
      <MainLogo src={logo} />
      <BackLogo src={backIcon} />
      <MainFrame>
        <MainFrameText onClick={() => setToggle(!toggle)}>
          학부서비스 메뉴
        </MainFrameText>
        {toggle && (
          <FrameList>
            <ListItem onClick={() => onClickEvent('학과 관리')}>
              학과 관리
            </ListItem>
            <ListItem onClick={() => onClickEvent('동아리 관리')}>
              동아리 관리
            </ListItem>
            <ListItem onClick={() => onClickEvent('회원 관리')}>
              회원 관리
            </ListItem>
            <ListItem onClick={() => onClickEvent('활동 관리')}>
              활동 관리
            </ListItem>
            <ListItem onClick={() => onClickEvent('재정 관리')}>
              재정 관리
            </ListItem>
            <ListItem onClick={() => onClickEvent('지도교수 관련')}>
              지도교수 관련
            </ListItem>
          </FrameList>
        )}
      </MainFrame>
      <ContentWrapper>
        <IconWrapper src="https://eisn.cbnu.ac.kr/nxui/_resource_/_theme_/default/images/img_TF_user.png?nexaversion=0" />
        <Content>
          <ContentText>김도현</ContentText>
        </Content>
      </ContentWrapper>

      <ContentWrapper>
        <IconWrapper src="https://eisn.cbnu.ac.kr/nxui/_resource_/_theme_/default/images/btn_TF_search.png?nexaversion=0" />
        <Content>
          <ContentText>검색</ContentText>
        </Content>
      </ContentWrapper>
      <ContentWrapper>
        <IconWrapper src={langIcon} />
        <Content>
          <ContentText>한국어</ContentText>
        </Content>
      </ContentWrapper>

      <ContentWrapper>
        <IconWrapper src="https://eisn.cbnu.ac.kr/nxui/_resource_/_theme_/default/images/btn_TF_link.png?nexaversion=0" />
        <Content>
          <ContentText>학내링크</ContentText>
        </Content>
      </ContentWrapper>

      <ContentWrapper>
        <IconWrapper src="https://eisn.cbnu.ac.kr/nxui/_resource_/_theme_/default/images/btn_TF_logout.png?nexaversion=0" />
        <Content>
          <ContentText>로그아웃</ContentText>
        </Content>
      </ContentWrapper>
    </BaseContainer>
  );
};

export default Header;

const BaseContainer = styled.div`
  width: 100%;
  height: 66px;
  background-color: #292e66;
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 10px 20px;
`;
const MainFrame = styled.div`
  flex-grow: 1;
  padding: 10px 30px;
`;
const MainLogo = styled.img`
  width: 180px;
  height: 42px;
  cursor: pointer;
`;
const BackLogo = styled.img`
  width: 32px;
  height: 28px;
  cursor: pointer;
`;

const MainFrameText = styled.div`
  position: relative;
  cursor: pointer;

  color: #d3dcec;
  font: bold 18px / 1.1 '맑은 고딕';
  font-weight: bold;
  border: 2px solid transparent;
  border-radius: 4px;
  background: transparent;
  &:hover {
    color: #fff;
  }
  &:hover::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 70px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #fff;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2px;
`;
const Content = styled.div`
  padding: 2px 0px 0px 6px;
  cursor: pointer;
`;
const ContentText = styled.div`
  color: #f0f0f0;
  font: bold 15px / 1.1 '맑은 고딕';
`;
const IconWrapper = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  vertical-align: middle;
  background-position: center center;
  background-repeat: no-repeat;
`;

const FrameList = styled.div`
  position: absolute;
  left: 90px;
  top: 60px;
  transform: translateX(100%);
  background-color: #fff;
  color: #212121;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 180px;
  z-index: 10;
`;

const ListItem = styled.div`
  padding: 8px 10px;
  font-size: 14px;

  cursor: pointer;
  &:hover {
    color: #f0f0f0;
    font-weight: bold;
    background-color: #292e66;
  }
`;
