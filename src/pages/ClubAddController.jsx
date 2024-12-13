import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Title1, Title2 } from '../components/Title';
import {
  HeaderContent,
  HeaderContentend,
  HeaderGrowContent,
  HeaderWrapper,
  TableContainer,
  TableShortContainer,
  Row,
  RowContent,
  RowGrowContent,
  RowContentend,
  RowWrapper,
  RowShortWrapper,
} from '../components/TableStyled';
import { handleSearch, handleAddClub } from '../apis/club';

const ClubAddController = () => {
  const [filters, setFilters] = useState({
    department_id: '',
    department_name: '',
    club_name: '',
  });
  const [clubs, setClubs] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };
  const searchDepartments = async () => {
    console.log('프론트에서 보내는 데이터', filters);
    try {
      const response = await handleSearch(filters);
      if (response) {
        setClubs(response);
      }
    } catch (error) {
      console.error('Search failed:', error);
    }
  };
  useEffect(() => {}, [clubs]);

  const [formData, setFormData] = useState({
    club_id: '',
    department_name: '',
    club_name: '',
    club_location: '',
    founded_date: '',
    advisor_name: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = async () => {
    console.log('추가될 데이터:', formData);
    try {
      const response = await handleAddClub(formData); // API 함수는 별도로 만드셔야 합니다
      if (response) {
        setClubs(response);
        alert('추가되었습니다!');
        setFormData({
          // 폼 초기화
          club_id: '',
          department_name: '',
          club_name: '',
          club_location: '',
          founded_date: '',
          advisor_name: '',
        });
      }
    } catch (error) {
      console.error('Add failed:', error);
    }
  };
  return (
    <BaseContainer>
      <RouteText>학과서비스메뉴 &gt; 동아리 관리 &gt; 동아리 추가</RouteText>
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
        <TableShortContainer>
          <HeaderWrapper>
            <HeaderContent>동아리코드</HeaderContent>
            <HeaderGrowContent>학과이름</HeaderGrowContent>
            <HeaderGrowContent>동아리이름</HeaderGrowContent>
            <HeaderContent>동아리방 위치</HeaderContent>
            <HeaderContent>설립일</HeaderContent>
            <HeaderContentend>지도교수</HeaderContentend>
          </HeaderWrapper>
          <RowShortWrapper>
            {clubs.map((row, index) => {
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
          </RowShortWrapper>
        </TableShortContainer>
        <Title2 text={'동아리 추가'} />
        <FormContainer>
          <FormGrid>
            <FormItem>
              <label>동아리코드:</label>
              <input
                name="club_id"
                value={formData.club_id}
                onChange={handleFormChange}
              />
            </FormItem>
            <FormItem>
              <label>학과이름:</label>
              <input
                name="department_name"
                value={formData.department_name}
                onChange={handleFormChange}
              />
            </FormItem>
            <FormItem>
              <label>동아리이름:</label>
              <input
                name="club_name"
                value={formData.club_name}
                onChange={handleFormChange}
              />
            </FormItem>
            <FormItem>
              <label>동아리방 위치:</label>
              <input
                name="club_location"
                value={formData.club_location}
                onChange={handleFormChange}
              />
            </FormItem>
            <FormItem>
              <label>설립일:</label>
              <input
                name="founded_date"
                value={formData.founded_date}
                onChange={handleFormChange}
                type="date"
              />
            </FormItem>
            <FormItem>
              <label>지도교수:</label>
              <input
                name="advisor_name"
                value={formData.advisor_name}
                onChange={handleFormChange}
              />
            </FormItem>
          </FormGrid>

          <ButtonGroup>
            <button onClick={handleAdd} className="save">
              추가
            </button>
          </ButtonGroup>
        </FormContainer>
      </ContentWrapper>
    </BaseContainer>
  );
};

export default ClubAddController;

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

const FormContainer = styled.div`
  background-color: #eff6fe;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
`;

const FormItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  label {
    font-weight: bold;
    width: 120px;
    font-size: 16px;
  }

  input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    &:disabled {
      background-color: #f2f2f2;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;

  button {
    padding: 8px 16px;
    border-radius: 4px;
    color: white;
    font-size: 14px;
    cursor: pointer;
    border: 0px;

    &.edit {
      background-color: #ab3d59;
      &:hover {
        background-color: #fff;
        color: #ab3d59;
      }
      &:disabled {
        background-color: #ccc;
      }
    }

    &.save {
      background-color: #28a745;
      &:hover {
        background-color: #19692c;
      }
    }

    &.cancel {
      background-color: #6c757d;
      &:hover {
        background-color: #495057;
      }
    }
  }
`;
