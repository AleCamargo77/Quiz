import styles from "@/styles/Home.module.css";
import Question from "components/question";
import QuestionModel from "model/question";
import ResponseModel from "model/response";

export default function Home() {
  const questionTest = new QuestionModel(1, "Melhor cor?", [
    ResponseModel.notValid("Verde"),
    ResponseModel.notValid("Azul"),
    ResponseModel.notValid("Amarelo"),
    ResponseModel.isValid("Preto"),
  ]);
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Question valor={questionTest} />
    </div>
  );
}
