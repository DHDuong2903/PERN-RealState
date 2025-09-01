import { X } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { Checkbox } from "../ui/checkbox";

const PopoverCheckbox = ({ label, options = [], name }) => {
  const form = useForm({
    defaultValues: {
      [name]: [""],
    },
  });

  return (
    <Popover>
      <PopoverTrigger className="border rounded-md py-2 px-4 cursor-pointer">{label}</PopoverTrigger>
      <PopoverContent className="text-main h-[400px] flex flex-col">
        <div className="flex items-center justify-between mb-2 shrink-0">
          <p className="font-bold text-lg">{label}</p>
          <Button variant="outline">
            <X size={16} />
          </Button>
        </div>

        <div className="flex-1 overflow-auto px-2 my-4">
          <Form {...form}>
            <FormField
              name={name}
              control={form.control}
              render={() => (
                <FormItem>
                  {options.map((el) => (
                    <FormField
                      key={el.id}
                      name={name}
                      control={form.control}
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between">
                          <FormLabel>{el.label}</FormLabel>
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(el.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, el.id])
                                  : field.onChange(field.value?.filter((value) => value !== el.id));
                              }}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  ))}
                </FormItem>
              )}
            />
          </Form>
        </div>
        <div className="flex items-center justify-end">
          <Button>Áp dụng</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverCheckbox;
PopoverCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};
