import {Container,
        RightContainer,
        LeftContainer,
        Form,
        Title} from "./styled"

import InputField from "../../components/input";


function Login () {

    return ( 

        <Container>

            <LeftContainer>

            </LeftContainer>

            <RightContainer>
                <Title>Acesse a HBO</Title>
                <Form>
                    
                    <InputField placeholder="Digite seu email" type="email"/>
                    <InputField placeholder="Digite sua senha" type="password"/>
                </Form>

            </RightContainer>
            
        </Container>

    );

}

export default Login