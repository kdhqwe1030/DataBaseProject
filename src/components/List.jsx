import { useState } from 'react';
import styled from 'styled-components';
const List = () => {
  const [choose, setChoose] = useState('메뉴');

  return (
    <BaseContainer>
      <MenuWrapper>
        <MenuContainer onClick={() => setChoose('메뉴')}>
          <MenuText $choose={choose === '메뉴' ? true : false}>메뉴</MenuText>
        </MenuContainer>
        <MenuContainer onClick={() => setChoose('마이메뉴')}>
          <MenuText $choose={choose === '마이메뉴' ? true : false}>
            마이메뉴
          </MenuText>
        </MenuContainer>
      </MenuWrapper>
      <MenuSubBarWrapper>
        <MenuSubBar $choose={choose === '메뉴' ? true : false}></MenuSubBar>
        <MenuSubBar $choose={choose === '마이메뉴' ? true : false}></MenuSubBar>
      </MenuSubBarWrapper>

      <TitleArea></TitleArea>
      <ListArea></ListArea>
      <BottomArea></BottomArea>
    </BaseContainer>
  );
};

export default List;

const BaseContainer = styled.div`
  width: 260px;
  height: 100%;
  border-right: 1px solid #c7c9cf;
`;
const MenuWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MenuContainer = styled.div`
  height: 32px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MenuSubBarWrapper = styled.div`
  width: 100%;
  height: 4px;
  display: flex;
`;
const MenuSubBar = styled.div`
  width: 50%;
  background-color: ${({ $choose }) => ($choose ? '#b72654' : '#9CA1AF')};
`;
const MenuText = styled.div`
  color: ${({ $choose }) => ($choose ? '#b72654' : '#9CA1AF')};
  font: bold 16px/1.1 '맑은 고딕';
`;
const TitleArea = () => {
  return (
    <TitleWrapper>
      <TitleContainer>
        <Title>동아리 관리</Title>
      </TitleContainer>
    </TitleWrapper>
  );
};
const TitleWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TitleContainer = styled.div`
  background: #f4f9ff;
  border: 1px solid #e1e5ea;
  border-radius: 4px;
  width: 230px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  color: #282e6a;
  font: bold 17px/1.1 '맑은 고딕';
`;
const ListArea = () => {
  return <ListContainer></ListContainer>;
};
const ListContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 524px;
`;
const BottomArea = () => {
  return (
    <BottomWrapper>
      <BottomContainer>
        <BottomIcon src="https://eisn.cbnu.ac.kr/nxui/_resource_/_theme_/default/images/btn_LF_mode.png?nexaversion=0" />
        <BottomText>화면 모드</BottomText>
      </BottomContainer>
      <BottomContainer>
        <BottomIcon src="https://eisn.cbnu.ac.kr/nxui/_resource_/_theme_/default/images/btn_LF_info.png?nexaversion=0" />
        <BottomText>내 정보</BottomText>
      </BottomContainer>
    </BottomWrapper>
  );
};
const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
const BottomContainer = styled.div`
  width: 208px;
  height: 36px;
  background: #f5f5f5;
  border-radius: 6px;
  border: 2px solid transparent;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 15px;
`;
const BottomIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const BottomText = styled.div`
  color: #585a60;
  /* font-size: 13px;
  font-weight: 600; */
  font: bold 15px/1.1 '맑은 고딕';
`;
