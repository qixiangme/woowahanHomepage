import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  return (
    <div>
      <GlobalStyle />
      <HeaderContainer onMouseLeave={() => setActiveMenu(null)}>
        <Logo>우아한형제들</Logo>
        <CenterContent>
          <CenterText onMouseEnter={() => setActiveMenu("회사소개")}>
            회사소개
          </CenterText>
          <CenterText onMouseEnter={() => setActiveMenu("서비스")}>
            서비스
          </CenterText>
          <CenterText onMouseEnter={() => setActiveMenu("지속가능경영")}>
            지속가능경영
          </CenterText>
          <CenterText onMouseEnter={() => setActiveMenu("뉴스룸")}>
            뉴스룸
          </CenterText>
          <CenterText onMouseEnter={() => setActiveMenu("글꼴")}>
            글꼴
          </CenterText>
          <CenterText onMouseEnter={() => setActiveMenu("음악")}>
            음악
          </CenterText>
        </CenterContent>
        <SubHeader isHovered={activeMenu !== null}>
          {activeMenu === "회사소개" && (
            <SubHeaderContent>
              <SubHeaderText>우아한 문화</SubHeaderText>
              <SubHeaderText>히스토리</SubHeaderText>
            </SubHeaderContent>
          )}
          {activeMenu === "서비스" && (
            <SubHeaderContent>
              <SubHeaderText>배달/포장</SubHeaderText>
              <SubHeaderText>커미스</SubHeaderText>
              <SubHeaderText>사장님/라이더</SubHeaderText>
              <SubHeaderText>컬처</SubHeaderText>
            </SubHeaderContent>
          )}{" "}
          {activeMenu === "지속가능경영" && (
            <SubHeaderContent>
              <SubHeaderText>지속가능한 행복의 시작</SubHeaderText>
              <SubHeaderText>함께가치</SubHeaderText>
              <SubHeaderText>우아한 책임</SubHeaderText>
            </SubHeaderContent>
          )}{" "}
          {activeMenu === "뉴스룸" && (
            <SubHeaderContent>
              <SubHeaderText>알립니다</SubHeaderText>
              <SubHeaderText>언론보도</SubHeaderText>
              <SubHeaderText>이슈와 팩트</SubHeaderText>
            </SubHeaderContent>
          )}
        </SubHeader>
      </HeaderContainer>
    </div>
  );
}

export default Header;
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%; // body 너비 100%로 설정
    height: 100%; // body 높이 100%로 설정
  }
`;
const SubHeader = styled.header`
  position: absolute;
  width: 100%;
  top: 10vh;
  height: ${({ isHovered }) => (isHovered ? "9vh" : "0vh")};
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: height 0.2s ease;
`;
const SubHeaderContent = styled.div`
  display: flex; // 자식
  justify-content: center; // 가로로 중앙 정렬
  align-items: center; // 세로로 중앙 정렬
  flex: 1;
  gap: 40px;
`;
const SubHeaderText = styled.div`
  font-size: 1rem;
  color: grey;
  &:hover {
    color: black;
    font-weight: bold;
  }
`;
// 헤더 스타일
const HeaderContainer = styled.header`
  position: fixed; // 화면 상단에 고정
  width: 100%;
  height: 13vh;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000; // 본문보다 위에 표시되도록 설정
  transition: height 0.3s ease;
`;
const Logo = styled.h1`
  margin-left: 150px;
  font-size: 1.3rem;
  font-weight: bold;
  color: black;
`;

const CenterContent = styled.div`
  display: flex; // 자식
  margin-right: 200px;
  justify-content: center; // 가로로 중앙 정렬
  align-items: center; // 세로로 중앙 정렬
  flex: 1;
  gap: 40px;
`;
const CenterText = styled.div`
  font-size: 1rem;
  color: black;
  &:hover {
    color: black;
    font-weight: bold;
  }
`;
