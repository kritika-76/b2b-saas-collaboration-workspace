import { FiCalendar, FiClock, FiX } from "react-icons/fi";
import type { CalendarEvent } from "../../constants/calendarEvents";
interface EventDetailsModalProps {
  isOpen: boolean;
  event: CalendarEvent | null;
  onClose: () => void;
  onEdit: (event: CalendarEvent) => void;
  onDelete: (id: number) => void;
}

const EventDetailsModal = ({
  isOpen,
  event,
  onClose,
  onEdit,
  onDelete,
}: EventDetailsModalProps) => {
  if (!isOpen || !event) return null;

  return (
    <div className="modal-overlay">
      <div className="details-modal">

        <div className="details-header">
          <div className="details-title">
            <span
              className="event-badge"
              style={{ background: event.color }}
            />

            <h2>{event.title}</h2>
          </div>

          <button
            className="close-btn"
            onClick={onClose}
          >
            <FiX />
          </button>
        </div>

        <div className="details-body">

          <div className="detail-row">
            <FiCalendar />
            <span>{event.date}</span>
          </div>

          <div className="detail-row">
            <FiClock />
            <span>{event.time}</span>
          </div>

          <div className="detail-description">
            <h4>Description</h4>

            <p>
              No description available.
              <br />
              This section is ready for backend integration.
            </p>
          </div>

        </div>

        <div className="details-footer">

          <button
            className="edit-btn"
            onClick={() => {
              onEdit(event);
              onClose();
            }}
          >
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={() => {
              onDelete(event.id);
              onClose();
            }}
          >
            Delete
          </button>

        </div>

      </div>
    </div>
  );
};

export default EventDetailsModal;