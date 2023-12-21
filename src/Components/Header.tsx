import styled from "styled-components"

const HeaderWrapper = styled.header`
    height: 48px;
    width: 100%;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;

    display: flex;
    align-items: center;

    padding-left: 64px;

    background-color: #000000;
    color: white;
    font-size: 2rem;
    font-weight: 600;
`

export default function Header () {
    return (
        <HeaderWrapper>
            BIDA
        </HeaderWrapper>
    )
}