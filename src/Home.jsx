import styled, { keyframes } from "styled-components";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import MainCard from "./MainCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import News from "./News";

function Home() {
  const [displayText, setDisplayText] = useState(""); // 동적으로 글자가 렌더링되는 텍스트
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 글자 인덱스
  const [activeIndex, setActiveIndex] = useState(0); // 슬라이드 활성화된 인덱스
  const [imageData, setImageData] = useState([]); // 이미지 데이터 저장

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setActiveIndex(current), // 슬라이드 변경 시 activeIndex 업데이트
  };
  useEffect(() => {
    setDisplayText(""); // 슬라이드가 바뀔 때마다 텍스트 초기화
    setCurrentIndex(0); // currentIndex 초기화
  }, [activeIndex]);

  // 텍스트 동적으로 렌더링
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const paragraph2 = data[activeIndex].paragraph2 || [];

        if (currentIndex < paragraph2.length) {
          // 텍스트가 하나씩 추가되도록
          const timeoutId = setTimeout(() => {
            setDisplayText((prevText) => prevText + paragraph2[currentIndex]);
            setCurrentIndex((prevIndex) => prevIndex + 1); // 글자가 하나씩 추가되도록
          }, 500); // 글자가 추가될 때마다 500ms 딜레이

          return () => clearTimeout(timeoutId); // 타이머 클린업
        }
      });
  }, [currentIndex]); // currentIndex와 activeIndex가 변경될 때마다 실행
  // 이미지 데이터 가져오기
  useEffect(() => {
    fetch("git/data.json")
      .then((response) => response.json())
      .then((data) => {
        setImageData(data); // 가져온 데이터로 이미지 정보 업데이트
      });
  }, []); // 첫 렌더링 시 한 번만 실행

  return (
    <div>
      <Container>
        <StyledSlider {...settings}>
          <Slide key={0}>
            <DarkOverlay />
            <SlideImage1Container isActive={0 === activeIndex}>
              <SlideImage1
                key={activeIndex === 0 ? activeIndex : "0"}
                src={imageData[0]?.image}
                isActive={0 === activeIndex}
              />
              <SlideText>우아한형제들이 알고싶다</SlideText>
              <SlideSideText1>행복이</SlideSideText1>

              <SlideSideText
                dangerouslySetInnerHTML={{ __html: displayText }}
              />
            </SlideImage1Container>
          </Slide>
          <Slide key={1}>
            <SlideImage1Container isActive={1 === activeIndex}>
              <SlideImage2
                key={activeIndex === 1 ? activeIndex : "1"}
                src={imageData[1]?.image}
                isActive={1 === activeIndex}
              />
              <SlideText>우아한형제들이 알고싶다</SlideText>
              <SlideSideText1>배달의 민족에게</SlideSideText1>
              <SlideSideText
                dangerouslySetInnerHTML={{ __html: displayText }}
              />
            </SlideImage1Container>
          </Slide>
          <Slide key={2}>
            <SlideVideoContainer isActive={2 === activeIndex}>
              <SlideVideo1 autoPlay loop muted>
                <source src="https://woowahan-cdn.woowahan.com/new_resources/image/banner/e6eca188082c45b5872b14f68d4c6f7a.mp4"></source>
              </SlideVideo1>

              <SlideText>우아한형제들이 알고싶다</SlideText>

              <SlideSideText1>부지런히 남긴</SlideSideText1>

              <SlideSideText
                dangerouslySetInnerHTML={{ __html: displayText }}
              />
            </SlideVideoContainer>
          </Slide>
        </StyledSlider>
      </Container>
      <MainCard></MainCard>
      <News></News>
    </div>
  );
}

export default Home;
const SlideVideo1 = styled.video`
  width: 100%;
  object-fit: cover;
  height: 100vh;
  align-self: center;
  justify-self: center;
`;
const SlideVideoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-self: center;
  justify-self: center;
`;
const SlideImage1Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative; /* 텍스트가 이미지 위에 올 수 있도록 */
  border-radius: 10px;
`;

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100vh;
  .slick-slide div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

const Slide = styled.div`
  background: #f5f5f5;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const slideIn1 = keyframes`
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(100px);
    opacity: 1;
  }
`;

const SlideImage1 = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  border-radius: 10px;
  transform: ${(props) =>
    props.isActive ? "translateY(100px)" : "translateY(0px)"};
  transition: transform 1.5s ease-in-out, opacity 0.5s ease-in-out;
  animation: ${(props) => (props.isActive ? slideIn1 : "none")} 1s ease-in-out;
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const SlideImage2 = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.src});
  background-size: 120%;
  background-position: ${(props) =>
    props.isActive ? "center center" : "left center"};
  transition: background-position 1.3s ease-in-out;
`;

const SlideText = styled.div`
  position: absolute;
  bottom: 10vh;
  font-size: 1.4em;
  color: white;
  z-index: 2;
  font-weight: bold;
`;

const SlideSideText = styled.div`
  position: absolute;
  font-size: 3em;
  color: white;
  z-index: 2;
  top: 10vh;
  font-weight: bold;
`;

const SlideSideText1 = styled.div`
  position: absolute;
  font-size: 3em;
  color: white;
  z-index: 2;
  font-weight: bold;
`;
