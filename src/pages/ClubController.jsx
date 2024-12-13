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
import { handleSearch, handleModify, handleDeleteClub } from '../apis/club';

const ClubController = () => {
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

  const [selectedRow, setSelectedRow] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({
    club_id: '',
    department_name: '',
    club_name: '',
    club_location: '',
    founded_date: '',
    advisor_name: '',
  });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };
  const modifyDepartments = async () => {
    console.log('프론트에서 보내는 데이터', editData);
    try {
      const response = await handleModify(editData);
      if (response) {
        setClubs(response);
        alert('수정되었습니다!');
      }
    } catch (error) {
      console.error('Modify failed:', error);
    }
  };
  const handleRowClick = (row) => {
    setSelectedRow(row);
    setEditData(row);
  };

  const handleSave = () => {
    console.log('저장된 데이터:', editData);
    setEditMode(false);
    modifyDepartments();
  };

  const handleDelete = () => {
    if (confirm('삭제하시겠습니까?')) {
      console.log('삭제될 데이터:', selectedRow);
      deltetClub();
      setSelectedRow(null);
      setEditData({
        club_id: '',
        department_name: '',
        club_name: '',
        club_location: '',
        founded_date: '',
        advisor_name: '',
      });
    } else return;
  };

  const deltetClub = async () => {
    console.log('프론트에서 보내는 데이터', selectedRow);
    try {
      const response = await handleDeleteClub(selectedRow);
      if (response) {
        setClubs(response);
      }
    } catch (error) {
      console.error('Modify failed:', error);
    }
  };
  return (
    <BaseContainer>
      <RouteText>
        학과서비스메뉴 &gt; 동아리 관리 &gt; 동아리 수정/삭제
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
                <Row
                  key={row.club_id}
                  $isEven={index % 2 === 1}
                  onClick={() => handleRowClick(row)}
                  $isChoose={row === selectedRow ? true : false}
                >
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
        <Title2 text={'동아리 수정 및 삭제'} />
        <FormContainer>
          <FormGrid>
            <FormItem>
              <label>동아리코드:</label>
              <input
                name="club_id"
                value={editData.club_id}
                onChange={handleEditChange}
                disabled={!editMode}
              />
            </FormItem>
            <FormItem>
              <label>학과이름:</label>
              <input
                name="department_name"
                value={editData.department_name}
                onChange={handleEditChange}
                disabled={!editMode}
              />
            </FormItem>
            <FormItem>
              <label>동아리이름:</label>
              <input
                name="club_name"
                value={editData.club_name}
                onChange={handleEditChange}
                disabled={!editMode}
              />
            </FormItem>
            <FormItem>
              <label>동아리방 위치:</label>
              <input
                name="club_location"
                value={editData.club_location}
                onChange={handleEditChange}
                disabled={!editMode}
              />
            </FormItem>
            <FormItem>
              <label>설립일:</label>
              <input
                name="founded_date"
                value={editData.founded_date}
                onChange={handleEditChange}
                disabled={!editMode}
              />
            </FormItem>
            <FormItem>
              <label>지도교수:</label>
              <input
                name="advisor_name"
                value={editData.advisor_name}
                onChange={handleEditChange}
                disabled={!editMode}
              />
            </FormItem>
          </FormGrid>

          <ButtonGroup>
            {!editMode ? (
              <>
                <button
                  onClick={() => setEditMode(true)}
                  disabled={!selectedRow}
                  className="edit"
                >
                  수정
                </button>
                <button
                  onClick={handleDelete}
                  disabled={!selectedRow}
                  className="delete"
                >
                  삭제
                </button>
              </>
            ) : (
              <>
                <button onClick={handleSave} className="save">
                  저장
                </button>
                <button onClick={() => setEditMode(false)} className="cancel">
                  취소
                </button>
              </>
            )}
          </ButtonGroup>
        </FormContainer>
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

    &.delete {
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
