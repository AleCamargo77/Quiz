import QuestionModel from "model/question";
import styles from "../src/styles/question.module.css";
import Statement from "./Statement";

interface QuestionProps {
  valor: QuestionModel;
}

export default function Question(props: QuestionProps) {
  const question = props.valor;

  return (
    <div className={styles.question}>
      <Statement text={question.enunciado} />
    </div>
  );
}
