import React, {useState} from 'react';
import { fetchQuizQuestions } from './API'; 
import { Difficulty } from './API';

//components import
import QuestionCard from './components/QuestioonCard';

const TOTAL_QUESTIONS=10 ;

const  App = () => {

  const [loading,setloading]=useState(false); // this is a state in order to use props
  const[questions, setQuestions]=useState([]);
  const[number, setNumber]=useState(0);
  const[userAnswers, setUserAnswers]=useState([]);
  const[score,setScore]=useState(0);
  const[gameOver , setGameOver ]=useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS,Difficulty.EASY))

  const startQuiz = async() =>{

  }

  const checkAnswer=(e: React.MouseEvent<HTMLButtonElement>)=>{

  }
  const nextQuestion =() => {

  }

  return (
  <div className="App">
    <h1>React Quiz</h1> 
    <button className='start' onClick={startQuiz}>
      Start Quiz
    </button>
    <p className='score'>Score :</p>
    <p>Loading Questions ...</p>
    {/* <QuestionCard
    questionNr={number+1}
    totalQuestions={TOTAL_QUESTIONS}
    question={questions[number].question}
    answers={questions[number].number}
    userAnswer={userAnswers ? userAnswers[number]:undefined}
    callback={checkAnswer}
    /> */}
    <button className='next'  onClick={nextQuestion}>Next Question</button>
  </div>);
}

export default App;
