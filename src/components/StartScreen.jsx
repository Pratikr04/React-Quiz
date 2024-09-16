import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
  const { questionLength, dispatch } = useQuiz();

  return (
    <div className="start">
      <h2>Welcome To The React Quiz</h2>
      <h3>{questionLength} Questions to start your Knowledge</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "Start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
