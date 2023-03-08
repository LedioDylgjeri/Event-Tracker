import React, {Fragment, useState} from 'react'

const InputEvent = () => {
  
  let newDate = new Date().toJSON().slice(0,10);

  const [name, setName] = useState('')
  const [e_date, setDate] = useState(newDate)
  const [location, setLocation] = useState('')

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const body = {name, e_date, location }
      const response = await fetch('http://localhost:5001/event', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      })
      console.log(response);
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <Fragment>
      <h1 className="text-center mt-5">Event Tracker</h1>
      <form onSubmit={onSubmitForm}>
        <label for="event-input" className="form-label mt-5">
          Event Name
        </label>
        <input
          type="text"
          className="form-control"
          id="event-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label for="event-date" className="form-label mt-4">
          Event Date
        </label>
        <input
          type="date"
          className="form-control"
          id="event-date"
          value={e_date}
          onChange={(e) => setDate(e.target.value)}
          />
        <label for="event-location" className="form-label mt-4">
          Event Location
        </label>
        <input
          type="text"
          className="form-control"
          id="location-location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className="btn btn-success mt-2">Add</button>
      </form>
    </Fragment>
  );
}


export default InputEvent