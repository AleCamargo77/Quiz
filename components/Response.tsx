import styles from "../src/styles/response.module.css";
import ResponseModel from "model/response";

interface ReponseProps {
  valor: ResponseModel;
  indice: number;
  letra: string;
  corFundoLetra: string;
}

export default function Response(props: ReponseProps) {
  const response = props.valor;
  return (
    <div className={styles.response}>
      <div className={styles.contentResponse}>
        <div className={styles.front}>
          <div
            className={styles.letter}
            style={{ backgroundColor: props.corFundoLetra }}
          >
            {props.letra}
          </div>
          <div className={styles.value}>{response.valor}</div>
        </div>
        <div className={styles.back}></div>
      </div>
    </div>
  );
}
