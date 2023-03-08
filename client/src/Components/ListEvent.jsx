import React, { Fragment, useEffect, useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'

const ListEvent = () => {
  const [events, setEvents] = useState([])

  const getEvents = async () => {
    try {
      const response = await fetch("http://localhost:5001/event");
      const dataReceived = await response.json()
      setEvents(dataReceived)
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getEvents()
  }, [])

  console.log(events);

  return (
    <Fragment>
      <h1 className="text-center mt-5">Upcoming Events</h1>
      <table class="table table-success table-striped text-center mt-2">
        <thead>
          <tr>
            <th scope="col">Event Name</th>
            <th scope="col">Date</th>
            <th scope="col">Location</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr>
              <td>{event.name}</td>
              <td>{event.e_date.slice(0, 10)}</td>
              <td>{event.location}</td>
              <td>
                <AiOutlineEdit />
              </td>
              <td>
                <button className='btn btn-danger'>
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}


export default ListEvent