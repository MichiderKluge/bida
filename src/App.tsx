import Button from "./Components/Button";
import FlipableCard from "./Components/FlipableCard";
import Header from "./Components/Header";
import posts from "./Constants";

import { useState } from "react";

import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./styles.css";
// import required modules
import { EffectCards } from "swiper/modules";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;

  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  font-family: "Barlow", sans-serif;
`;

const CardWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 48px;
  padding: 40px;
`;

const ButtonSection = styled.div`
  width: 350px;
  height: fit-content;

  display: flex;
  flex-direction: column;
`;

const ButtonRow = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function App() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <AppContainer>
      <Header />
      <CardWrapper>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          onSlideChange={handleSlideChange}
        >
          {posts.map((post, index) => {
            return(
              <SwiperSlide
                key={index}
              >
                <FlipableCard
                  title={post.data.title}
                  selftext={post.data.selftext}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </CardWrapper>
      <ButtonSection>
        <ButtonRow>
          <Button short="BDA" long="BistDasArschloch"/>
          <Button short="NDA" long="NichtDasArschloch"/>
        </ButtonRow>
        <ButtonRow>
          <Button short="ASA" long="AlleSindArschlöcher"/>
          <Button short="KAH" long="KeineArschlöcherHier"/>
        </ButtonRow>
      </ButtonSection>
    </AppContainer>
  );
}
