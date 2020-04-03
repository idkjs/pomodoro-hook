import { useState, useEffect } from 'react';

import { calculateNewTime } from './fp/calculation';
// export interface PomodoroSettings {
//   initialTime: string;
// }
export type initialTime = string;

export interface PomodoroResult {
  time: string;
  startPomodoro: () => void;
  stopPomodoro: () => void;
  resetPomodoro: () => void;
}
export const usePomodoro = (initialTime: initialTime): PomodoroResult => {
  // let timerId: number;
  // const { initialTime } = settings;

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

    // At this point `myComponent` is of type HTMLElement | null
    if (timeEl) {
      // Within the block of this statement, `myComponent` must contain a truthy value,
      // so the `null` type can be removed from the union type.
      //
      // This means that within this block, `myComponent` is of type `HTMLElement` and TypeScript
      // is happy for us to access its `innerHTML` property
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