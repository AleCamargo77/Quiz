import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import styles from "../styles/Timer.module.css";

interface TimerProps {
  duration: number;
  timeOut: () => void;
}

export default function Timer(props: TimerProps) {
  return (
    <div>
      <CountdownCircleTimer
        duration={props.duration}
        size={120}
        isPlaying
        onComplete={props.timeOut}
        colors={[
          ["#BCE596", 0.33],
          ["#F7B801", 0.33],
          ["#ED827A", 0.33],
        ]}
      ></CountdownCircleTimer>
    </div>
  );
}
