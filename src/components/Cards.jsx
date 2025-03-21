import Flashcard from "./Flashcard"
import styled from "styled-components";
export default function Cards ({cardscontent, concluedCards}) {
  return (
    <CardsTable>
      {cardscontent.map((questioncard, index) => {
        return (<Flashcard question = {questioncard.question} answer = {questioncard.answer} i = {index} key = {index}/>);
      })}
    </CardsTable>
  )
}

const CardsTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  align-items: center;
  margin-top: 30px;
  gap: 20px;
`;