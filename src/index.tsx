import * as ReactDOM from 'react-dom'
import * as React from 'react'
import { Clock } from './Clock'


function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('app')
  );
}

setInterval(tick, 1000)