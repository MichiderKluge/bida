"use client";

import styled from "styled-components";
import posts from "@/constants";
import Card from "@/components/Card";

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  display: inline-block;
  background-color: white;
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 8%;
  display: block;
`;

const index = 5;

export default function Home() {
  return (
    <MainWrapper>
      <Button>Button</Button>
      <Card
        title={posts[index].data.title}
        selftext={posts[index].data.selftext}
        count={index}
      />
    </MainWrapper>
  );
}
