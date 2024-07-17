import { useEffect, useState } from "react";

export const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [timeId, setTimeId] = useState<number | null>(null);

  useEffect(() => {
    if (timeId) {
      return () => clearInterval(timeId);
    }
  }, [timeId]);
  const startHandler = () => {
    if (timeId) return; // Prevent multiple intervals
    const startTime = new Date().getTime();
    const id = setInterval(() => {
      setTime(new Date().getTime() - startTime);
    }, 1000);
    setTimeId(id);
  };
  const stopHandler = () => {
    setTimeId(null);
    setTime(0);
  };

  const pad = (n: number) => {
    return n < 10 ? "0" + n : n;
  };
  const updateTime = () => {
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(seconds / 60) % 60;
    const hours = Math.floor(minutes / 60);
    return (
      <>
        {pad(hours)}:{pad(minutes)}:{pad(seconds)}
      </>
    );
  };
  return (
    <>
      <div>{updateTime()}</div>
      <button onClick={startHandler}>start</button>
      <button onClick={stopHandler}>stop</button>
    </>
  );
};
