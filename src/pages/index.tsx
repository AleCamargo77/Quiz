import styles from "@/styles/Home.module.css";
import Button from "components/Button";
import Question from "components/Question";
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
    setQuestion(question.responseWith(index));
  }

  function timeOut() {
    if (question.naoRespondida) {
      setQuestion(question.responseWith(-1));
    }
  }

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
      <Question
        valor={question}
        timeResponse={5}
        onResponse={onResponse}
        timeOut={timeOut}
      />
      <Button text="Próxima" href="/result" />
    </div>
  );
}
