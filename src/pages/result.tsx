import styles from "../styles/Results.module.css";

import { useRouter } from "next/router";

export default function result() {
  const router = useRouter();

  const total = router.query.total;
  const valids = router.query.valids;
  const percent = Math.round((valids / total) * 100);

  return (
    <div className={styles.results}>
      <h1>Resultado Final</h1>
      <div>{total}</div>
      <div>{valids}</div>
      <div>{`${percent}`}</div>
    </div>
  );
}
