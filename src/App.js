import "./App.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import "./calendar.css";

function App() {
  const handleDateSelect = (e) => {
    console.log("Please enter a new title for your event");
  };

  return (
    <div className="App">
      <div className="cal">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          dateClick={handleDateSelect}
          weekends={false}
          eventColor="#378006"
          backgroundColor="#000565"
          events={[
            { title: "1 Available", date: "2021-07-01" },
            { title: "2 Available", date: "2021-07-02" },
            { title: "3 Avalable", date: "2021-06-25" },
          ]}
        />
      </div>
      <div className="side-bar">
        <h2>Available Slots</h2>
      </div>
    </div>
  );
}

export default App;
