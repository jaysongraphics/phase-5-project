import { Button, Icon, Image, Modal } from 'semantic-ui-react'
import React from 'react';
import {useState} from 'react'
import logo from '../images/LOGOGFINALBLACK.png'
import clumsy from '../images/clumsy.png'


function Profilemodal({submitProfileUpdate, currentUser}) {
    const [open, setOpen] = React.useState(false)
    const [image, setImage] = useState (currentUser.image)
    const [firstName, setFirstName] = useState (currentUser.first_name)
    const [lastName, setLastName] = useState (currentUser.last_name)
    const [birthday, setBirthday] = useState (currentUser.birthday)
    const [username, setUsername] = useState (currentUser.username)
    const [email, setEmail] = useState (currentUser.email)

    return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button className='button is-danger is-rounded'>Update Profile</Button>}>
<br/>
<br/>
      <Modal.Header>Update your profile information</Modal.Header>
<br/>
<br/>
      <Modal.Content image scrolling>

       <Image size='small' src={logo} wrapped />

        <Modal.Description>

                <div className="field">
                    <label id="label-id"className="label">image</label>
                      <div className="control">
                          <input value={image} className="input" 
                          type="text" placeholder="image" 
                          onChange={(e) => setImage(e.target.value)}>
                          </input>
                      </div>
                </div>    

                <div className="field">
                  <label id="label-id"className="label">firstName</label>
                    <div className="control">
                          <input value={firstName} className="input" 
                          type="text" placeholder="firstName" 
                          onChange={(e) => setFirstName(e.target.value)}>
                          </input>
                      </div>
                </div>

                <div className="field">
                  <label id="label-id"className="label">lastName</label>
                      <div className="control">
                          <input value={lastName} className="input" 
                          type="text" placeholder="lastName" 
                          onChange={(e) => setLastName(e.target.value)}>
                          </input>
                      </div>
                </div>

                <div className="field">
                  <label id="label-id"className="label">birthday</label>
                      <div className="control">
                          <input 
                            value={birthday}
                            className="input" type="text" placeholder="Birthday" 
                            onChange={(e) => setBirthday(e.target.value)}>
                            </input>
                        </div>
                </div>

                <div className="field">
                  <label id="label-id"className="label">username</label>
                      <div className="control">
                          <input value={username}
                            className="input" type="text" placeholder="username" 
                            onChange={(e) => setUsername(e.target.value)}> 
                            </input>
                        </div>
                  </div>

                <div className="field">
                  <label id="label-id"className="label">email</label>
                    <div className="control">
                        <input value={email} className="input" type="text" 
                        placeholder="email" onChange={(e) => setEmail(e.target.value)}>
                        </input>
                    </div>
                </div>
          <br/>

      <Image size='large' src={clumsy} style={{ marginBottom: 10 }}/> 

           </Modal.Description>
        </Modal.Content>
      <Modal.Actions>

        <Button className='button is-danger is-light' 
          onClick={()=> submitProfileUpdate(image, firstName, lastName, birthday, username, email)} primary>Update <Icon name='chevron right' />
        </Button>

      </Modal.Actions>
    </Modal>
      
    )
  }
  
export default Profilemodal;