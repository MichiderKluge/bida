import styled from "styled-components";

const CardContainer = styled.div`
  height: 100%;
  width: 100%;

  transform-style: preserve-3d;

  position: relative;

  outline: 3.5px solid black;
  outline-offset: -3px;
  border-radius: 16px;
  background-color: white;
`;

const CardFront = styled.div`
  height: 100%;
  width: 100%;

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */

  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;

  padding: 24px;

  font-size: 2rem;
  font-weight: 600;
`;

const CardBack = styled(CardFront)`
  align-items: flex-start;
  
  transform: rotateY(180deg);

  padding: 16px;

  font-size: 1.25rem;
  font-weight: 300;
  padding: 16px;
`;

type CardProps = {
  title: string;
  selftext: string;
  onClick: () => void;
};

export default function Card({ title, selftext, onClick }: CardProps) {
  return (
    <CardContainer onClick={onClick}>
      <CardFront>
        {title}
      </CardFront>
      <CardBack>
        {selftext}
      </CardBack>
    </CardContainer>
  );
}
