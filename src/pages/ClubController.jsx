import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Title1, Title2 } from '../components/Title';
import {
  HeaderContent,
  HeaderContentend,
  HeaderGrowContent,
  HeaderWrapper,
  TableContainer,
  Row,
  RowContent,
  RowGrowContent,
  RowContentend,
  RowWrapper,
} from '../components/TableStyled';
import { handleSearch } from '../apis/club';

const ClubController = () => {
  const [filters, setFilters] = useState({
    department_id: '',
    department_name: '',
    club_name: '',
  });
  const [departments, setDepartments] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };
  const searchDepartments = async () => {
    console.log('프론트에서 보내는 데이터', filters);
    try {
      const response = await handleSearch(filters);
      if (response) {
        setDepartments(response);
      }
    } catch (error) {
      console.error('Search failed:', error);
    }
  };
  useEffect(() => {}, [departments]);
  return (
    <BaseContainer>
      <RouteText>
        학과서비스메뉴 &gt; 동아리 관리 &gt; 동아리 기본정보 조회
      </RouteText>
      <ContentWrapper>
        <Title1 text={'동아리 기본정보 조회'} SearchClick={searchDepartments} />
        <CheckContainer>
          <CheckTitle>학과코드</CheckTitle>
          <Input
            name="department_id"
            value={filters.department_id}
            onChange={handleChange}
          />
          <CheckTitle>학과이름</CheckTitle>
          <Input
            name="department_name"
            value={filters.department_name}
            onChange={handleChange}
          />
          <CheckTitle>동아리 이름</CheckTitle>
          <Input
            name="club_name"
            value={filters.club_name}
            onChange={handleChange}
          />
        </CheckContainer>
      </ContentWrapper>
      <ContentWrapper>
        <Title2 text={'동아리 리스트'} />
        <TableContainer>
          <HeaderWrapper>
            <HeaderContent>동아리코드</HeaderContent>
            <HeaderGrowContent>학과이름</HeaderGrowContent>
            <HeaderGrowContent>동아리이름</HeaderGrowContent>
            <HeaderContent>동아리방 위치</HeaderContent>
            <HeaderContent>설립일</HeaderContent>
            <HeaderContentend>지도교수</HeaderContentend>
          </HeaderWrapper>
          <RowWrapper>
            {departments.map((row, index) => {
              const formattedDate = new Date(row.founded_date)
                .toISOString()
                .split('T')[0];
              return (
                <Row key={row.club_id} $isEven={index % 2 === 1}>
                  <RowContent>{row.club_id}</RowContent>
                  <RowGrowContent>{row.department_name}</RowGrowContent>
                  <RowGrowContent>{row.club_name}</RowGrowContent>
                  <RowContent>{row.club_location}</RowContent>
                  <RowContent>{formattedDate}</RowContent>
                  <RowContentend>{row.advisor_name}</RowContentend>
                </Row>
              );
            })}
          </RowWrapper>
        </TableContainer>
      </ContentWrapper>
    </BaseContainer>
  );
};

export default ClubController;

const BaseContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RouteText = styled.div`
  font-size: 14px;
  color: #838690;
  padding-bottom: 20px;
`;
const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const CheckContainer = styled.div`
  background-color: #efeffe;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  gap: 20px;
`;

const CheckTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
`;
const Input = styled.input`
  width: 120px;
  padding: 5px;
  border: 1px solid #c7c9cf;
  border-radius: 4px;
  outline: none;
  margin-right: 10px;
`;
