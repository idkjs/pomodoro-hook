## pomodoro-lambda-hook

## Example: [pomodoro-lambda-hook.surge.sh](https://pomodoro-lambda-hook.surge.sh)

This is a react hook wrapper around the functionality of [pomo-lambda](https://github.com/leandrotk/pomo-lambda)

## Installation

```sh
yarn add https://github.com/idkjs/pomodoro-lamda-hook-ts.git
npm install https://github.com/idkjs/pomodoro-lamda-hook-ts.git
pnpm install https://github.com/idkjs/pomodoro-lamda-hook-ts.git
```

## Use The Hook

Use the hook to make and style your own clock, import the `usePomodoro` function, create your component the pass it an intial time `<MyClock initialTime="25:00" />`:

```js
import { usePomodoro } from 'pomodoro-clock-hook-ts';

function MyClock({ initialTime }) {
  const { startPomodoro, stopPomodoro, resetPomodoro, time } = usePomodoro(
    initialTime
  );

  return (
    <main className="app manager">
      <div className="timer-container">
        <h1 id="time" className="countdown">
          {time}
        </h1>
      </div>

      <div>
        <div className="options">
          <div className="option">
            <div className="button-groups">
              <button
                id="start-button"
                className="button button--primary"
                onClick={startPomodoro}
              >
                Start
              </button>
              <button
                id="stop-button"
                className="button button--danger"
                onClick={stopPomodoro}
              >
                Stop
              </button>
              <button
                id="reset-button"
                className="button button--reset"
                onClick={resetPomodoro}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
const App = () => {
  return (
    <div>
      <MyClock initialTime="25:00" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## Use The Component

Just want the clock with the default `25:00` minutes:

```js
import { PomodoroClock } from 'pomodoro-clock-hook-ts';

const App = () => {
  return (
    <div>
      <PomodoroClock />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## Developement

1. `yarn install`
2. open a terminal and run `yarn start` to start `tsdx`
3. open another terminal and run `yarn demo` then open your browser at <http://localhost:1234>
4. Hack away.
