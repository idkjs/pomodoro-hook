import * as React from 'react';


export { usePomodoro } from "./usePomodoro"

export const Thing = () => {
  return <div>the snozzberries taste like snozzberries</div>;
};
export const Tick = () => {
  return (
    <div>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
};
