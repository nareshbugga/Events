// Write your code here
import {Component} from 'react'
import './index.css'

class ActiveEventRegistrationDetails extends Component {
  YetToRegister = () => (
    <div className="active-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="image"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-button ">
        Register Here
      </button>
    </div>
  )

  RegisteredView = () => (
    <div className="active-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt="registered"
        className="image"
      />
      <h1 className="heading">You have already registered for the event</h1>
    </div>
  )

  RegistrationsClosedView = () => (
    <div className="active-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt="registrations closed"
        className="image"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  render() {
    const {activeStatus} = this.props
    switch (activeStatus) {
      case 'YET_TO_REGISTER':
        return this.YetToRegister()
      case 'REGISTERED':
        return this.RegisteredView()
      case 'REGISTRATIONS_CLOSED':
        return this.RegistrationsClosedView()
      default:
        return null
    }
  }
}
export default ActiveEventRegistrationDetails
