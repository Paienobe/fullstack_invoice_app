import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { IoCalendarOutline } from "react-icons/io5";
import { DatePickerProps } from "./types";

const DatePicker = ({ updateDate }: DatePickerProps) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selected, setSelected] = useState<Date>();
  const currentDate = new Date().toLocaleDateString().split("/").join("-");

  const parseDate = (date: Date) => {
    return date.toLocaleDateString().split("/").join("-");
  };

  useEffect(() => {
    if (selected) {
      const localeDate = parseDate(selected);
      updateDate(localeDate as unknown as Date);
      setShowCalendar(false);
    }
  }, [selected]);

  return (
    <div className="relative">
      <button
        className="h-[3.25rem] border border-light_border rounded-md w-full flex items-center justify-between p-4"
        type="button"
        onClick={() => {
          setShowCalendar(!showCalendar);
        }}
      >
        {selected ? parseDate(selected) : currentDate}
        <IoCalendarOutline />
      </button>
      {showCalendar && (
        <div className="bg-white shadow-md absolute top-[-23rem]">
          <DayPicker mode="single" selected={selected} onSelect={setSelected} />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
