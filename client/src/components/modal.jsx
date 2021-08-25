import { Button, Icon, Image, Modal } from 'semantic-ui-react'
import React from 'react';
import {useState} from 'react'
import logo from '../images/LOGOGFINALBLACK.png'
import clumsy from '../images/clumsy.png'

function ModalComponent({bookAppointment, currentUser}) {
    const [open, setOpen] = React.useState(false)
    const [appoDate, setAppoDate] = useState ("")
    const [appoTime, setAppoTime] = useState ("")
    const [appoLocation, setAppoLocation] = useState ("")

return (
    <Modal
      id="modal-appo"
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button className='button is-danger is-light' id="modalApp">Make an Appointment</Button>}>
    <br/>
    <br/>
      <Modal.Header>Book your next appointment</Modal.Header>
    <br/>
    <br/>
      <Modal.Content image scrolling>
        <Image size='small' src={logo} wrapped />
      <Modal.Description>

          <div className="field">
              <label id="label-id"className="label">Date</label>
                <div className="control">
                  <input 
                      value={appoDate}
                      className="ui input" type="date" placeholder="Birthday" 
                      onChange={(e) => setAppoDate(e.target.value)}>
                  </input>
                </div>
          </div>    

                <div className="field">
                  <label id="label-id"className="label">Time</label>
                  <div className="control">
                    <input 
                      value={appoTime}
                      className="ui input" type="time" placeholder="Birthday" onChange={(e) => setAppoTime(e.target.value)}>
                     </input>
                  </div>
                </div>
                <br/>
                  <p className="field">
                    Please choose from the following locations:
                  </p>
                    <label id="label-id"className="field"><b>Location</b></label>
          <br/>
          <br/>
            <select id="field" className="ui selection dropdown" 
            onChange={(e) => setAppoLocation(e.target.value)}
            name="hospitals">
                  <option id="field"
                    value="All">All
                  </option>

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
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          <Image id="therea-clumsy"size='large' src={clumsy} style={{ marginBottom: 10 }}/>
              </Modal.Description>
          </Modal.Content>
      <Modal.Actions>
            <Button className='button is-danger is-light'
               onClick={()=> bookAppointment(appoDate, appoTime, appoLocation)} primary>
                Book it <Icon name='chevron right'/>
            </Button>
      </Modal.Actions>
    </Modal>
    )
  }
  
export default ModalComponent;