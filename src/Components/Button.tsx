import styled from "styled-components";

const ButtonContainer = styled.button<{ $color?: string }>`
  height: 48px;
  width: 50%;
  min-width: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 5px;

  border: 1.5px solid black;
  border-radius: 8px;

  background-color: ${(props) => props.$color};

  &:focus {
    background: linear-gradient(white, white) padding-box,
      linear-gradient(to right, darkblue, darkorchid) border-box;
    border-radius: 8px;
    border: 4px solid transparent;
  }
`;

type ButtonProps = {
  children: string;
  color: string;
};

export default function Button({ children, color }: ButtonProps) {
  return <ButtonContainer $color={color}>{children}</ButtonContainer>;
}
