import { useRef, useState } from "react";
import downIcon from "../../../assets/icon-arrow-down.svg";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { TermsDropdownProps } from "./types";
import { useGlobalContext } from "../../../context/Global/GlobalContext";

const TermsDropdown = ({ updateTerms }: TermsDropdownProps) => {
  const { formData } = useGlobalContext();
  const termOptions = [1, 7, 14, 30];
  const [selectedTerm, setSelectedTerm] = useState(formData.payment_terms);
  const [showList, setShowList] = useState(false);
  const dropdownRef = useRef(null);

  useOutsideClick(dropdownRef, setShowList, "clickable");

  return (
    <div className="relative">
      <button
        type="button"
        className="clickable border h-[3.25rem] p-4 border-light_border rounded-md w-full flex items-center justify-between text-text_dark"
        onClick={() => setShowList(!showList)}
      >
        Net {selectedTerm} day{selectedTerm > 1 ? "s" : ""}{" "}
        <img src={downIcon} alt="" className="clickable" />
      </button>

      {showList && (
        <div
          className="absolute bg-white shadow-xl rounded-lg top-[4rem]"
          ref={dropdownRef}
        >
          {termOptions.map((option) => {
            return (
              <button
                key={option}
                className={`w-full p-4 text-left border border-transparent border-b-purple last:border-b-transparent transition-colors duration-300 ${
                  selectedTerm == option
                    ? "text-purple"
                    : "text-text_dark hover:text-primary_text_color"
                }`}
                onClick={() => {
                  setSelectedTerm(option);
                  updateTerms(option);
                  setShowList(false);
                }}
              >
                Net {option} day{option > 1 ? "s" : ""}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TermsDropdown;
