import * as ReactDOM from 'react-dom'
import * as React from 'react'
import { Comment, CommentProps } from './Comment'

var comment: CommentProps = {
  author: {
    name: "Peter",
    avatarUrl: "http://n1s2.hsmedia.ru/48/7b/36/487b36300c62c5f0cb905da52aa874b4/940x627_1_5a0bfdc1ca88097a61d2d64668c61ef9@940x627_0xc0a839a4_18087198581488362059.jpeg"
  },
  text: "text",
  date: new Date("2017-01-01")
}

ReactDOM.render(
  <div>
    <Comment author={comment.author} text={comment.text} date={comment.date} />
  </div>,
  document.getElementById('app')
);
