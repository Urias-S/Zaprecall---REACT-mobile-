import Logo from "./components/Logo";
import Cards from "./components/Cards";
import Progress from "./components/Progress";
import styled from "styled-components";
import GlobalStyle from "./styles/Reset";

export default function App({cardscontent}) {
  return (
    <Mobile>
      <GlobalStyle />
      <Logo />
      <Cards cardscontent = {cardscontent}/>
      <Progress cardscontent = {cardscontent}/>
    </Mobile>
  );
}

const Mobile = styled.div`
    @media (max-width: 768px) {
    background-color: rgba(251, 107, 107, 1);
    height: 100%;
    width: 100vw;
    margin-bottom: 14vh;
  }
`



