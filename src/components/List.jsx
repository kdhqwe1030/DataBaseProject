import { useState } from 'react';
import styled from 'styled-components';
import ListIconImg from '../assets/ListIcon.png';

const List = ({ selectService, selectList, additionalList, setSelectList }) => {
  const [choose, setChoose] = useState('메뉴');

  return (
    <BaseContainer>
      <MenuArea
        choose={choose}
        setChoose={setChoose}
        selectService={selectService}
        selectList={selectList}
        additionalList={additionalList}
        setSelectList={setSelectList}
      />
      <BottomArea />
    </BaseContainer>
  );
};

export default List;

const BaseContainer = styled.div`
  width: 300px;
  height: 100%;
  border-right: 1px solid #c7c9cf;
`;

const MenuArea = ({
  choose,
  setChoose,
  selectService,
  selectList,
  additionalList,
  setSelectList,
}) => {
  return (
    <MenuBackGround>
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
      {choose === '메뉴' && (
        <>
          <TitleArea selectService={selectService} />{' '}
          <ListArea
            selectList={selectList}
            additionalList={additionalList}
            setSelectList={setSelectList}
          />
        </>
      )}
      {choose === '마이메뉴' && <Nodata />}
    </MenuBackGround>
  );
};
const MenuBackGround = styled.div`
  display: flex;
  flex-direction: column;
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
  cursor: pointer;
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
const Nodata = () => {
  return (
    <NodataContainer>
      <NodataText>No data</NodataText>
    </NodataContainer>
  );
};
const NodataContainer = styled.div`
  height: 584px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NodataText = styled.div`
  font-weight: bold;
  font-size: 14px;
`;
const TitleArea = ({ selectService }) => {
  return (
    <TitleWrapper>
      <TitleContainer>
        <Title>{selectService}</Title>
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

const ListArea = ({ additionalList, selectList, setSelectList }) => {
  return (
    <ListContainer>
      {additionalList && additionalList.length > 0 ? (
        additionalList.map((item, index) => (
          <ListItem
            onClick={() => setSelectList(item)}
            $choose={item === selectList ? true : false}
            key={index}
          >
            <ListIcon src={ListIconImg} />
            <ListText $choose={item === selectList ? true : false}>
              {item}
            </ListText>
          </ListItem>
        ))
      ) : (
        <NoDataText>항목이 없습니다.</NoDataText>
      )}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 514px;
  padding: 0px 5px;
  overflow-y: auto;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px;
  cursor: pointer;
  background-color: ${({ $choose }) => ($choose ? '#FDF5F6' : '')};
  &:hover {
    background-color: #fdf5f6;
  }
`;

const ListIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const ListText = styled.div`
  font: 14px/1.5 '맑은 고딕';
  color: ${({ $choose }) => ($choose ? '#bc3259' : '#333')};
  font-weight: ${({ $choose }) => ($choose ? '600' : '400')};
  &:hover {
    color: #a83f4b;
  }
`;

const NoDataText = styled.div`
  text-align: center;
  color: #aaa;
  font: 14px/1.5 '맑은 고딕';
  margin-top: 20px;
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
  width: 225px;
  height: 40px;
  background: #f5f5f5;
  border-radius: 6px;
  border: 2px solid transparent;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 15px;
  cursor: pointer;
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
