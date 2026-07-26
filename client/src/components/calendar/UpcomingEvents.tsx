import { useMemo, useState } from "react";
import EventCard from "./EventCard";
import type { CalendarEvent } from "../../constants/calendarEvents";
interface UpcomingEventsProps {
  events: CalendarEvent[];
  onDelete: (id: number) => void;
  onEdit: (event: CalendarEvent) => void;
  onSelect: (event: CalendarEvent) => void;
}

const UpcomingEvents = ({
  events,
  onDelete,
  onEdit,
  onSelect,
}: UpcomingEventsProps) => {
  const [search, setSearch] = useState("");

  const filteredEvents = useMemo(() => {
    return events.filter((event) =>
      event.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [events, search]);

  return (
    <aside className="upcoming-events">
      <div className="upcoming-header">
        <h2>Upcoming Events</h2>

        <p>{filteredEvents.length} Event(s)</p>
      </div>

      <div className="event-search">
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <div className="events-list">
        {filteredEvents.length === 0 ? (
          <div className="empty-events">
            <h4>No Events Found</h4>

            <p>
              Try another event name.
            </p>
          </div>
        ) : (
          filteredEvents.map((event) => (
        <EventCard
    key={event.id}
    event={event}
    onClick={onSelect}
    onDelete={onDelete}
    onEdit={onEdit}
/>
          ))
        )}
      </div>
    </aside>
  );
};

export default UpcomingEvents;