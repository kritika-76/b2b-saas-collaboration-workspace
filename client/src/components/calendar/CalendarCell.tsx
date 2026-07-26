import type { CalendarEvent } from "../../constants/calendarEvents";
interface CalendarCellProps {
  date: Date;
  currentMonth: number;
  selectedDate: Date;
  onSelect: (date: Date) => void;
  events: CalendarEvent[];
}

const CalendarCell = ({
  date,
  currentMonth,
  selectedDate,
  onSelect,
  events,
}: CalendarCellProps) => {
  const today = new Date();

  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  const isSelected =
    date.getDate() === selectedDate.getDate() &&
    date.getMonth() === selectedDate.getMonth() &&
    date.getFullYear() === selectedDate.getFullYear();

  const isCurrentMonth =
    date.getMonth() === currentMonth;

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

const dayEvents = events.filter(
  (event) => event.date === formattedDate
);

  return (
    <div
      className={`calendar-cell
      ${!isCurrentMonth ? "other-month" : ""}
      ${isToday ? "today" : ""}
      ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(date)}
    >
      <div className="calendar-date">
        {date.getDate()}
      </div>

      <div className="calendar-events">
        {dayEvents.slice(0, 2).map((event) => (
          <div
            key={event.id}
            className="event-dot"
            style={{
              backgroundColor: event.color,
            }}
          />
        ))}

        {dayEvents.length > 2 && (
          <span className="more-events">
            +{dayEvents.length - 2}
          </span>
        )}
      </div>
    </div>
  );
};

export default CalendarCell;