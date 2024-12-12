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
import { handleSearch } from '../apis/department';

const DepartmentSearchAdvisor = () => {
  const [filters, setFilters] = useState({
    department_id: '',
    department_name: '',
  });
  const [departments, setDepartments] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };
  const searchDepartments = async () => {
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
        학과서비스메뉴 &gt; 학과 관리 &gt; 학과별 지도교수 현황
      </RouteText>
      <ContentWrapper>
        <Title1 text={'학과리스트 조회'} SearchClick={searchDepartments} />
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
        </CheckContainer>
      </ContentWrapper>
      <ContentWrapper>
        <Title2 text={'학과 리스트'} />
        <TableContainer>
          <HeaderWrapper>
            <HeaderContent>학과코드</HeaderContent>
            <HeaderGrowContent>학과이름</HeaderGrowContent>
            <HeaderContent>학부장</HeaderContent>
            <HeaderContentend>학과위치</HeaderContentend>
          </HeaderWrapper>
          <RowWrapper>
            {departments.map((row, index) => (
              <Row key={row.department_id} $isEven={index % 2 === 1}>
                <RowContent>{row.department_id}</RowContent>
                <RowGrowContent>{row.department_name}</RowGrowContent>
                <RowContent>{row.department_head}</RowContent>
                <RowContentend>{row.department_location}</RowContentend>
              </Row>
            ))}
          </RowWrapper>
        </TableContainer>
      </ContentWrapper>
    </BaseContainer>
  );
};

export default DepartmentSearchAdvisor;

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
