import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ClockDemo } from './ClockDemo';

const App = () => {
  return (
    <div>
      <ClockDemo initialTime="25:00" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));