import styled from "styled-components";

const StyledInput = styled.input`
    background-color: #ffffff;
    color: #282828;
    font-weight: 500;
    font-size: 16px;
    border: none;
    border-radius: 14px;
    padding: 16px 24px;
    width: 100%;
    margin-top: 16px;
    &::-webkit-input-placeholder {
        color: #28282866;
    }
`

export const Input = ({ id, placeholder, onChange }) => <StyledInput placeholder={placeholder} id={id} onChange={onChange}/>