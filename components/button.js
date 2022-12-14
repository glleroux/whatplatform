import styled from "styled-components";

const StyledButton = styled.button`
    background-color: #282828;
    color: #F2F2F2;
    font-weight: 500;
    font-size: 18px;
    border: none;
    border-radius: 14px;
    padding: 16px 64px;
    width: 100%;
    margin-top: 56px;
    &:hover {
        background-color: #282828E6;
    }
`

export const Button = ({ label, handleClick }) => <StyledButton onClick={handleClick}>{label}</StyledButton>