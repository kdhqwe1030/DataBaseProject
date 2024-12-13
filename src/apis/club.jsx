import axios from 'axios';
export const handleSearch = async (filters) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/clubSearch',
      filters
    );
    console.log(response.data);
    return response.data; // API 응답 데이터 저장
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
export const handleSearchMembers = async (filters) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/clubMembers',
      filters
    );
    console.log(response.data);
    return response.data; // API 응답 데이터 저장
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
export const handleSearchAdvisor = async (filters) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/clubAdvisor',
      filters
    );
    console.log(response.data);
    return response.data; // API 응답 데이터 저장
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const handleModify = async (editData) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/clubModify',
      editData
    );
    console.log(response.data);
    return response.data; // API 응답 데이터 저장
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
export const handleDeleteClub = async (editData) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/clubDelete',
      editData
    );
    console.log(response.data);
    return response.data; // API 응답 데이터 저장
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
