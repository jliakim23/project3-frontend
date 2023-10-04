import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { useState } from "react";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const MyCalendar = ({ data }) => {
  const formattedData = data.map((event) => ({
    id: event.id,
    title: event.title,
    start: new Date(event.startDate),
    end: new Date(event.endDate),
  }));

  const [events, setEvents] = useState(formattedData);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt("New Event name");
    if (title) {
      setEvents((prevEvents) => [...prevEvents, { start, end, title }]);
    }
  };

  const onEventResize = (data) => {
    const { start, end } = data;
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.title === data.event.title ? { ...event, start, end } : event
      )
    );
  };

  const onEventDrop = (data) => {
    const { start, end } = data;
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.title === data.event.title ? { ...event, start, end } : event
      )
    );
  };

  return (
    <div className="My">
      <DnDCalendar
        // startAccessor="start"
        // endAccessor="end"
        selectable
        defaultDate={moment().toDate()}
        defaultView="month"
        events={events}
        localizer={localizer}
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        onSelectSlot={handleSelect}
        resizable
        style={{ height: "100vh" }}
      />
    </div>
  );
};

export default MyCalendar;
