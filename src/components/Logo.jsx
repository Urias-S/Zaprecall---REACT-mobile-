import logoimg from '../assets/logo.png'
import styled from 'styled-components'
export default function Logo () {
  return (
    <Logotype>
      <ImageLogo src={logoimg}/>
      <LogoName>ZapRecall</LogoName>
    </Logotype>
  )
}

const Logotype = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 15vh;
`;

const ImageLogo = styled.img`
  width: 56px;
  height: 60px;
  margin-right: 25px;
`;

const LogoName = styled.span`
  font-family: "Righteous", sans-serif;
  font-size: 36px;
  font-weight: 400;
  color: white;
`