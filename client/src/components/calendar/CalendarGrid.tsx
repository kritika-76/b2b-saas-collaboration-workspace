import CalendarCell from "./CalendarCell";
import type { CalendarEvent } from "../../constants/calendarEvents";
interface CalendarGridProps {
  currentDate: Date;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  events: CalendarEvent[];
}

const CalendarGrid = ({
  currentDate,
  selectedDate,
  setSelectedDate,
  events,
}: CalendarGridProps) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const startDay = firstDay.getDay();

  const daysInMonth = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const prevMonthDays = new Date(
    year,
    month,
    0
  ).getDate();

  const calendarDays: Date[] = [];

  // Previous Month
  for (let i = startDay - 1; i >= 0; i--) {
    calendarDays.push(
      new Date(
        year,
        month - 1,
        prevMonthDays - i
      )
    );
  }

  // Current Month
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(
      new Date(year, month, i)
    );
  }

  // Next Month
  while (calendarDays.length < 42) {
    const day =
      calendarDays.length -
      (startDay + daysInMonth) +
      1;

    calendarDays.push(
      new Date(year, month + 1, day)
    );
  }

  const weekdays = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  return (
    <div className="calendar-container">
      <div className="weekdays">
        {weekdays.map((day) => (
          <div
            key={day}
            className="weekday"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="calendar-grid">
        {calendarDays.map((date, index) => (
          <CalendarCell
            key={index}
            date={date}
            currentMonth={month}
            selectedDate={selectedDate}
            onSelect={setSelectedDate}
            events={events}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;