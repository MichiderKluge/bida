"use client";

import styled from "styled-components";

const CardBackground = styled.div`
  height: 400px;
  width: 300px;
  border: 4px solid black;
  overflow: auto;
`;

interface CardProps {
  title: string;
  selftext: string;
  count: number;
}

const Card = ({ title, selftext, count }: CardProps) => {
  return (
    <CardBackground>
      <h1>{title}</h1>
      <p>{selftext}</p>
    </CardBackground>
  );
};

export default Card;
