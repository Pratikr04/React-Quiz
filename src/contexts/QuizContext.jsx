import { createContext, useContext, useEffect, useReducer } from "react";



const QuizContext = createContext();
const initialValue = {
  questions: [],

  status: "Loading",

  index: 0,

  answer: null,

  points: 0,

  highScore: 0,

  secondRemaning: null,
};

const SEC_PER_QUESTION = 30;

function reducer(state, action) {


  const question = state.questions.at(state.index);
  switch (action.type) {
    case "dataRceived":
      return {
        ...state,
        questions: action.payload,
        status: "Ready",
      };

    case "dataFailed":
      return { ...state, status: "Error" };

    case "Start":
      return {
        ...state,
        status: "Active",
        secondRemaning: state.questions.length * SEC_PER_QUESTION,
      };

    case "newAnswer":
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "newQuestion":
      return { ...state, index: state.index + 1, answer: null };

    case "Finish":
      return {
        ...state,
        status: "Finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "Restart":
      return { ...initialValue, questions: state.questions, status: "Ready" };

    case "TimeOut":
      return {
        ...state,
        secondRemaning: state.secondRemaning - 1,
        status: state.secondRemaning === 0 ? "Finished" : state.status,
      };

    default:
      throw new Error("Action Unkown");
  }
}

function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, points, highScore, secondRemaning },
    dispatch,
  ] = useReducer(reducer, initialValue);

  const questionLength = questions.length;

  const maxPossiblePoints = questions.reduce(
    (prev, curr) => prev + curr.points,
    0
  );

  useEffect(function () {
    async function getQuestions() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        dispatch({ type: "dataRceived", payload: data });
      } catch (error) {
        dispatch({ type: "dataFailed" });
      }
    }
    getQuestions();
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highScore,
        secondRemaning,
        questionLength,
        maxPossiblePoints,

        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) throw new Error("Something went wrong");
  return context;
}

export { QuizProvider, useQuiz };
