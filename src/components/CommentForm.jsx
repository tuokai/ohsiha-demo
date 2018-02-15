import React, { Component } from 'react';
import request from 'superagent';

import GuestbookMessage from './GuestbookMessage';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      author: '',
    };
  }
  onSubmit(event) {
    event.preventDefault();
    const { author, message } = this.state;
    this.props.onSubmit({ author, message });
    this.setState({ author: '', message: ''});
  }
  render() {
    const { author, message } = this.state;
    return (
      <form className="CommentForm">
        Your name:
        <br />
        <input
          type="text"
          value={author}
          onChange={event => this.setState({ author: event.target.value})}
          />
        <br />
        Your message:
        <br />
        <input
          type="textarea"
          value={message}
          onChange={event => this.setState({ message: event.target.value})}
          />
        <br />
        <button onClick={event => this.onSubmit(event)}>
          Send
        </button>
      </form>
    );
  }
}

export default CommentForm;
