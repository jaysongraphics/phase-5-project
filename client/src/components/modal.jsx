import { Button, Icon, Image, Modal } from 'semantic-ui-react'
import React from 'react';
import {useState, useEffect} from 'react'

function ModalComponent({bookAppointment, currentUser}) {
    const [open, setOpen] = React.useState(false)
    const [appoDate, setAppoDate] = useState (currentUser.appointments.appointment_date)
    const [appoTime, setAppoTime] = useState (currentUser.appointments.appointment_time)
    const [appoLocation, setAppoLocation] = useState (currentUser.appointments.location)

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
                      <input 
                      value={appoDate}
                      className="input" type="date" placeholder="Birthday" onChange={(e) => setAppoDate(e.target.value)}></input>
                    </div>
                 </div>    

                <div className="field">
                  <label id="label-id"className="label">time</label>
                  <div className="control">
                      <input 
                      value={appoTime}
                      className="input" type="time" placeholder="Birthday" onChange={(e) => setAppoTime(e.target.value)}></input>
                    </div>
                </div>

                    <label id="label-id"className="label">Location</label>
                    <select onChange={(e) => setAppoLocation(e.target.value)}
                        name="hospitals" id="hospital">
                        <option 
                          value="Holy Name Medical Center">Holy Name Medical Center
                        </option>
                        <option 
                         value="Columbia University Medical Center">Columbia University Medical Center
                         </option>
                        <option 
                         value="Mount Sinai West">Mount Sinai West
                         </option>
                          <option 
                           value="Montefiore Medical Center">Montefiore Medical Center
                          </option>
                          <option 
                           value="New York Presbyterian Hospital">New York Presbyterian Hospital
                          </option>
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
        onClick={()=> bookAppointment(appoDate, appoTime, appoLocation)} 
        primary
        >
          Book it <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
      
    )
  }
  
  export default ModalComponent;
  