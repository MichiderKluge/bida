import { Analytics } from '@vercel/analytics/react';

import Button from "./Components/Button";
import FlipableCard from "./Components/FlipableCard";
import Header from "./Components/Header";
import posts from "./Constants";

import { SetStateAction, useState } from "react";

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
  const [buttonStates, setButtonStates] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSlideChange = (swiper: {
    activeIndex: SetStateAction<number>;
  }) => {
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
            return (
              <SwiperSlide key={index}>
                <FlipableCard
                  title={post.data.title}
                  selftext={post.data.selftext}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </CardWrapper>
      <ButtonSection>
        <ButtonRow>
          <Button
            short="BDA"
            long="Bist Das Arschloch"
            active={buttonStates[activeIndex] == "BDA" ? true : false}
            onClick={() => {
              const nextStates = [...buttonStates];
              if (nextStates[activeIndex] == "BDA") {
                nextStates[activeIndex] = "";
              } else {
                nextStates[activeIndex] = "BDA";
              }
              setButtonStates(nextStates);
            }}
          />
          <Button
            short="NDA"
            long="Nicht Das Arschloch"
            active={buttonStates[activeIndex] == "NDA" ? true : false}
            onClick={() => {
              const nextStates = [...buttonStates];
              if (nextStates[activeIndex] == "NDA") {
                nextStates[activeIndex] = "";
              } else {
                nextStates[activeIndex] = "NDA";
              }
              setButtonStates(nextStates);
            }}
          />
        </ButtonRow>
        <ButtonRow>
          <Button
            short="ASA"
            long="Alle Sind Arschlöcher"
            active={buttonStates[activeIndex] == "ASA" ? true : false}
            onClick={() => {
              const nextStates = [...buttonStates];
              if (nextStates[activeIndex] == "ASA") {
                nextStates[activeIndex] = "";
              } else {
                nextStates[activeIndex] = "ASA";
              }
              setButtonStates(nextStates);
            }}
          />
          <Button
            short="KAH"
            long="Keine Arschlöcher Hier"
            active={buttonStates[activeIndex] == "KAH" ? true : false}
            onClick={() => {
              const nextStates = [...buttonStates];
              if (nextStates[activeIndex] == "KAH") {
                nextStates[activeIndex] = "";
              } else {
                nextStates[activeIndex] = "KAH";
              }
              setButtonStates(nextStates);
            }}
          />
        </ButtonRow>
      </ButtonSection>
      <Analytics />
    </AppContainer>
  );
}
