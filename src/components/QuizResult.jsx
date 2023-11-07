import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div id="result">
        Your Score : {props.yourScore}<br/>
        Total Score : {props.totalScore}
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult