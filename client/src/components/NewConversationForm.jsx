// import React from 'react';
// import { API_ROOT, HEADERS } from '../constants/index';

// class NewConversationForm extends React.Component {
//   state = {
//     title: ''
//   };

//   handleChange = e => {
//     this.setState({ title: e.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault()
//     fetch(`${API_ROOT}/conversations`, {
//       method: 'POST',
//       headers: HEADERS,
//       body: JSON.stringify(this.state)
//     });
//     this.setState({ title: '' });
//   };

// render = () => {
//   return (
//     <div className="newConversationForm">
//       <form onSubmit={this.handleSubmit}>
//         <label id="cretegroupchat">Create a new group chat</label>
//           <br />

//         <input
//         id="input-group"
//           className="ui input"
//             type="text"
//             value={this.state.title}
//             onChange={this.handleChange}
//           />
//           <input id="buttonsubmit" className='button is-danger is-outlined'type="submit" />
//         </form>
//       </div>
//     );
//   };
// }

// export default NewConversationForm;
