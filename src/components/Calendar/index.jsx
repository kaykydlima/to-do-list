import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { ToDoContext } from "../../contexts/toDoContext";
import { useContext } from "react";

function Calendar() {
  const {tasks} = useContext(ToDoContext)

  const events = tasks.map(task => ({
   title: task.name,
   start: task.initialDate,
   end: task.finalDate 
  }))

  console.log(tasks)

  return (
    <div>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", 
        }}
        height={"90vh"}
        events={events}
      />

    </div>
  );
}

export default Calendar;