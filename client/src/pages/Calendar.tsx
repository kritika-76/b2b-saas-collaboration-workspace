import { useEffect, useState } from "react";
import type { CalendarEvent } from "../constants/calendarEvents";
import { initialCalendarEvents } from "../constants/calendarEvents";

import CalendarHeader from "../components/calendar/CalendarHeader";
import CalendarGrid from "../components/calendar/CalendarGrid";
import UpcomingEvents from "../components/calendar/UpcomingEvents";
import AddEventModal from "../components/calendar/AddEventModal";
import EventDetailsModal from "../components/calendar/EventDetailsModal";
import Toast from "../components/common/Toast";

import "../styles/calendar.css";

const STORAGE_KEY = "worksphere-calendar-events";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [events, setEvents] = useState<CalendarEvent[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return initialCalendarEvents;
      }
    }

    return initialCalendarEvents;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingEvent, setEditingEvent] =
    useState<CalendarEvent | null>(null);

  const [selectedEvent, setSelectedEvent] =
    useState<CalendarEvent | null>(null);

  const [isDetailsOpen, setIsDetailsOpen] =
    useState(false);

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(events)
    );
  }, [events]);

  const showToast = (
    message: string,
    type: "success" | "error" = "success"
  ) => {
    setToast({
      message,
      type,
    });

    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        1
      )
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        1
      )
    );
  };

  const handleAddClick = () => {
    setEditingEvent(null);
    setIsModalOpen(true);
  };

  const handleSelectEvent = (
    event: CalendarEvent
  ) => {
    setSelectedEvent(event);
    setIsDetailsOpen(true);
  };

  const handleEditEvent = (
    event: CalendarEvent
  ) => {
    setEditingEvent(event);
    setIsModalOpen(true);
  };

    const handleSaveEvent = (event: {
    title: string;
    date: string;
    time: string;
    color: string;
  }) => {
    if (editingEvent) {
      setEvents((prev) =>
        prev.map((item) =>
          item.id === editingEvent.id
            ? { ...item, ...event }
            : item
        )
      );

      showToast("Event updated successfully.");
      setEditingEvent(null);
    } else {
      const newEvent: CalendarEvent = {
        id: Date.now(),
        ...event,
      };

      setEvents((prev) => [...prev, newEvent]);

      showToast("Event added successfully.");
    }

    setIsModalOpen(false);
  };

  const handleDeleteEvent = (id: number) => {
    const confirmed = window.confirm(
      "Delete this event?"
    );

    if (!confirmed) return;

    setEvents((prev) =>
      prev.filter((event) => event.id !== id)
    );

    showToast("Event deleted successfully.");

    if (selectedEvent?.id === id) {
      setSelectedEvent(null);
      setIsDetailsOpen(false);
    }
  };

  return (
    <div className="calendar-page">
      <CalendarHeader
        currentDate={currentDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />

      <div className="calendar-actions">
        <button
          className="add-event-btn"
          onClick={handleAddClick}
        >
          + Add Event
        </button>
      </div>

      <div className="calendar-layout">
        <div className="calendar-main">
          <CalendarGrid
            currentDate={currentDate}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            events={events}
          />
        </div>

        <UpcomingEvents
          events={events}
          onDelete={handleDeleteEvent}
          onEdit={handleEditEvent}
          onSelect={handleSelectEvent}
        />
      </div>

      <AddEventModal
        isOpen={isModalOpen}
        editingEvent={editingEvent}
        onClose={() => {
          setIsModalOpen(false);
          setEditingEvent(null);
        }}
        onSave={handleSaveEvent}
      />

      <EventDetailsModal
        isOpen={isDetailsOpen}
        event={selectedEvent}
        onClose={() => {
          setIsDetailsOpen(false);
          setSelectedEvent(null);
        }}
        onEdit={handleEditEvent}
        onDelete={handleDeleteEvent}
      />

      {toast && (
        <div className="toast-container">
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        </div>
      )}
    </div>
  );
};

export default Calendar;