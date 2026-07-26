import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface CalendarHeaderProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const CalendarHeader = ({
  currentDate,
  onPrevMonth,
  onNextMonth,
}: CalendarHeaderProps) => {
  const monthYear = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="calendar-header">
      <div>
        <h1>Calendar</h1>
        <p>Manage meetings and upcoming events</p>
      </div>

      <div className="calendar-navigation">
        <button
          className="nav-btn"
          onClick={onPrevMonth}
        >
          <FiChevronLeft />
        </button>

        <h2>{monthYear}</h2>

        <button
          className="nav-btn"
          onClick={onNextMonth}
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;