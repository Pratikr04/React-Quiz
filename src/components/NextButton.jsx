import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
 
  const { dispatch, index, questionLength } = useQuiz();

  if (index !== questionLength - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "newQuestion" })}
      >
        Next
      </button>
    );
  }
  if (index === questionLength - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "Finish" })}
      >
        Finish
      </button>
    );
  }
}

export default NextButton;
