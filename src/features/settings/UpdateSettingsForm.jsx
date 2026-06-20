import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { Input } from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useUpdateSetting } from "./useEditSettings";
import { useSettings } from "./useSettings";

const UpdateSettingsForm = () => {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
    error,
  } = useSettings();
  const { isUpdating, updateSetting } = useUpdateSetting();
  const { register, handleSubmit } = useForm();

  if (isLoading) return <Spinner />;

  const handleUpdateSetting = (e, fieldName) => {
    const { value } = e.target;
    if (!value) return;

    updateSetting({ [fieldName]: value });
  };

  return (
    <Form onSubmit={handleSubmit(handleUpdateSetting)}>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          disabled={isUpdating}
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpdateSetting(e, "minBookingLength")}
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          disabled={isUpdating}
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpdateSetting(e, "maxBookingLength")}
        />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          disabled={isUpdating}
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handleUpdateSetting(e, "maxGuestsPerBooking")}
        />
      </FormRow>

      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          disabled={isUpdating}
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpdateSetting(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
};

export default UpdateSettingsForm;
