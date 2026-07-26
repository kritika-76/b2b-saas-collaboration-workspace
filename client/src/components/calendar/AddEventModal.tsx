import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import type { CalendarEvent } from "../../constants/calendarEvents";
interface AddEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (event: {
    title: string;
    date: string;
    time: string;
    color: string;
  }) => void;
  editingEvent?: CalendarEvent | null;
}

const colors = [
  "#3B82F6",
  "#10B981",
  "#F97316",
  "#EF4444",
  "#8B5CF6",
  "#EC4899",
];

const AddEventModal = ({
  isOpen,
  onClose,
  onSave,
  editingEvent,
}: AddEventModalProps) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [color, setColor] = useState(colors[0]);

  useEffect(() => {
    if (editingEvent) {
      setTitle(editingEvent.title);
      setDate(
        new Date(editingEvent.date)
          .toISOString()
          .split("T")[0]
      );

      const parsedTime = new Date(
        `1970-01-01 ${editingEvent.time}`
      );

      const hours = parsedTime
        .getHours()
        .toString()
        .padStart(2, "0");

      const minutes = parsedTime
        .getMinutes()
        .toString()
        .padStart(2, "0");

      setTime(`${hours}:${minutes}`);
      setColor(editingEvent.color);
    } else {
      setTitle("");
      setDate("");
      setTime("");
      setColor(colors[0]);
    }
  }, [editingEvent, isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (!title || !date || !time) {
      alert("Please fill all fields.");
      return;
    }

    const formattedDate = new Date(date).toLocaleDateString(
      "en-US",
      {
        month: "long",
        day: "numeric",
        year: "numeric",
      }
    );

    const formattedTime = new Date(
      `1970-01-01T${time}`
    ).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    onSave({
      title,
      date: formattedDate,
      time: formattedTime,
      color,
    });

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="event-modal">

        <div className="modal-header">
          <h2>
            {editingEvent ? "Edit Event" : "Add Event"}
          </h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            <FiX />
          </button>
        </div>

        <div className="modal-body">

          <label>Event Title</label>

          <input
            type="text"
            value={title}
            placeholder="Enter event title"
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          <label>Date</label>

          <input
            type="date"
            value={date}
            onChange={(e) =>
              setDate(e.target.value)
            }
          />

          <label>Time</label>

          <input
            type="time"
            value={time}
            onChange={(e) =>
              setTime(e.target.value)
            }
          />

          <label>Event Color</label>

          <div className="color-picker">
            {colors.map((item) => (
              <button
                key={item}
                type="button"
                className={`color-circle ${
                  color === item
                    ? "active-color"
                    : ""
                }`}
                style={{
                  background: item,
                }}
                onClick={() =>
                  setColor(item)
                }
              />
            ))}
          </div>

        </div>

        <div className="modal-footer">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="save-btn"
            onClick={handleSave}
          >
            {editingEvent
              ? "Update Event"
              : "Save Event"}
          </button>

        </div>

      </div>
    </div>
  );
};

export default AddEventModal;