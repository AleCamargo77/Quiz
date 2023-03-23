import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../src/styles/Timer.module.css";

interface TimerProps {
  key: any;
  duration: number;
  timeOut: () => void;
}

export default function Timer(props: TimerProps) {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        duration={props.duration}
        size={120}
        isPlaying
        onComplete={props.timeOut}
        colors="#BCE596"
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}

// colors={[
//   ["#BCE596", 0.33],
//   ["#F7B801", 0.33],
//   ["#ED827A", 0.33],
// ]}
