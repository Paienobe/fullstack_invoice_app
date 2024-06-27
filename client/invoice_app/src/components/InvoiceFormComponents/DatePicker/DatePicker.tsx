import { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { IoCalendarOutline } from "react-icons/io5";
import { DatePickerProps } from "./types";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { parseDate } from "../../../utils";
import { useGlobalContext } from "../../../context/Global/GlobalContext";

const DatePicker = ({ updateDate }: DatePickerProps) => {
  const { formData } = useGlobalContext();
  const [showCalendar, setShowCalendar] = useState(false);
  const [selected, setSelected] = useState<Date>();
  const calendarRef = useRef(null);

  useEffect(() => {
    if (selected) {
      const localeDate = parseDate(selected);
      updateDate(localeDate as unknown as Date);
      setShowCalendar(false);
    }
  }, [selected]);

  useOutsideClick(calendarRef, setShowCalendar, "can_click");

  return (
    <div className="relative">
      <button
        className="can_click h-[3.25rem] border border-light_border dark:border-transparent rounded-md w-full flex items-center justify-between p-4 text-text_dark dark:text-white dark:bg-secondary_dark"
        type="button"
        onClick={() => {
          setShowCalendar(!showCalendar);
        }}
      >
        {formData.payment_due as unknown as string}
        <IoCalendarOutline className="can_click" />
      </button>
      {showCalendar && (
        <div
          ref={calendarRef}
          className="bg-white dark:bg-secondary_dark shadow-md absolute top-[-23rem]"
        >
          <DayPicker mode="single" selected={selected} onSelect={setSelected} />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
