import { Button, Icon, Image, Modal } from 'semantic-ui-react'
import React from 'react';
import {useState, useEffect} from 'react'

function ModalComponent({bookAppointment}) {
    const [open, setOpen] = React.useState(false)
    const [appoDate, setAppoDate] = useState ("")
    const [appoTime, setAppoTime] = useState ("")
    const [appoLocation, setAppoLocation] = useState ("")

    return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>Make an Appointment</Button>}
    >
      <Modal.Header>Profile Picture</Modal.Header>
      <Modal.Content image scrolling>
        {/* <Image size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' wrapped /> */}

        <Modal.Description>
          <p>
            Please choose from the following locations:
          </p>

          <div className="field">
                  <label id="label-id"className="label">date</label>
                  <div className="control">
                      <input className="input" type="date" placeholder="Birthday" onChange={(e) => setAppoDate(e.target.value)}></input>
                    </div>
                 </div>    

                <div className="field">
                  <label id="label-id"className="label">time</label>
                  <div className="control">
                      <input className="input" type="time" placeholder="Birthday" onChange={(e) => setAppoTime(e.target.value)}></input>
                    </div>
                </div>

                    <label id="label-id"className="label">Location</label>
                    <select onChange={(e) => setAppoLocation(e.target.value)}
                        name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
{/* 
          <Image
            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          /> */}
    </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button 
        onClick={()=> bookAppointment(appoLocation, appoDate, appoTime)} 
        primary
        >
          Book it <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
      
    )
  }
  
  export default ModalComponent;
  