import styled from "styled-components";

const ButtonContainer = styled.div<{ $active: boolean }>`
  height: 48px;
  width: 50%;
  min-width: 32px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 5px;

  outline: 1.5px solid black;
  border-radius: 8px;
  font-weight: 600;

  background-color: white;

  ${({$active}) => {if($active == true) return(
    `color: white;
    font-weight: 600;
    outline: 0px;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      140deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 43%,
      rgba(186, 0, 255, 1) 100%
    );`
  )}}
`;


type ButtonProps = {
  short: string
  long: string
  active: boolean
  onClick: () => void
};

export default function Button({ short, long, active, onClick }: ButtonProps) {
  return (
  <ButtonContainer onClick={onClick} $active={active}>
    <div>{short}</div>
    <div style={{ fontWeight: 400, fontSize: 14 }}>{long}</div>
  </ButtonContainer>
  )
}
