// import React from 'react';
// import { ActionCable } from 'react-actioncable-provider';
// import { API_ROOT, HEADERS } from '../constants/index';
// import NewConversationForm from './NewConversationForm';
// import MessagesArea from './MessagesArea';
// import Cable from './Cable';

// class ConversationsList extends React.Component {
//   state = {
//     conversations: [],
//     activeConversation: null
//   };
//   componentDidMount = () => {
//      const token =localStorage.getItem('token') 
//     fetch(`${API_ROOT}/conversations`, {
//       //  method: 'POST',
//       headers: { 
//         // 'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`
//       },
//     })
//       .then(res => res.json())
//       .then(conversations => this.setState({ conversations }));
//   }

//   handleClick = id => {
//     this.setState({ activeConversation: id });
//   };

//   handleReceivedConversation = response => {
//     const { conversation } = response;
//     this.setState({
//       conversations: [...this.state.conversations, conversation]
//     });
//   };

//   handleReceivedMessage = response => {
//     const { message } = response;
//     const conversations = [...this.state.conversations];
//     const conversation = conversations.find(
//       conversation => conversation.id === message.conversation_id
//     );
//     conversation.messages = [...conversation.messages, message];
//     this.setState({ conversations });
//   };

//   render = () => {
//     const { conversations, activeConversation } = this.state;
//     return (
//       <div id="groupchat-div" className="conversationsList">
//         <ActionCable
//           channel={{ channel: 'ConversationsChannel' }}
//           onReceived={this.handleReceivedConversation}
//         />
//         {this.state.conversations.length ? (
//           <Cable
//             conversations={conversations}
//             handleReceivedMessage={this.handleReceivedMessage}
//           />
//         ) : null}

//         <h2 id="groupchat-text"className="">Group Chats</h2>
//         <ul id="" style={{cursor: 'pointer'}}>{mapConversations(conversations, this.handleClick)}</ul>
//         <NewConversationForm />
//         <br />
//         <br />
//         <hr />
//         {activeConversation ? (
//           <MessagesArea
//             conversation={findActiveConversation(
//               conversations,
//               activeConversation
//             )}
//           />
//         ) : null}
//       </div>
//     );
//   }; 
// }

// const findActiveConversation = (conversations, activeConversation) => {
//   return conversations.find(
//     conversation => conversation.id === activeConversation
//   );
// };

// const mapConversations = (conversations, handleClick) => {
//   return conversations.map(conversation => {
//     return (
//       <li key={conversation.id} onClick={() => handleClick(conversation.id)}>
//         {conversation.title}
//       </li>
//     );
//   });
// };  

// export default ConversationsList;
