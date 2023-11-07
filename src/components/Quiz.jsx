import React, { useState } from 'react'
import { QuizData } from '../data/QuizData'
import QuizResult from './QuizResult';

function Quiz() {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore]=useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);

    const changeQuestion = ()=>{
        updateScore();
        if (currentQuestion<QuizData.length-1) {
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)

        }
    }
    const updateScore = ()=>{
        if(clickedOption===QuizData[currentQuestion].answer){
            setScore(score+1);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
  return (
    <div>
        <div className="heading-bg"><h5 className="heading-txt">Quiz App</h5></div>
        <div className="container">
            {showResult ? (
                <QuizResult  yourScore={score} totalScore={QuizData.length} tryAgain={resetAll}/>
            ):(
                <>
                <div className="question-num">
                <span id="question-number">{currentQuestion+1}/{QuizData.length}</span>
                </div>
            <div className="question">
                <span id="question-text">{QuizData[currentQuestion].question}?</span>

            </div>
            <div className="option-container">
                {QuizData[currentQuestion].options.map((option,i)=>{
                    return(
                        <button
                        className={`option-btn ${
                            clickedOption == i+1?"checked":null
                        }`}
                         key={i} onClick={()=>setClickedOption(i+1)}>
                            {option}
                        </button>
                    )
                })}
            </div>
            <input type="button" value="Next"  id="next-button" onClick={changeQuestion}/>
            </>)}
        </div>
    </div>
  )
}

export default Quiz