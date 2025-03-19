import styled, { keyframes } from "styled-components";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function MainCard() {
  const cardsettings = {
    dots: false,
    Infinite: true,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplaySpeed: 1,
    cssEase: "linear",
    speed: 4000,
    pauseOnHover: false, // 마우스를 올려도 멈추지 않도록 설정
    pauseOnFocus: false,
  };
  return (
    <MainCardContainer>
      <MainTitleText>우아한형제들이 일하는 이야기</MainTitleText>
      <MainsubTitleText>
        평범한 사람들이 모여 비범한 성과를 만들어 내도록
      </MainsubTitleText>
      <SliderContainer>
        <MainSlider {...cardsettings}>
          <MainCardItem bgurl="https://woowahan-cdn.woowahan.com/new_resources/image/card/ba8db158f23b43d1a41a9ad9dedfd26f.jpg">
            <MainCardText>배민의 마스코트</MainCardText>
          </MainCardItem>
          <MainCardItem2 bgurl="https://woowahan-cdn.woowahan.com/new_resources/image/card/e63f8be67e2f4c888c6480221ea2d518.png">
            <MainCardText>
              일 잘하는 사람들의 <br />
              비장의 장비
            </MainCardText>
          </MainCardItem2>{" "}
          <MainCardItem bgurl="https://woowahan-cdn.woowahan.com/new_resources/image/card/ea260167a5f84a959c8344a6abfefd7b.jpg">
            <MainCardText>신규 입사자의 일기</MainCardText>
          </MainCardItem>{" "}
          <MainCardItem2 bgurl="https://woowahan-cdn.woowahan.com/new_resources/image/card/cac058159df8481788eb0922401b90a6.jpg">
            <MainCardText>
              사장님의 브랜드를
              <br />더 탄탄하게
            </MainCardText>
          </MainCardItem2>{" "}
          <MainCardItem bgurl="https://woowahan-cdn.woowahan.com/new_resources/image/card/8abc9ce30eb64a44b67f3530dcffdbf0.png">
            <MainCardText>그림일까? 글자일까?</MainCardText>
          </MainCardItem>{" "}
          <MainCardItem2 bgurl="https://woowahan-cdn.woowahan.com/new_resources/image/card/acb3f45dfe4844649b790323d869f139.jpg">
            <MainCardText>
              여러분은 <br /> 뭐하고 쉬세요?
            </MainCardText>
          </MainCardItem2>{" "}
          <MainCardItem bgurl="https://woowahan-cdn.woowahan.com/new_resources/image/card/7975860a26254236ba414a5b9bc1d5bd.jpeg">
            <MainCardText>
              배민상회에서는 <br /> 뭐 팔아요?
            </MainCardText>
          </MainCardItem>{" "}
          <MainCardItem2 bgurl="https://woowahan-cdn.woowahan.com/new_resources/image/card/0fa63adf1300430f8192c7e0f2460eb0.jpg">
            <MainCardText>국제 퀀트모의투자</MainCardText>
          </MainCardItem2>
        </MainSlider>
      </SliderContainer>
      <MainTitleText>‘문 앞으로 배달되는 일상의 행복’이라는</MainTitleText>
      <MainTitleText>비전으로</MainTitleText>
      <MainsubTitleText>
        우아한형제들은 배달이 일상을 조금 더 행복하게 하도록 오늘도 달리고
        있어요
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </MainsubTitleText>
      <MainVideo autoPlay loop muted>
        <source
          src="https://woowahan-cdn.woowahan.com/static/media/dilly.feb1e91c.mp4"
          type="video/mp4"
        />
      </MainVideo>
      <MainTitleText>오늘이 전설이 될 수 있도록</MainTitleText>
      <MainsubTitleText>
        세계 진출, 배민로봇 개발, 인공지능을 연구하며
      </MainsubTitleText>
      <MainsubTitleText>
        우아한형제들은 미래를 더 가깝게 만들고 있어요.
      </MainsubTitleText>
    </MainCardContainer>
  );
}
export default MainCard;
const MainVideo = styled.video`
  display: flex;
  width: 50%;
  height: 40vh;
  align-self: center;
  justify-self: center;
  margin-bottom: 100px;
`;
const MainSlider = styled(Slider)`
  height: 100vh;
  .slick-list {
    height: 50vh;
    overflow-y: visible;
    overflow-x: hidden;
  }
  .slick-slide {
    width: 25vh !important;
  }
  .slick-slide div {
    display: flex;
    width: 25vh;
    justify-content: center;
    align-items: center;
    height: 30vh;
    padding-right: 30px;
  }
`;
const MainCardContainer = styled.div`
  padding-top: 160px;
`;
const MainTitleText = styled.div`
  font-size: 2em;
  font-weight: bold;
  justify-self: center;
  align-self: center;
`;
const MainsubTitleText = styled.div`
  margin-top: 2.9vh;
  font-size: 0.5;
  justify-self: center;
`;

const SliderContainer = styled.div`
  width: 100%;
  height: 60vh;
  padding: 50px 0;
  margin: 0 auto;
  overflow: visible;
`;

const MainCardItem = styled.div`
  background-size: cover;
  background-position: center;
  background-image: ${({ bgurl }) => `url(${bgurl})`};
  background-repeat: no-repeat;
  border-radius: 15px;
  display: flex;
`;
const MainCardItem2 = styled.div`
  background-position: center;
  background-size: cover;
  background-image: ${({ bgurl }) => `url(${bgurl})`};
  background-repeat: no-repeat;
  border-radius: 15px;
  position: relative;
  display: flex;
  margin-top: 100px;
`;
const MainCardText = styled.div`
  color: white;
  font-weight: bold;
  position: absolute;
  font-size: 1em;
  top: 70px;
  z-index: 0;
`;
