import React, {useState} from 'react';
//components import
import QuestionCard from './components/QuestioonCard';

const  App=()=> {

  const [loading,setloading]=useState(false);
  const[questions, setQuestions]=useState([]);
  const[number, setNumber]=useState(0);
  const[userAnswers, setuserAnswers]=useState([]);
  const[score,setScore]=useState(0);
  const[gameOver]

  const startTrivia=async()=>{

  }

  const checkAnswer=(e: React.MouseEvent<HTMLButtonElement>)=>{

  }
  const nextQuestion =() => {

  }

  return (
  <div className="App">
    <h1>React Quiz</h1> 
    <button className='start' onClick={StartTrivia}>
      Start Trivia
    </button>
    <p className='score'>Score :</p>
    <p>Loading Questions ...</p>
    <QuestionCard/>
    <button className='next'  onClick={nextQuestion}>Next Question</button>
  </div>);
}

export default App;
