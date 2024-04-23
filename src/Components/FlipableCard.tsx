import "./flip-transition.css";

import styled from "styled-components";
import Card from "./Card";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

const FlipableCardContainer = styled.div`
  height: 450px;
  width: 300px;
  perspective: 1500px;
  overflow: hidden;
`;

type CardProps = {
  title:  string | number;
  selftext: string;
};

export default function FlipableCard({ title, selftext }: CardProps) {
  const [showFront, setShowFront] = useState(true);
  return (
    <FlipableCardContainer>
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <Card
          title={title}
          selftext={selftext}
          onClick={() => {
            setShowFront(!showFront);
          }}
        />
      </CSSTransition>
    </FlipableCardContainer>
  );
}
