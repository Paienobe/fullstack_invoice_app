import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { IoCalendarOutline } from "react-icons/io5";

const DatePicker = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <div className="relative">
      <button
        className="h-[3.25rem] border border-light_border rounded-md w-full flex items-center justify-between p-4"
        type="button"
        onClick={() => {
          setShowCalendar(!showCalendar);
        }}
      >
        17-06-2024
        <IoCalendarOutline />
      </button>
      {showCalendar && (
        <div className="bg-white shadow-md absolute top-[-23rem]">
          <DayPicker mode="single" />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
