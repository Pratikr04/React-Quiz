import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Questions() {
  const { questions, dispatch, index } = useQuiz();
  const question = questions.at(index);

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} />
    </div>
  );
}

export default Questions;
