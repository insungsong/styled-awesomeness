import React, { Component } from "react";
import styled, {
  createGlobalStyle,
  css,
  keyframes,
  ThemeProvider
} from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body{
    padding:0;
    margin:0;
  }
`;

const Card = styled.div`
  background-color: red;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  ${Card} {
    background-color: ${(props) => props.theme.successColor};
  }
`;

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${(props) => props.theme.dangerColor};
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <Container>
            <GlobalStyle />
            <Form />
          </Container>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
);

export default App;
