import styled from 'styled-components';

export const TableContainer = styled.div`
  border: 1px solid #c7c9cf;
  border-top: 1px solid #000;
  height: 300px;
`;

export const HeaderWrapper = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #c7c9cf;
  display: flex;
`;
export const HeaderContent = styled.div`
  font-size: 15px;
  font-weight: bold;
  border-right: 1px solid #c7c9cf;
  text-align: center;
  padding-top: 8px;
  width: 120px;
  height: 100%;
`;
export const HeaderGrowContent = styled(HeaderContent)`
  flex-grow: 1;
`;
export const HeaderContentend = styled(HeaderContent)`
  border-right: none;
`;
export const RowWrapper = styled.div`
  height: 260px;
  border-bottom: 1px solid #c7c9cf;
  overflow-y: auto;
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    width: 8px;
    background-color: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }
`;
export const Row = styled.div`
  display: flex;
  height: 40px;
  background-color: ${({ $isEven }) => ($isEven ? '#fafafa' : 'white')};
  &:last-child {
    border-bottom: 1px solid #c7c9cf;
  }
`;

export const RowContent = styled.div`
  font-size: 14px;
  text-align: center;
  width: 120px;

  border-right: 1px solid #c7c9cf;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RowGrowContent = styled(RowContent)`
  flex-grow: 1;
`;

export const RowContentend = styled(RowContent)`
  border-right: none;
  width: 112px;
`;
