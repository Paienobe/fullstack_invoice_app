import InputField from "../../UI/InputField/InputField";
import { SenderFieldsetProps } from "./types";

const SenderFieldset = ({
  formData,
  updateNestedFormData,
}: SenderFieldsetProps) => {
  return (
    <fieldset className="my-8 font-medium">
      <legend className="text-purple mb-4">Bill From</legend>
      <InputField
        label="Street Address"
        value={formData.sender_address?.street}
        onChangeFunc={(e) =>
          updateNestedFormData("sender_address", "street", e.target.value)
        }
      />
      <div className="grid grid-cols-3 gap-4">
        <InputField
          label="City"
          value={formData.sender_address?.city}
          onChangeFunc={(e) =>
            updateNestedFormData("sender_address", "city", e.target.value)
          }
        />
        <InputField
          label="Post Code"
          value={formData.sender_address?.post_code}
          onChangeFunc={(e) =>
            updateNestedFormData("sender_address", "post_code", e.target.value)
          }
        />
        <InputField
          label="Country"
          value={formData.sender_address?.country}
          onChangeFunc={(e) =>
            updateNestedFormData("sender_address", "country", e.target.value)
          }
        />
      </div>
    </fieldset>
  );
};

export default SenderFieldset;
