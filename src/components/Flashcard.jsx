import styled from "styled-components"
import play from '../assets/seta_play.png'
import virar from '../assets/seta_virar.png'
import certo from '../assets/icone_certo.png'
import erro from '../assets/icone_erro.png'
import quase from '../assets/icone_quase.png'
import { useState } from "react";

export default function Flashcard({ question, answer, i }) {
  function playCard() {
    setCardStateList(false);
    setCardStateQuestion(true);
  }

  function showAnswer() {
    setCardStateQuestion(false);
    setCardStateAnswer(true);
  }

  function chooseAnswer(choice) {
    setSelectedAnswer(choice);
    setCardStateAnswer(false);
    setCardStateList(true);
  }


  const [cardStateList, setCardStateList] = useState(true);
  const [cardStateQuestion, setCardStateQuestion] = useState(false);
  const [cardStateAnswer, setCardStateAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  return (
    <QuestionCard $cardStateList={cardStateList}>
      <QuestionCardFront $cardStateList={cardStateList}>
        <Statement $selectedAnswer = {selectedAnswer}>Pergunta {i + 1}</Statement>
        <IconImg 
        src={
          selectedAnswer === 'Zap!' ? certo : 
          selectedAnswer === 'Quase lembrei' ? quase :
          selectedAnswer === 'Não lembrei' ? erro : play
        }
        onClick={playCard} />
      </QuestionCardFront>

      <QuestionCardBack $cardStateQuestion={cardStateQuestion}>
        <span>{question}</span>
        <IconImg src={virar} $virar={true} onClick={showAnswer} />
      </QuestionCardBack>

      <QuestionCardAnswer $cardStateAnswer={cardStateAnswer}>
        <span>{answer}</span>
        <Buttons>
          <ButtonDont onClick={() => chooseAnswer('Não lembrei')}>
            <span>Não lembrei</span>
          </ButtonDont>

          <ButtonAlmost onClick={() => chooseAnswer('Quase lembrei')}>
            <span>Quase não lembrei</span>
          </ButtonAlmost>

          <ButtonZap onClick={() => chooseAnswer('Zap!')}>
            <span>Zap!</span>
          </ButtonZap>

        </Buttons>
      </QuestionCardAnswer >

    </QuestionCard>
  )
}

const Statement = styled.span`
  color: ${props => 
    props.$selectedAnswer === 'Zap!' ? 'rgba(47, 190, 52, 1)' :
    props.$selectedAnswer === 'Quase lembrei' ? 'rgba(255, 146, 46, 1)' :
    props.$selectedAnswer === 'Não lembrei' ? 'rgba(255, 48, 48, 1)' : 'black'
    };
  text-decoration: ${props => props.$selectedAnswer ? 'line-through' : 'none'};
`;

const ButtonDont = styled.button`
  height: 40px;
  width: 85px;
  background-color: rgba(255, 48, 48, 1);
`;
const ButtonAlmost = styled.button`
  height: 40px;
  width: 85px;
  background-color: rgba(255, 146, 46, 1);
`;
const ButtonZap = styled.button`
  height: 40px;
  width: 85px;
  background-color: rgba(47, 190, 52, 1);
  `;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  span {
    font-size: 12px;
    font-family: "Recursive", sans-serif;
    color: white;
    font-weight: 400;
  }
  button {
    border: none;
    border-radius: 5px;
  }
`;
const IconImg = styled.img`
  width: 20px;
  height: 20px;
  align-self: ${props => props.$virar ? 'flex-end' : ''};
`;
const QuestionCard = styled.div`
  position: relative;
  width: 300px;
  height: ${props => props.$cardStateList ? '60px' : '130px'};
  transform-style: preserve-3d;
  perspective: 1000px;
`;
const QuestionCardFront = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.6s;
  backface-visibility: hidden;
  background-color: white;
  border-radius: 5px;
  font-family: "Recursive", sans-serif;
  font-weight: 700;
  transform: ${props => props.$cardStateList ? 'rotateY(0)' : 'rotateY(180deg)'};
`;
const QuestionCardBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  min-height: 130px;
  padding: 20px 20px 5px 20px;
  display: flex;
  justify-content: space-between;
  transition: transform 0.6s;
  backface-visibility: hidden;
  transform: ${props => props.$cardStateQuestion ? 'rotateY(0)' : 'rotateY(-180deg)'};
  background-color: rgba(255, 255, 212, 1);
  border-radius: 5px;
  font-family: "Recursive", sans-serif;
  font-weight: 400;
  margin-bottom: 15px;
`;

const QuestionCardAnswer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 130px;
  padding: 20px;
  height: auto;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.6s;
  backface-visibility: hidden;
  transform: ${props => props.$cardStateAnswer ? 'rotateY(0)' : 'rotateY(270deg)'};
  background-color: rgba(255, 255, 212, 1);
  border-radius: 5px;
  font-family: "Recursive", sans-serif;
  font-weight: 400;
`;