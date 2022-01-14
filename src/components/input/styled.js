import styled from "styled-components";
import {COLORS} from "../../constants/colors"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 36%;
    height: auto;

    justify-content: center;
    
    input:focus::placeholder{
        transition: all 0.01s;
        opacity: 0;
    }
    
    input:focus +label{
        opacity: 1;
        transition: all 0.01s;
    }
`   

export const Label = styled.label`
    text-align: center;
    line-break: unset;
    
    
    width: 8%;
    

    position: absolute;
    color: ${COLORS.white};

    transform: translate(1rem, -1.75rem) ;

    background-color: ${COLORS.black};

    transition: all 0.5s;
    opacity: 0;
`


export const Input = styled.input`
    padding: 0 1.25rem;

    width: 100%;
    line-height: 3.5rem;
    height: auto;

    background-color: ${COLORS.black};
    
    color: ${COLORS.white};
    font-size: 1.125rem;

    border: 0.0625rem solid ${COLORS.white};

    margin: 0;
    
    
    
`