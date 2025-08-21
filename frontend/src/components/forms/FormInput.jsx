import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import PropTypes from "prop-types";

const FormInput = ({ form, label, name, placeholder, type = "text" }) => {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              {...field}
              className="placeholder:text-secon/50 placeholder:text-xs placeholder:italic"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
FormInput.propTypes = {
  form: PropTypes.shape({
    control: PropTypes.object.isRequired,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(["text", "password"]),
  }),
};
