import Seo from "./Seo";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";


function Calendar() {
  return (
    <>
      <Seo title="Calendar"></Seo>
      <FullCalendar
        initialView="dayGridMonth"
        plugins={[dayGridPlugin]}
      />
    </>
  );
}

export default Calendar;
