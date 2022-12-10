import styled, { css } from 'styled-components';

interface IStyledButton {
    isDisabled?: boolean;
} 

export const ButtonContainer = styled.button<IStyledButton>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 100%;
    background-color: #81259D;
    color: #FFF;
    font-size: 16px;
    font-weight: bold;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }

    ${({ isDisabled }) =>
        isDisabled && css`
            opacity: 0.5;
            pointer-events: none;
        `
    }
`