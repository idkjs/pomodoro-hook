import { useState, useEffect } from 'react';

import { calculateNewTime } from './pomodoro';

export type initialTime = string;

export interface PomodoroResult {
  time: string;
  startPomodoro: () => void;
  stopPomodoro: () => void;
  resetPomodoro: () => void;
}
export const usePomodoro = (initialTime: initialTime): PomodoroResult => {
  const finishedTime = '00:00';

  const [timerId, setTimerId] = useState<number | null>(null);

  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    setTime(initialTime);
  }, [initialTime]);

  const isFinished = (startTime: string) => startTime === finishedTime;
  const finishTimer = () => {
    stopPomodoro();
    return finishedTime;
  };
  const updateTime = () => {
    const timeEl = document.getElementById('time');

    if (timeEl) {
      let time = timeEl.textContent;
      let startTime = time;
      if (startTime) {
        let newTime = isFinished(startTime)
          ? finishTimer()
          : calculateNewTime(startTime);

        setTime(newTime);
      }
    }
  };

  const startPomodoro = () => {
    let timerId = window.setInterval(updateTime, 1000);
    if (timerId) {
      setTimerId(timerId);
    }
  };

  const stopPomodoro = () => {
    if (timerId) {
      clearInterval(timerId);
    }
    setTimerId(null);
  };

  const resetPomodoro = () => {
    stopPomodoro();
    setTime(initialTime);
  };
  return { time, resetPomodoro, startPomodoro, stopPomodoro };
};
