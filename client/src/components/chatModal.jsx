import { Button, Icon, Image, Modal } from 'semantic-ui-react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import {createConsumer} from '@rails/actioncable'
import React, { useRef } from 'react'

const ChatModal = ({chatId, closeChatModal, currentUser}) => {
   const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState([])
    const params = useParams()
    const cable = useRef()

useEffect(() => {
if (!cable.current) {
    cable.current = createConsumer("ws://localhost:3000/cable")
 }
    const paramsToSend = {
       Channel: "ChatChannel",
        id: chatId
}

const handlers = {
    received(data){
        setMessages([...messages, data])
    },

    connected(){
      console.log("connected")
    },

    disconnected(){
      console.log("disconnected")
      cable.current = null
    }
}

// function handleSubmit(e) {
//     e.preventDefault()
//     if (newMessage !== '') {
//       setNewMessage('')
//       const token =localStorage.getItem('token') 
//       fetch('http://localhost:3000/messages', {
//         method: 'POST',
//         headers: {
//           'content-type': 'application/json',
//             Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           content: newMessage,
//             conversation_id: params.id,
//             user_id: currentUser.id,
//         }),
//       })
//     }
// }


const subscription = cable.current.subscriptions.create(paramsToSend, handlers)

return function cleanup() {
    console.log("unsubbing from ", params.id)
    cable.current = null
    subscription.unsubscribe()
}

}, [params.id, messages])

  return (
    <Modal
      open={true}
      onClose={closeChatModal}
      trigger={<Button>Scrolling Content Modal</Button>}>
        
      <Modal.Header>Chat</Modal.Header>
      <Modal.Content>
        <Modal.Description>
            <div>
              test 
            </div>

          {/* <Image
            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          /> */}

         </Modal.Description>
        </Modal.Content>
       <Modal.Actions>
      </Modal.Actions>
    </Modal>
  )
}

export default ChatModal;
