import * as React from 'react'

export class Clock extends React.Component<{ date: Date }, {}> {

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}