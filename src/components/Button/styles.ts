import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button<{isLoading?: boolean;
isDisabled?: boolean;}>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 100%;
    background-color: #81259D;
    color: #FFF;

    ${({ isDisabled }) =>
        isDisabled && css`
            opacity: 0.5;
        `
    }

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
`