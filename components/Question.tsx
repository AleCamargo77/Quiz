import QuestionModel from "model/question";
import styles from "../src/styles/question.module.css";
import Response from "./Response";
import Statement from "./Statement";

const letters = [
  { valor: "A", cor: "#F2C866" },
  { valor: "B", cor: "#F266BA" },
  { valor: "C", cor: "#85D$F2" },
  { valor: "D", cor: "#BCE596" },
];

interface QuestionProps {
  valor: QuestionModel;
}

export default function Question(props: QuestionProps) {
  const question = props.valor;

  function renderResponses() {
    return question.respostas.map((response, i) => {
      return (
        <Response
          key={i}
          valor={response}
          indice={i}
          letra={letters[i].valor}
          corFundoLetra={letters[i].cor}
        />
      );
    });
  }

  return (
    <div className={styles.question}>
      <Statement text={question.enunciado} />
      {renderResponses()}
    </div>
  );
}
