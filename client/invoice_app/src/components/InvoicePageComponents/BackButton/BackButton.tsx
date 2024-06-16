import { useNavigate } from "react-router-dom";
import leftArrow from "../../../assets/icon-arrow-left.svg";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="flex items-center gap-4 text-text_dark"
      onClick={() => navigate(-1)}
    >
      <img src={leftArrow} alt="" />
      Go back
    </button>
  );
};

export default BackButton;
