import styles from "../src/styles/statistic.module.css";

interface StatisticsProps {
  valor: any;
  text: string;
  colorBack?: string;
  colorFont?: string;
}

export default function Statistic(props: StatisticsProps) {
  return (
    <div className={styles.statistic}>
      <div
        className={styles.valor}
        style={{
          backgroundColor: props.colorBack ?? "#FDD60F",
          color: props.colorFont ?? "#333",
        }}
      >
        {props.valor}
      </div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
}
