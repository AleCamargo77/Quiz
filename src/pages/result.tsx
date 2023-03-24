import styles from "../styles/results.module.css";

import { useRouter } from "next/router";
import Statistic from "components/Statistic";
import Button from "components/Button";

export default function Result() {
  const router = useRouter();

  const total = +router.query.total;
  const valids = +router.query.valids;
  const percent = Math.round((valids / total) * 100);

  return (
    <div className={styles.results}>
      <h1>Resultado Final</h1>
      <div style={{ display: "flex" }}>
        <Statistic text="Perguntas" valor={total} />
        <Statistic text="Certas" valor={valids} colorBack="#9CD2A4" />
        <Statistic text="Percentual" valor={`${percent}`} colorBack="#DE6A33" />
      </div>
      <Button href="/" text="Tentar Novamente" />
    </div>
  );
}
