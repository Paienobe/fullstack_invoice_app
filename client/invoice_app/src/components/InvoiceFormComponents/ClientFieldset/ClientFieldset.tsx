import InputField from "../../UI/InputField/InputField";
import { ClientFieldsetProps } from "./types";
import DatePicker from "../DatePicker/DatePicker";
import TermsDropdown from "../TermsDropdown/TermsDropdown";

const ClientFieldset = ({
  formData,
  updateFormData,
  updateNestedFormData,
  updateDate,
}: ClientFieldsetProps) => {
  return (
    <fieldset>
      <legend className="text-purple mb-4">Bill To</legend>
      <InputField
        label="Client's Name"
        value={formData.client_name}
        onChangeFunc={(e) => updateFormData("client_name", e.target.value)}
      />
      <InputField
        label="Client's Email"
        value={formData.client_email}
        onChangeFunc={(e) => updateFormData("client_email", e.target.value)}
      />
      <InputField
        label="Street Address"
        value={formData.client_address?.street}
        onChangeFunc={(e) =>
          updateNestedFormData("client_address", "street", e.target.value)
        }
      />
      <div className="grid grid-cols-3 gap-4 mt-4">
        <InputField
          label="City"
          value={formData.client_address?.city}
          onChangeFunc={(e) =>
            updateNestedFormData("client_address", "city", e.target.value)
          }
        />
        <InputField
          label="Post Code"
          value={formData.client_address?.post_code}
          onChangeFunc={(e) =>
            updateNestedFormData("client_address", "post_code", e.target.value)
          }
        />
        <InputField
          label="Country"
          value={formData.client_address?.country}
          onChangeFunc={(e) =>
            updateNestedFormData("client_address", "country", e.target.value)
          }
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <DatePicker updateDate={updateDate} />
        <TermsDropdown />
      </div>
      <InputField
        label="Project Description"
        value=""
        onChangeFunc={(e) => updateFormData("description", e.target.value)}
      />
    </fieldset>
  );
};

export default ClientFieldset;
