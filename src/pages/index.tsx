import styles from "@/styles/Home.module.css";
import Question from "components/question";
import QuestionModel from "model/question";
import ResponseModel from "model/response";
import { useState } from "react";

const questionState = new QuestionModel(1, "Melhor cor?", [
  ResponseModel.notValid("Verde"),
  ResponseModel.notValid("Azul"),
  ResponseModel.notValid("Amarelo"),
  ResponseModel.isValid("Preto"),
]);

export default function Home() {
  const [question, setQuestion] = useState(questionState);

  function onResponse(index: number) {
    // console.log(index);
    setQuestion(question.responseWith(index));
  }

  function timeOut() {
    setQuestion(question.responseWith(-1));
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Question valor={question} onResponse={onResponse} timeOut={timeOut} />
    </div>
  );
}
