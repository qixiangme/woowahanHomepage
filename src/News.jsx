import styled, { keyframes } from "styled-components";
import React, { useEffect, useState } from "react";
function News() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch("/newsData.json")
      .then((response) => response.json())
      .then((data) => {
        setNewsData(data);
      });
  });
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
        {newsData.map((news, index) => (
          <NewsStyle key={index}>
            <NewsImage src={newsData[index]?.image}></NewsImage>
            <TextBox>
              <NewsTitleText>{newsData[index]?.title}</NewsTitleText>
              <NewsSubTitleText>{newsData[index]?.subtitle}</NewsSubTitleText>
            </TextBox>
          </NewsStyle>
        ))}
      </NewsContainer>
      <More>
        <MoreText>더 보기</MoreText>
      </More>
    </div>
  );
}
export default News;
const MoreText = styled.div`
  font-weight: 500;
  display: flex;
  font-size: 1em;
  align-self: center;
`;
const More = styled.div`
  margin-top: 5vh;

  position: relative;
  display: flex;
  justify-content: center;
  justify-self: center;
  width: 6%;
  height: 6vh;
  background-color: lightgrey;
  border-radius: 15px;
`;
const MainTitleText = styled.div`
  font-size: 2em;
  font-weight: bold;
  justify-self: center;
  align-self: center;
`;

const NewsContainer = styled.div`
  height: 80vh;
  justify-items: center;
  align-items: center;
`;
const NewsStyle = styled.div`
  display: flex;
  margin-top: 30px;
  padding: 10px 20px;
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
  flex-direction: column;
  bottom: 10vh;
  left: 2vh;
`;
const NewsImage = styled.img`
  object-fit: cover;
  width: 25%;
  height: 20vh;
`;

const NewsTitleText = styled.div`
  margin-top: 10vh;
  font-weight: bold;
  font-size: 1.4em;
`;
const NewsSubTitleText = styled.div`
  margin-top: 4vh;
  font-size: 0.8em;
  font-weight: 540;
`;
