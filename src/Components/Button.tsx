import styled from "styled-components";

const ButtonContainer = styled.button<{ $color?: string }>`
  height: 48px;
  width: 50%;
  min-width: 32px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 5px;

  border: 1.5px solid black;
  border-radius: 8px;
  font-weight: 600;

  background-color: white;

  &:focus {
    color: white;
    font-weight: 600;
    border: 0px;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      140deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 43%,
      rgba(186, 0, 255, 1) 100%
    );
  }
`;

type ButtonProps = {
  short: string
  long: string
};

export default function Button({ short, long }: ButtonProps) {
  return (
  <ButtonContainer>
    <div>{short}</div>
    <div style={{ fontWeight: 400 }}>{long}</div>
  </ButtonContainer>
  )
}
