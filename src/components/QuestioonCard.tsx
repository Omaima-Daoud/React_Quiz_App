import React from 'react'

type Props={ // props is just a name you can choose what you want
    question : string ;
    answers : string [];
    callback : any ;
    userAnswer : any ;
    questionNr : number ; 
    totalQuestions : number ;

}
const QuestionCard:React.FC<Props> = ({ // .FC to tell react that this is a functional component 
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions
}) =>(
     <div>
        <p className='number'>
            Question : {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html:question}}/>
        <div>
            {answers.map(answer=>(
                <div>
                    <button disabled={userAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html:answer}}/>
                    </button>
                </div>
            ))}
        </div>
        
     </div>);
export default QuestionCard;
