import * as ReactDOM from 'react-dom'
import * as React from 'react'

function power(n: number, p: number): number {
  return n ** p;
}

ReactDOM.render(
  <h1> {`power 4^2 = ${power(4,2)}`} </h1>,
  document.getElementById('app')
);