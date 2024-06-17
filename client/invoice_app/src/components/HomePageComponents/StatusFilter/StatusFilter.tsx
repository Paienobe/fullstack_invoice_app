import { useEffect, useRef, useState } from "react";
import downIcon from "../../../assets/icon-arrow-down.svg";
import check from "../../../assets/icon-check.svg";
import { FilterOptionProps } from "./types";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { useGlobalContext } from "../../../context/Global/GlobalContext";
import { getAllInvoices } from "../../../services/api/invoice";

const StatusFilter = () => {
  const optionsRef = useRef(null);
  const [showOptions, setShowOptions] = useState(false);

  useOutsideClick(optionsRef, setShowOptions, "clickable");

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 clickable"
        onClick={() => setShowOptions(!showOptions)}
      >
        Filter by status <img src={downIcon} alt="" />
      </button>

      {showOptions && (
        <div
          className="clickable px-4 py-2 absolute bg-white w-[12rem] shadow-md rounded-lg top-10 right-[5%]"
          ref={optionsRef}
        >
          <FilterOption text="Draft" />
          <FilterOption text="Pending" />
          <FilterOption text="Paid" />
        </div>
      )}
    </div>
  );
};

export default StatusFilter;

const FilterOption = ({ text }: FilterOptionProps) => {
  const { chosenFilter, setChosenFilter, setInvoices } = useGlobalContext();
  const filterType = text.toUpperCase();
  const isSelected = chosenFilter[filterType];
  const updatedFilter = () => {
    setChosenFilter({
      ...chosenFilter,
      [filterType]: !isSelected,
    });
  };

  useEffect(() => {
    const validFilters = () => {
      const booleanStatuses = Object.values(chosenFilter);
      const filterTypes = Object.keys(chosenFilter);
      const updatedFilters: string[] = [];
      booleanStatuses.forEach((item, index) => {
        if (item) {
          updatedFilters.push(filterTypes[index]);
        }
      });
      return updatedFilters;
    };

    const params = { status: validFilters() };
    getAllInvoices(params).then((result) => {
      setInvoices(result);
    });
  }, [chosenFilter]);

  return (
    <button
      className="flex items-center gap-4 my-2 text-text_dark  cursor-pointer group"
      onClick={updatedFilter}
    >
      <div
        className={`min-w-4 min-h-4 border border-transparent group-hover:border-purple transition-colors ${
          isSelected ? "bg-purple" : "bg-lavender"
        } rounded-sm flex items-center justify-center`}
      >
        {isSelected && <img src={check} alt="" />}
      </div>
      <p>{text}</p>
    </button>
  );
};
