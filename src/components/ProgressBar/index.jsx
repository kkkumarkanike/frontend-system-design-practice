import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const totalMs = 10 * 1000;
const interval = 1000;
const totalCycles = totalMs / interval;
const progressMade = (interval / totalMs) * 100;

function Index() {
  const [progress, setProgress] = useState(0);
  const timerRef = useRef();
  const cyclesCompleted = useRef(0);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setProgress((prev) => prev + progressMade);
      cyclesCompleted.current++;
      if (cyclesCompleted.current === totalCycles)
        clearInterval(timerRef.current);
    }, interval);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="progress-bar">
      <div
        className="progress-fill"
        style={{ transform: `translateX(${progress - 100}%)` }}
      ></div>
    </div>
  );
}

export default Index;
