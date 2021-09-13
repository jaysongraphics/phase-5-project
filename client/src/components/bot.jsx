import { Button, Modal } from 'semantic-ui-react'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import '../css/ChatBot.css'
import logo from '../images/LOGOGFINALBLACK.png'
import 'semantic-ui-css/semantic.min.css';

const Bot = ({currentUser}) => {
    const [open, setOpen] = React.useState(false)
    const [userInput, setUserInput] = useState('')
    const [userHistory, setUserHistory] = useState([])
    const [botHistory, setBotHistory] = useState([])

    const onKeyUp = (e) => {
        if(e.key === "Enter"){
            setUserHistory([e.target.value, ...userHistory])
            setUserInput('')
            matchReply(e.target.value)
        }
    }

    const handleChange = (e) => setUserInput(e.target.value)

  const matchReply = (userInput) => {
    const trigger = [
        ["hola", "hi", "hey", "hello", "Bonjour", "Nǐ hǎo", "Salve", "Olá", "Namaste", "Grüß Gott", "Konnichiwa"],
        ["how are you", "how are things", "how you doing", "how are you feeling", "how is it going?"],
        ["what is going on", "what is up", "klk", "what's good", "what's up"],
        ["fine","happy", "good", "amazing", "fantastic", "great", "well", "awesome", "i'm fine", "im fine"],
        ["bad", "bored", "tired", "sad", "angry", "awful", "annoy", "lonely", ],
        ["thanks", "thank you", "Gracias"],
        ["bye", "good bye", "goodbye", "adios", "bye bye"]
    ];
        
    const reply = [
        ["Hola!","Hello!", "Hi!", "Happy you are here, how may I help you?", "Hey, How can I assist you today?"],
        ["I'm doing good... how are you?", "I feel fine, how is it going for you?", "I am happy, how are you?"],
        ["Nothing much", "Exciting things!", "I'm happy to see you!"],
        ["Glad to hear it", "Yayyy!! That's the spirit!", "Good to know!", "Awesome!", "I like the sound of that!", "A.M.A.Z.I.N.G", "super!", "whoo hoo!!", "I love hearing that!"],
        ["There is always a rainbow after the rain!", "You do not find the happy life. You make it.", "There are two ways of spreading light: to be the candle or the mirror that reflects it.", "Life changes very quickly, in a very positive way, if you let it."],
        ["You're welcome", "No problem", "It's my pleasure!", "No hay problema!", "De nada!"],
        ["Goodbye, it was a nice talk", "See you soon!", "Adios!", "Have a nice day, bye!"]
    ];
    
    const alternative = ["I see, continue...", "Go on...","Try again please?", "I'm listening...", "What was that?"];

    let botMsg = generateReply(trigger, reply, userInput)

    if(!botMsg){
        botMsg = alternative[Math.floor(Math.random()*alternative.length)]
    }

    setBotHistory([botMsg, ...botHistory])
}

    const generateReply = (trigger, reply, text) => {
        let item;
        let items;
        for (let x = 0; x < trigger.length; x++) {
            for (let y = 0; y < reply.length; y++) {
                if (text.includes(trigger[x][y])) {
                    items = reply[x];
                    item = items[Math.floor(Math.random() * items.length)];
                }
            }
        }
        return item;
    }

  return (
    <Modal
      id="modal-trigger"
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button id="bot-button" className="button is-rounded"><i className="user icon"></i></Button>}>
        
      <Modal.Header></Modal.Header>
      <Modal.Content>
        <Modal.Description>
            <div className='chatbot-logo'>
                <img className='chatbot-logoo'
                    style={{width: 200, height: 200}}
                    src={logo}
                    alt='bot-pic'/>  
            </div> 

            <div className='chatbot-card'>    
            <div className='human-input'>
                <InputGroup className="mb-3">

                    <Form.Control
                        id="chat-input"
                        className="ui input"
                        type="text" 
                        placeholder="Ask me anything!"
                        value={userInput}
                        onChange={handleChange}
                        onKeyPress={onKeyUp}/>
                </InputGroup>
            </div>
            <div className='chatbox'>
                {userHistory.map((userReply, indx) => 
                    <div className='conversation-box'>
                        <div id='bot-reply'>
                            <h3 className='text-chat'>SelfBot: {botHistory[indx]}</h3>
                        </div>
                    <div className='text-chat' id='user-input'>
                    <img className="ui avatar image" 
                        alt={currentUser.first_name}
                        style={{width: 30, height: 30}}
                        src={currentUser.avatar.url}/>{userReply}
                </div>
            </div>
         )}        
        </div>  
    </div>

         </Modal.Description>
        </Modal.Content>
       <Modal.Actions>
  
      </Modal.Actions>
    </Modal>
  )
}

export default Bot;
