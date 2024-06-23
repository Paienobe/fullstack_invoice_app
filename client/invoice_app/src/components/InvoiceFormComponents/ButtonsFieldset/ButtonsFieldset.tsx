import Button from "../../UI/Button/Button";
import { useGlobalContext } from "../../../context/Global/GlobalContext";
import { InvoiceData } from "../InvoiceForm/classes";

const ButtonsFieldset = () => {
  const { setShowForm, isEditMode, setIsEditMode, setFormData, formData } =
    useGlobalContext();

  const discardForm = () => {
    setFormData(new InvoiceData());
    setIsEditMode(false);
    setShowForm(false);
  };

  return (
    <fieldset className="flex items-center justify-between mt-8">
      {!isEditMode ? (
        <>
          <Button
            text="Discard"
            bg_color="bg-secondary_light"
            text_color="text-primary_text_color"
            clickFunc={discardForm}
          />
          <div className="flex items-center gap-4">
            <Button
              text="Save as Draft"
              bg_color="bg-secondary_light"
              text_color="text-text_dark"
              type="submit"
              clickFunc={() => {
                setFormData({ ...formData, status: "DRAFT" });
              }}
            />
            <Button
              text="Save and Send"
              bg_color="bg-purple"
              text_color="text-white"
              type="submit"
            />
          </div>
        </>
      ) : (
        <div className="flex items-center gap-4 w-fit ml-auto">
          <Button
            text="Cancel"
            bg_color="bg-secondary_light"
            text_color="text-text_dark"
            clickFunc={discardForm}
          />
          <Button
            text="Save Changes"
            bg_color="bg-purple"
            text_color="text-white"
            type="submit"
          />
        </div>
      )}
    </fieldset>
  );
};

export default ButtonsFieldset;
