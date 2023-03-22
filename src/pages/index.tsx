import styles from "@/styles/Home.module.css";
import Button from "components/Button";
import Question from "components/Question";
import Quiz from "components/Quiz";
import QuestionModel from "model/question";
import ResponseModel from "model/response";
import { useEffect, useState } from "react";

const questionState = new QuestionModel(1, "Melhor cor?", [
  ResponseModel.notValid("Verde"),
  ResponseModel.notValid("Azul"),
  ResponseModel.notValid("Amarelo"),
  ResponseModel.isValid("Preto"),
]);

const BASE_URL = "http://localhost:300/api";

export default function Home() {
  const [question, setQuestion] = useState(questionState);
  const [idsQuestions, setIdsQuestions] = useState<number[]>([]);

  async function loadingIdsQuestions() {
    const resp = await fetch(`${BASE_URL}/quiz`);
    const idsQuestions = await resp.json();
    setIdsQuestions(idsQuestions);
  }

  async function loadingQuestion(idQuestion: number) {
    const resp = await fetch(`${BASE_URL}/questions/${idQuestion}`);
    const json = await resp.json();
    console.log(json);
  }

  useEffect(() => {
    loadingIdsQuestions();
  }, []);

  useEffect(() => {
    is;
  }, []);

  // function onResponse(index: number) {
  //   setQuestion(question.responseWith(index));
  // }

  // function timeOut() {
  //   if (question.naoRespondida) {
  //     setQuestion(question.responseWith(-1));
  //   }
  // }

  function questionResponse() {}

  function nextStep() {}

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Quiz
        question={question}
        lastQuestion={false}
        questionResponse={questionResponse}
        nextStep={nextStep}
      />
    </div>
  );
}
