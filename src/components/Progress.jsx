import styled from "styled-components";

export default function Progress () {
  return (
    <ProgressBar>
      <Finished>CONCLUÍDOS</Finished>
    </ProgressBar>
  )
}
const ProgressBar = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
`
const Finished = styled.span`
  font-family: "Recursive", sans-serif;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  font-size: 20px;
`
