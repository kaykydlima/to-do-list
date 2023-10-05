import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { ToDoContext } from "../../contexts/toDoContext";
import { useContext } from "react";

import ToDoForm from '../ToDoForm'

import styles from './Calendar.module.scss'

function Calendar() {
  const { tasks } = useContext(ToDoContext)

  const events = tasks.map(task => ({
   title: task.name,
   start: task.initialDate,
   end: task.finalDate 
  }))

  const buttonNames = {
    today: 'Hoje',
    month: 'Mês',
    week: 'Semana',
    day: 'Dia'
  }

  return (
    <div className={styles.calendarContainer}>
      <ToDoForm />
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
        locale='pt-br'
        buttonText={buttonNames}

        eventMouseEnter={(info) => info.el.style.cursor = 'pointer'}
      />

    </div>
  );
}

export default Calendar;