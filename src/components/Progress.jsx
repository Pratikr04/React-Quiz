import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, questionLength, points, maxPossiblePoints, answers } =
    useQuiz();

  return (
    <header className="progress">
      <progress
        max={questionLength}
        value={index + Number(answers !== null)}
      ></progress>

      <p>
        Questions <strong>{index + 1}</strong>/{questionLength}
      </p>

      <p>
        <strong>{points}</strong>/{maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
