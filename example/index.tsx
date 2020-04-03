import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';
import { usePomodoro, PomodoroClock} from '../dist';

// uncomment to configure with your own time with the 
// const App = () => {
//   return (
//     <div>
//       <ClockDemo initialTime="25:00" />
//     </div>
//   );
// };
const App = () => {
  return (
    <div>
      <PomodoroClock />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));