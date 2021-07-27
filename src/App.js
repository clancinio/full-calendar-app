import "./App.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import "./calendar.css";

function App() {
  const handleDateSelect = (selectInfo) => {
    //alert("You have clicked on a date");

    let calendarApi = selectInfo.dateStr;

    console.log(calendarApi);

    //calendarApi.unselect() // clear date selection
  };

  const handleDateClick = (info) => {
    const view = info;

    console.log(view);
  };

  // MOCK RESPOSNSE
  const response = [
    { id: 1, slot_id: 1, booked_by:"Jamie", date: "2021-07-28", display: "background"},
    { id: 1, slot_id: 1, booked_by:"Jamie", date: "2021-07-29"  },
    { id: 1, slot_id: 1, booked_by:"Jamie", date:  "2021-07-30" },
    { id: 1, slot_id: 1, booked_by:"Jamie", date:  "2021-08-02" },
    { id: 1, slot_id: 1, booked_by:"Jamie", date:  "2021-08-05" },
    { id: 1, slot_id: 1, booked_by:"Jamie", date:  "2021-08-06" },
    { id: 1, slot_id: 1, booked_by:"Jamie", date:  "2021-08-18" },
  ];

 // MAP THE RESPONSE TO EVENTS PROP
  const events = response.map(x => (
    {title: "1 Available", date: x.date})
    )

  return (
    <div className="App">
      <div className="cal">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          select={handleDateSelect}
          dateClick={handleDateClick}
          weekends={false}
          eventColor="#378006"
          events={events}
        />
      </div>
      <div className="side-bar">
        <h2>Available Slots</h2>
      </div>
    </div>
  );
}

export default App;
