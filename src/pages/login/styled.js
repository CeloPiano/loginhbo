import styled from "styled-components";
import {COLORS} from "../../constants/colors"

export const Container = styled.div` 
    display: flex;

    flex-direction: row;

    height: 100vh;


`

export const LeftContainer = styled.div`
    width: 33.33333%;


`

export const RightContainer = styled.div`
    width: 66.66667%;
    
    background-color: ${COLORS.black};
    
    display: flex;
    flex-direction: column;
    gap: 2rem;

    
    justify-content: center;
    align-items: center;

    padding-bottom: 10rem;
    padding-right: 5rem;

`

export const Form = styled.form`

    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    align-items: center;
`

export const Title = styled.span`

    color: ${COLORS.white};
    font-size: 2.375rem;
    text-align: start;

    width: 36%;

`