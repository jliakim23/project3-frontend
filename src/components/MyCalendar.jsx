import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop"
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)
const DnDCalendar = withDragAndDrop(Calendar);

class App extends React.Component {
  state = {
    events: [{ start: new Date(), end: new Date(), title: "Sample Event" }]
  };

  handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title)
      this.setState(prevState => ({
        events: [...prevState.events, { start, end, title }],
      }));
  }

  onEventResize = (data) => {
    const { start, end } = data.size;
    this.setState((state) => {
      const nextEvents = state.events.map(event => {
        return (event.title === data.event.title) ? { ...event, start, end } : event;
      });
      return { events: nextEvents };
    });
  };

  onEventDrop = (data) => {
    const { start, end } = data;
    this.setState((state) => {
      const nextEvents = state.events.map(event => {
        return (event.title === data.event.title) ? { ...event, start, end } : event;
      });
      return { events: nextEvents };
    });
  };

  onSelectSlot = (slotInfo) => {
    this.handleSelect(slotInfo);
  }

  render() {
    return (
      <div className="App">
        <DnDCalendar
          selectable
          defaultDate={moment().toDate()}
          defaultView="month"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          onSelectSlot={this.onSelectSlot}
          resizable
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default App;