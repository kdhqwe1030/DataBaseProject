import axios from 'axios';
export const handleSearch = async (filters) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/departmentSearch',
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
      'http://localhost:5000/api/departmentSearch',
      filters
    );
    console.log(response.data);
    return response.data; // API 응답 데이터 저장
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
