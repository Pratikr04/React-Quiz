import { useQuiz } from "../contexts/QuizContext";

function FineshTest() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();

  const percentage = Math.ceil((points / maxPossiblePoints) * 100);

  let emoji;
  if (percentage === 100) emoji = "🥈";
  if (percentage >= 90 && percentage < 100) emoji = "👯‍♀️";
  if (percentage >= 80 && percentage < 90) emoji = "🌟";
  if (percentage >= 70 && percentage < 80) emoji = "😎";
  if (percentage >= 60 && percentage < 70) emoji = "🥇";
  if (percentage >= 50 && percentage < 60) emoji = "😣";
  if (percentage < 50) emoji = "😒";
  if (percentage === 0) emoji = "🤦🏻‍♀️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> Your scored <strong>{points}</strong>
        out of {maxPossiblePoints} ({percentage}%)
      </p>
      <p className="highscore">HighScore : {highscore}</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "Restart" })}
      >
        Try again the Quiz!
      </button>
    </>
  );
}

export default FineshTest;
