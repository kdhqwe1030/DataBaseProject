import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import List from './components/List';
import Select from './components/Select';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DepartmentView from './pages/DepartmentView';
import DepartmentSearchAdvisor from './pages/DepartmentSEarchAdvisor';
import ClubView from './pages/ClubView';
const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
const AppContent = () => {
  const navigate = useNavigate();
  const [selectService, setSelectService] = useState('동아리 관리');
  const [additionalList, setAdditionalList] = useState(
    serviceMenu[selectService]
  );
  const [selectList, setSelectList] = useState('');
  const [selectStack, setSelectStack] = useState([]);

  const AppenStack = (item) => {
    if (!selectStack.includes(item)) {
      setSelectStack((prevStack) => [...prevStack, item]);
    }
    console.log('After adding:', selectStack);
  };

  useEffect(
    () => setAdditionalList(serviceMenu[selectService]),
    [selectService]
  );

  useEffect(() => {
    const handleNavigation = () => {
      // selectStack이 비어있을 때만 홈으로 이동
      if (selectStack.length === 0) {
        console.log('home으로');
        return navigate('/');
      }

      if (selectList) {
        switch (selectList) {
          case '동아리 기본정보 조회':
            navigate('/club/view');
            break;
          case '동아리 생성/수정/삭제':
            navigate('/club/people');
            break;
          case '동아리별 인원 조회':
            navigate('/club/controller');
            break;
          case '동아리별 지도교수 정보 조회':
            navigate('/club/advisor');
            break;

          case '학과 조회':
            navigate('/department/view');
            break;
          case '학과별 지도교수 현황':
            navigate('/department/advisor');
            break;
          case '학과':
            navigate('/department');
            break;
          default:
            break;
        }
      }
    };

    handleNavigation();
  }, [selectList, navigate, selectStack]);
  return (
    <BaseContainer>
      <Header setSelectService={setSelectService} />
      <ContentWrapper>
        <List
          selectService={selectService}
          selectList={selectList}
          setSelectList={setSelectList}
          additionalList={additionalList}
          AppenStack={AppenStack}
        />
        <ListExceptContainer>
          <Select
            selectList={selectList}
            setSelectList={setSelectList}
            selectStack={selectStack}
            setSelectStack={setSelectStack}
          />
          <Routes>
            {Object.entries(routes).map(([path, element]) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </ListExceptContainer>
      </ContentWrapper>
    </BaseContainer>
  );
};
const serviceMenu = {
  '동아리 관리': [
    '동아리 기본정보 조회',
    '동아리 생성/수정/삭제',
    '동아리별 인원 조회',
    '동아리별 지도교수 정보 조회',
  ],
  '회원 관리': [
    '신규 회원 등록',
    '회원 탈퇴 처리',
    '전체 회원 목록 조회',
    '활동/비활동 회원 구분',
    '회원 상세 정보 조회 (학번, 이름, 연락처, 학과 등)',
    '회원 가입일/탈퇴일 이력 관리',
    '성별별 회원 통계',
    '학과별 회원 통계',
  ],
  '활동 관리': [
    '동아리 활동 계획 등록',
    '활동 결과 보고서 등록',
    '활동 이력 조회',
    '활동별 참여 인원 관리',
    '연간/월간 활동 일정 관리',
    '활동 실적 통계 및 보고서 생성',
  ],
  '재정 관리': [
    '수입/지출 내역 등록',
    '활동별 예산 관리',
    '재정 상태 조회',
    '월별/연도별 재정 보고서',
    '항목별 지출 분석',
    '예산 대비 실제 지출 분석',
    '회비 납부 현황 관리',
  ],
  '지도교수 관련': [
    '지도교수 배정/변경',
    '지도교수 연락처 조회',
    '지도교수별 담당 동아리 조회',
    '지도교수 상담 일정 관리',
  ],
  '학과 관리': ['학과 조회', '학과별 지도교수 현황'],
};
const routes = {
  '/': <Home />,
  '/department/view': <DepartmentView />,
  '/department/advisor': <DepartmentSearchAdvisor />,
  '/club/view': <ClubView />,
  // '/club/people':,
  // '/club/controller':,
  // '/club/advisor':
};
const BaseContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  height: calc(100vh - 66px);
  width: 100%;
`;

const ListExceptContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
