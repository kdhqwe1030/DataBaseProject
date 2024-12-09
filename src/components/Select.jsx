import React from 'react';
import styled from 'styled-components';
import Home from '../assets/Home.png';
import windowEtc from '../assets/windowEtc.png';

const Select = ({ selectList, setSelectList, selectStack, setSelectStack }) => {
  return (
    <BaseContainer>
      <HomeIcon src={Home} />
      <MainSelectWrapper>
        <SelectItem text={'동아리 생성 수정'} />
        {selectStack.map((item) => (
          <SelectItem
            key={item}
            text={item}
            selectList={selectList}
            setSelectList={setSelectList}
            selectStack={selectStack}
            setSelectStack={setSelectStack}
          />
        ))}
      </MainSelectWrapper>
      <WindowIcon src={windowEtc} />
    </BaseContainer>
  );
};

export default Select;

const BaseContainer = styled.div`
  width: 100%;
  height: 44px;
  border-bottom: 1px solid #c7c9cf;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;
const MainSelectWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  padding: 0px 20px;
  overflow-x: auto;
  overflow-y: hidden;
`;
const HomeIcon = styled.img`
  height: 16px;
`;
const WindowIcon = styled.img`
  width: 120px;
`;

const SelectItem = ({
  text,
  selectList,
  setSelectList,
  selectStack,
  setSelectStack,
}) => {
  const onClickItem = ({ text }) => {
    setSelectList(text);
  };
  const onClickX = ({ text }) => {
    let filtered = selectStack.filter((element) => element !== text);
    setSelectStack(filtered);
  };

  return (
    <SelectItemContainer $choose={selectList === text ? true : false}>
      <SelectText
        $choose={selectList === text ? true : false}
        onClick={() => onClickItem(text)}
      >
        {text}
      </SelectText>
      <SelectDelete onClick={() => onClickX(text)}>X</SelectDelete>
    </SelectItemContainer>
  );
};

//  activate back
// #fff activate color

const SelectItemContainer = styled.div`
  background-color: ${({ $choose }) => ($choose ? '#3E405E' : '#edeff4')};
  display: flex;
  justify-content: space-between;
  padding: 4px 8px;
  display: inline-flex;
  gap: 10px;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
`;
const SelectText = styled.div`
  color: ${({ $choose }) => ($choose ? '#fff' : '#6a6b6c')};
  font-weight: bold;
  font-size: 13px;
  &:hover {
    color: ${({ $choose }) => ($choose ? '#fff' : '#2a385a')};
  }
`;
const SelectDelete = styled.div`
  color: #6a6b6c;
  font-weight: bold;
  font-size: 13px;
`;
