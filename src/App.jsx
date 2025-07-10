import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import styled from 'styled-components';
import { flexMixin } from "./export";
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
  }

  body {
    background-color: #121212;
  }
`;


const Section = styled.section `
  ${flexMixin(undefined, 'center', 'center', '20px', 'wrap')};
  padding: 20px 40px;
`




function App() {
  return (
    <main>
      <GlobalStyle />
      <Header />
      <Section>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </Section>
    </main>
  );
}

export default App;
