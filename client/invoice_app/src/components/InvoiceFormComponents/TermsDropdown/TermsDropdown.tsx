import downIcon from "../../../assets/icon-arrow-down.svg";

const TermsDropdown = () => {
  return (
    <div>
      <button
        type="button"
        className="border h-[3.25rem] p-4 border-light_border rounded-md w-full flex items-center justify-between"
      >
        Net 1 day <img src={downIcon} alt="" />
      </button>
    </div>
  );
};

export default TermsDropdown;
