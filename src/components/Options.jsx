import { useQuiz } from "../contexts/QuizContext";

function Options({question, dispatch }) {
  // console.log(questions);
  const {  answer,correctOption } = useQuiz();


  
  const checkAns = answer !== null;

  return (
    <div className="options">
      {question.options?.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            checkAns
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={checkAns}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
