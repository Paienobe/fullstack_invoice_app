import Button from "../../UI/Button/Button";
import { useGlobalContext } from "../../../context/Global/GlobalContext";

const ButtonsFieldset = () => {
  const { setShowForm } = useGlobalContext();
  return (
    <fieldset className="flex items-center justify-between mt-8">
      <Button
        text="Discard"
        bg_color="bg-secondary_light"
        text_color="text-primary_text_color"
        clickFunc={() => setShowForm(false)}
      />
      <div className="flex items-center gap-4">
        <Button
          text="Save as Draft"
          bg_color="bg-secondary_light"
          text_color="text-text_dark"
          clickFunc={() => {}}
        />
        <Button
          text="Save and Send"
          bg_color="bg-purple"
          text_color="text-white"
          type="submit"
          // clickFunc={handleSubmit}
        />
      </div>
    </fieldset>
  );
};

export default ButtonsFieldset;
