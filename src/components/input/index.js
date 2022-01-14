import { Container, Input, Label } from "./styled";

function InputField ({placeholder, type}) {

    return(
        <Container>
            <Input placeholder = {placeholder} type={type}/>
            <Label>{placeholder}</Label>
        </Container>    
        );

}

export default InputField