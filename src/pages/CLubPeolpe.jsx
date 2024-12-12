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
import { handleSearchMembers } from '../apis/club';

const CLubPeolpe = () => {
  const [filters, setFilters] = useState({
    club_name: '',
  });
  const [departments, setDepartments] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };
  const searchDepartments = async () => {
    console.log('프론트에서 보내는 데이터', filters);
    if (filters.club_name === '') {
      alert('동아리 이름을 입력해주세요.');
      return;
    }
    try {
      const response = await handleSearchMembers(filters);
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
        학과서비스메뉴 &gt; 동아리 관리 &gt; 동아리 인원 조회
      </RouteText>
      <ContentWrapper>
        <Title1 text={'동아리 인원 조회'} SearchClick={searchDepartments} />
        <CheckContainer>
          <CheckTitle>동아리 이름</CheckTitle>
          <Input
            name="club_name"
            value={filters.club_name}
            onChange={handleChange}
          />
        </CheckContainer>
      </ContentWrapper>
      <ContentWrapper>
        <Title2 text={'동아리 소속 인원 리스트'} />
        <TableContainer>
          <HeaderWrapper>
            <HeaderContent>학번</HeaderContent>
            <HeaderContent>이름</HeaderContent>
            <HeaderContent>연락처</HeaderContent>
            <HeaderContent>성별</HeaderContent>
            <HeaderGrowContent>학과</HeaderGrowContent>
            <HeaderContentend>지도교수</HeaderContentend>
          </HeaderWrapper>
          <RowWrapper>
            {departments.map((row, index) => (
              <Row key={row.student_id} $isEven={index % 2 === 1}>
                <RowContent>{row.student_id}</RowContent>
                <RowContent>{row.name}</RowContent>
                <RowContent>{row.phone_number}</RowContent>
                <RowContent>{row.sex}</RowContent>
                <RowGrowContent>{row.department_name}</RowGrowContent>
                <RowContentend>{row.advisor_name}</RowContentend>
              </Row>
            ))}
          </RowWrapper>
        </TableContainer>
      </ContentWrapper>
    </BaseContainer>
  );
};

export default CLubPeolpe;

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
