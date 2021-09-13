// import logo from '../images/LOGOGFINALBLACK.png'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'
import React from 'react';
import {useState} from 'react'
import clumsy from '../images/clumsy.png'


function Profilemodal({submitProfileUpdate, currentUser, setProfilePic, profilePic}) {
    const [open, setOpen] = React.useState(false)
    const [firstName, setFirstName] = useState (currentUser.first_name)
    const [lastName, setLastName] = useState (currentUser.last_name)
    const [birthday, setBirthday] = useState ("")
    const [username, setUsername] = useState (currentUser.username)
    const [email, setEmail] = useState (currentUser.email)

return (
    <Modal
      id="modal-profile"
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button className='button is-danger is-rounded'>Edit Profile</Button>}>
<br/>
<br/>
      <Modal.Header>Update your profile information</Modal.Header>
<br/>
<br/>
      <Modal.Content image scrolling>
        <Modal.Description className="modaldesp">
<div className="profile-img-div">
  <label id="label-id-img"className="label">Image</label>
  <div className="file is-danger has-name is-boxed">
   <label className="file-label">
        <input className="file-input" type="file" onChange={(e) => setProfilePic(e.target.files[0])} name="profilepic" />
          <i className="fas fa-cloud-upload-alt"></i>
            <span className="file-cta">
            <i className="cloud upload icon"></i>
              <span className="file-label">
                Choose File
              </span>
            </span>
            <span className="file-name">
                profile-pic.jpg
            </span>
      </label>
  </div>
  <br/>
</div>              
                <div className="field">
                  <label id="label-id"className="label">FirstName</label>
                    <div className="control">
                          <input value={firstName} className="input" 
                          type="text" placeholder="firstName" 
                          onChange={(e) => setFirstName(e.target.value)}>
                          </input>
                      </div>
                </div>

                <div className="field">
                  <label id="label-id"className="label">Last Name</label>
                      <div className="control">
                          <input value={lastName} className="input" 
                          type="text" placeholder="lastName" 
                          onChange={(e) => setLastName(e.target.value)}>
                          </input>
                      </div>
                </div>

                <div className="field">
                  <label id="label-id"className="label">Birthday</label>
                      <div className="control">
                          <input 
                            value={birthday}
                            className="input" type="date" placeholder="Birthday" 
                            onChange={(e) => setBirthday(e.target.value)}>
                            </input>
                        </div>
                </div>

                <div className="field">
                  <label id="label-id"className="label">Username</label>
                      <div className="control">
                          <input value={username}
                            className="input" type="text" placeholder="username" 
                            onChange={(e) => setUsername(e.target.value)}> 
                            </input>
                        </div>
                  </div>

                <div className="field">
                  <label id="label-id"className="label">Email</label>
                    <div className="control">
                        <input value={email} className="input" type="text" 
                        placeholder="email" onChange={(e) => setEmail(e.target.value)}>
                        </input>
                    </div>
                </div>
          <br/>

      <Image id="clumsy-img"size='medium' src={clumsy} style={{ marginBottom: 10 }}/> 

           </Modal.Description>
        </Modal.Content>
      <Modal.Actions>
        <Button className='button is-danger is-light' 
          onClick={()=> submitProfileUpdate(profilePic, firstName, lastName, birthday, username, email)} primary>Update <Icon name='chevron right' />
        </Button>

      </Modal.Actions>
    </Modal>
      
    )
  }
  
export default Profilemodal;