import React from 'react';
import { API_ROOT, HEADERS } from '../constants';

class NewMessageForm extends React.Component {
  state = {
    text: '',
    conversation_id: this.props.conversation_id
  };

  componentWillReceiveProps = nextProps => {
    this.setState({ conversation_id: nextProps.conversation_id });
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch(`${API_ROOT}/messages`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(this.state)
    });
    this.setState({ text: '' });
  };

  render = () => {
    return (
      <div className="newMessageForm">
        <form onSubmit={this.handleSubmit}>
          <label id="cretegroupchat" className="tes">New Message:</label>
          <br />
          <input
          id="input-group"
          className="ui input"
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input id="buttonsubmit" className='button is-danger is-outlined'type="submit" />
        </form>
      </div>
    );
  };
}

export default NewMessageForm;

