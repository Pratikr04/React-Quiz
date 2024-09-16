import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Questions from "./Questions";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FineshTest from "./FineshTest";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuiz } from "../contexts/QuizContext";
import questions from "./question";

export default function App() {
  const { status, answer } = useQuiz();
  console.log(questions);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "Loading" && <Loader />}
        {status === "Error" && <Error />}
        {status === "Ready" && <StartScreen />}
        {status === "Active" && (
          <>
            <Progress />
            <Questions />
            <Footer>
              <Timer />
              {answer !== null && <NextButton />}
            </Footer>
          </>
        )}

        {status === "Finished" && <FineshTest />}
      </Main>
    </div>
  );
}
