import styled, { keyframes } from "styled-components";
import React, { useEffect, useState } from "react";
function News() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <MainTitleText>빠르고 정확한</MainTitleText>
      <MainTitleText>우아한형제들의 새 소식</MainTitleText>
      <NewsContainer>
        <NewsStyle>
          <NewsImage src="https://woowahan-cdn.woowahan.com/new_resources/image/report/8d4a69a7399e4a8f8cd01e610b91711a.jpg"></NewsImage>
          <TextBox>
            {" "}
            <NewsTitleText>"스타 소상공인 육성, 배민과 함께해요"</NewsTitleText>
            <NewsSubTitleText>
              우아한 형제들, 중기부 '온라인 브랜드 소상공인 육상사업' 참여
            </NewsSubTitleText>
          </TextBox>
        </NewsStyle>
        <NewsStyle>
          <NewsImage src="https://woowahan-cdn.woowahan.com/new_resources/image/report/8d4a69a7399e4a8f8cd01e610b91711a.jpg"></NewsImage>
          <TextBox>
            {" "}
            <NewsTitleText>"스타 소상공인 육성, 배민과 함께해요"</NewsTitleText>
            <NewsSubTitleText>
              우아한 형제들, 중기부 '온라인 브랜드 소상공인 육상사업' 참여
            </NewsSubTitleText>
          </TextBox>
        </NewsStyle>
        <NewsStyle>
          <NewsImage src="https://woowahan-cdn.woowahan.com/new_resources/image/report/8d4a69a7399e4a8f8cd01e610b91711a.jpg"></NewsImage>
          <TextBox>
            {" "}
            <NewsTitleText>"스타 소상공인 육성, 배민과 함께해요"</NewsTitleText>
            <NewsSubTitleText>
              우아한 형제들, 중기부 '온라인 브랜드 소상공인 육상사업' 참여
            </NewsSubTitleText>
          </TextBox>
        </NewsStyle>
        <NewsStyle>
          <NewsImage src="https://woowahan-cdn.woowahan.com/new_resources/image/report/8d4a69a7399e4a8f8cd01e610b91711a.jpg"></NewsImage>
          <TextBox>
            {" "}
            <NewsTitleText>"스타 소상공인 육성, 배민과 함께해요"</NewsTitleText>
            <NewsSubTitleText>
              우아한 형제들, 중기부 '온라인 브랜드 소상공인 육상사업' 참여
            </NewsSubTitleText>
          </TextBox>
        </NewsStyle>
      </NewsContainer>
    </div>
  );
}
export default News;

const MainTitleText = styled.div`
  font-size: 2em;
  font-weight: bold;
  justify-self: center;
  align-self: center;
`;

const NewsContainer = styled.div`
  height: 100vh;
  justify-items: center;
  align-items: center;
`;
const NewsStyle = styled.div`
  display: flex;
  margin-top: 30px;
  padding: 10px 30px;
  justify-self: center;
  align-items: center;
  width: 50%;
  height: auto;
  position: relative;
  &:hover {
    background-color: lightgray;
  }
`;
const TextBox = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  justify-self: left;
  align-items: left;
  bottom: 10vh;
  left: 2vh;
`;
const NewsImage = styled.img`
  object-fit: cover;
  width: 25%;
  height: 20vh;
`;

const NewsTitleText = styled.div`
  margin-top: 30px;
  font-weight: bold;
  font-size: 1.4em;
  top: 0vh;
  right: 25vh;
`;
const NewsSubTitleText = styled.div`
  position: absolute;
  font-size: 1.2em;
  top: 10vh;
  right: 25vh;
`;
