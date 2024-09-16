import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

function Timer() {
  const { secondRemaning, dispatch } = useQuiz();

  const min = Math.floor(secondRemaning / 60);
  const sec = secondRemaning % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "TimeOut" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {min < 10 && "0"}
      {min}:{sec < 10 && "0"}
      {sec}
    </div>
  );
}

export default Timer;
