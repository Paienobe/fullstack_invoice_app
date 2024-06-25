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
    <fieldset className="flex items-center justify-between mt-8 md:text-xs md:flex md:gap-2 md:justify-normal">
      {!isEditMode ? (
        <>
          <Button
            className="md:w-[calc(100%/3)]"
            text="Discard"
            bg_color="bg-secondary_light"
            text_color="text-primary_text_color"
            clickFunc={discardForm}
          />
          <div className="flex items-center gap-4 md:gap-2 md:w-[calc(100%/3*2)]">
            <Button
              text="Save as Draft"
              bg_color="bg-secondary_light"
              text_color="text-text_dark"
              className="md:w-[calc(100%/2)] md:px-0"
              type="submit"
              clickFunc={() => {
                setFormData({ ...formData, status: "DRAFT" });
              }}
            />
            <Button
              text="Save and Send"
              bg_color="bg-purple"
              className="md:w-[calc(100%/2)] md:px-0"
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
