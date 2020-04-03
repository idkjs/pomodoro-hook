import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PomodoroClock } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PomodoroClock />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
