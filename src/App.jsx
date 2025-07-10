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

        {/*data.js에 있는 데이터를 import해 받아서, 
        map으로 하나씩 꺼내어
        content라는 이름으로 props를 통해 
        Content.jsx에 전달함.
        Content.jsx에서 import로 받음,
        function Content에서 content를 받아서 데이터를 화면에 정리해서 보여줌.*/}


      </Section>
    </main>
  );
}

export default App;
