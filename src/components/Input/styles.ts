import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
`

export const InputContainer = styled.div`
    width: 100%;
    height: 42px;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;
    overflow: hidden;
    padding: 0 10px;
    
    & input {
        width: 100%;
        height: 42px;
        border-radius: 21px;
        background-color: transparent;
        border: 0;
        outline: none;
    }

`

export const ErrorMessage = styled.p`
    color: red;
    font-size:12px;
    margin-top:8px;
    margin-left:10px;
`