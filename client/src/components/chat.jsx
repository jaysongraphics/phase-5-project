// import {useState, useEffect} from 'react'
// import {useParams} from 'react-router'
// import {createConsumer} from '@rails/actioncable'
// import * as ActionCable from '@rails/actioncable'
// import React, { useRef } from 'react'
// import ChatModal from './chatModal'

// function Chat({currentUser}) {
//     const [chatName, setChatName] = useState('')
//     const [newChatName, setNewChatName] = useState([])
//     const [chatModal, setChatModal] = useState(false)
    
// useEffect(() => {
// const token = localStorage.getItem('token') 
//   fetch('http://localhost:3000/chats', {
//     method: 'GET',
//     headers: { 
//       'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => setNewChatName(data))
//     // console.log(data))
// }, [])

// // console.log(chatName);

// function handleChat(e){
//     setChatName('')
//     e.preventDefault()
//     const createChat = {
//     "chat_name": chatName,
//      "user_id": currentUser.id
//   }
//   const token = localStorage.getItem('token') 
//   fetch('http://localhost:3000/chats', {
//     method: 'POST',
//     headers: { 
//       'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(createChat),
//   })
//     .then((res) => res.json())
//     .then((data) => setNewChatName([...newChatName, data])
// )}


// // if(!newChatName) {
// //     return <Loading />
// // }

// function handleGroupChat(){
//     setChatModal(!chatModal)
// }

// const groupChat = newChatName.map(chatGroupName => 
//  <ChatModal
//         chatName={chatGroupName.chat_name}
//         chatGroupName={chatGroupName} 
//         // chatId={chatGroupName.id}
//         currentUser={currentUser} 
//         closeChatModal={handleGroupChat}
//         />
// )


// {/* <i id="profile-x"style={{cursor: 'pointer'}}>x</i> */}

// // console.log(currentUser);

//     return (
//         <div>
//             <br />
//             <form onSubmit={handleChat}>
//                 <input 
//                 onChange={(e)=> setChatName(e.target.value)}
//                 className="ui input" placeholder='Create Chat'
//                 value={chatName}>
//                 </input>
//                 <br />
//                 <br />
//                 <button className="button is-danger is-rounded">
//                 Create</button> 
//             </form>
//                 <div>
//                 <hr />
//                 <h1>Group Chats</h1> 
//                    {groupChat} 
//                  <hr />
//                 </div>
//         </div>
//     )
// }

// export default Chat;