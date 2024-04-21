import { Analytics } from "@vercel/analytics/react";

import Button from "./Components/Button";
import FlipableCard from "./Components/FlipableCard";
import Header from "./Components/Header";
import posts from "./Constants";

import { useState, useRef } from "react";

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
  let lazyPosts = posts;

  const [buttonStates, setButtonStates] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSlideChange = (swiper: {
    activeIndex: number | ((prevState: number) => number);
  }) => {
    // If swiper.activeIndex is a function, call it to get the actual number value
    const activeIndex =
      typeof swiper.activeIndex === "function"
        ? swiper.activeIndex(0)
        : swiper.activeIndex;
    setActiveIndex(lazyPosts[activeIndex].key);
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
          {lazyPosts.map((post, index) => {
            return post.key < activeIndex + 5 ? (
              <SwiperSlide key={index}>
                <FlipableCard
                  title={post.data.title}
                  selftext={post.data.selftext}
                />
              </SwiperSlide>
            ) : null;
          })}
        </Swiper>
      </CardWrapper>
      <ButtonSection>
        <ButtonRow>
          <Button
            short="BDA"
            long="Bist Das Arschloch"
            activeIndex={activeIndex}
            buttonStates={buttonStates}
            onButtonClick={setButtonStates}
          />
          <Button
            short="NDA"
            long="Nicht Das Arschloch"
            activeIndex={activeIndex}
            buttonStates={buttonStates}
            onButtonClick={setButtonStates}
          />
        </ButtonRow>
        <ButtonRow>
          <Button
            short="ASA"
            long="Alle Sind Arschlöcher"
            activeIndex={activeIndex}
            buttonStates={buttonStates}
            onButtonClick={setButtonStates}
          />
          <Button
            short="KAH"
            long="Keine Arschlöcher Hier"
            activeIndex={activeIndex}
            buttonStates={buttonStates}
            onButtonClick={setButtonStates}
          />
        </ButtonRow>
      </ButtonSection>
      <Analytics />
    </AppContainer>
  );
}
