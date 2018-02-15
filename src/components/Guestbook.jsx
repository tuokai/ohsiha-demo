import React, { Component } from 'react';
import request from 'superagent';

import GuestbookMessage from './GuestbookMessage';
import CommentForm from './CommentForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }
  async onFetchMessages() {
    const response = await request.get('http://localhost:8080/messages');
    this.setState({ messages: response.body });
  }
  async onSubmitMessage(message) {
    await request
      .post('http://localhost:8080/messages')
      .send(message);
    this.onFetchMessages();

  }
  async onDeleteMessage(id) {
    await request
      .del(`http://localhost:8080/messages/${id}`);
    this.onFetchMessages();
  }
  componentDidMount() {
    this.onFetchMessages();
  }
  render() {
    const { messages } = this.state;
    return (
      <div className="Guesbook">
        <CommentForm onSubmit={(message) => this.onSubmitMessage(message)} />
        {messages.map(item => (
          <div>
            <GuestbookMessage
              message={item.message}
              author={item.author}
              key={item.id}
              onDelete={() => this.onDeleteMessage(item.id)}
            />
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
