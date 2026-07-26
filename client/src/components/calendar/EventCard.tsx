import { FiClock, FiEdit2, FiTrash2 } from "react-icons/fi";
import type { CalendarEvent } from "../../constants/calendarEvents";
interface EventCardProps {
  event: CalendarEvent;
  onClick?: (event: CalendarEvent) => void;
  onEdit?: (event: CalendarEvent) => void;
  onDelete?: (id: number) => void;
}

const EventCard = ({
  event,
  onClick,
  onEdit,
  onDelete,
}: EventCardProps) => {
  return (
    <div
      className="event-card"
      onClick={() => onClick?.(event)}
    >
      <div
        className="event-color"
        style={{
          background: event.color,
        }}
      />

      <div className="event-content">
        <div className="event-top">
          <h4>{event.title}</h4>

          <div
            className="event-actions"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="icon-btn"
              onClick={() => onEdit?.(event)}
            >
              <FiEdit2 />
            </button>

            <button
              className="icon-btn delete-btn"
              onClick={() =>
                onDelete?.(event.id)
              }
            >
              <FiTrash2 />
            </button>
          </div>
        </div>

        <p>{event.date}</p>

        <span className="event-time">
          <FiClock />
          {event.time}
        </span>
      </div>
    </div>
  );
};

export default EventCard;