import "./events.css";
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Modal from 'react-modal';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
{/* <div data-tockify-component="calendar" data-tockify-calendar="ipcphilly"></div> */}


const Events = () => {

  const [events, setEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formTitle, setFormTitle] = useState('');
  const [formStart, setFormStart] = useState('');
  const [formEnd, setFormEnd] = useState('');

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setFormTitle(event.title);
    setFormStart(event.start);
    setFormEnd(event.end);
    setModalIsOpen(true);
  };

  const handleCreateEvent = () => {
    const newEvent = {
      title: formTitle,
      start: new Date(formStart),
      end: new Date(formEnd),
    };
    setEvents([...events, newEvent]);
    setModalIsOpen(false);
  };

  const handleUpdateEvent = () => {
    const updatedEvent = {
      ...selectedEvent,
      title: formTitle,
      start: new Date(formStart),
      end: new Date(formEnd),
    };
    const updatedEvents = events.map((event) =>
      event === selectedEvent ? updatedEvent : event
    );
    setEvents(updatedEvents);
    setModalIsOpen(false);
  };

  const handleDeleteEvent = () => {
    const updatedEvents = events.filter((event) => event !== selectedEvent);
    setEvents(updatedEvents);
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Add Event</button>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectEvent={handleSelectEvent}
        style={{ height: 500 }}
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <h2>{selectedEvent ? 'Edit Event' : 'Create Event'}</h2>
        <form>
          <label>Title:</label>
          <input
            type="text"
            value={formTitle}
            onChange={(e) => setFormTitle(e.target.value)}
          />
          <label>Start:</label>
          <input
            type="datetime-local"
            value={formStart}
            onChange={(e) => setFormStart(e.target.value)}
          />
          <label>End:</label>
          <input
            type="datetime-local"
            value={formEnd}
            onChange={(e) => setFormEnd(e.target.value)}
          />
          <button
            type="button"
            onClick={selectedEvent ? handleUpdateEvent : handleCreateEvent}
          >
            {selectedEvent ? 'Update Event' : 'Create Event'}
          </button>
          {selectedEvent && (
            <button type="button" onClick={handleDeleteEvent}>
              Delete Event
            </button>
          )}
        </form>
      </Modal>
    </div>
    
  );
};

export default Events;