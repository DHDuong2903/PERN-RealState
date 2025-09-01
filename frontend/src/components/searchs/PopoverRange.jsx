import { MoveRight, X } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Input } from "../ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useForm } from "react-hook-form";
import { Slider } from "../ui/slider";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import PropTypes from "prop-types";

const PopoverRange = ({ name, label, options = [], _name }) => {
  const form = useForm({
    defaultValues: {
      [name]: [0, 100],
    },
  });

  return (
    <Popover>
      <PopoverTrigger className="border rounded-md py-2 px-4 cursor-pointer">{label}</PopoverTrigger>
      <PopoverContent className="text-main h-[400px] flex flex-col">
        <div className="flex items-center justify-between mb-6 shrink-0">
          <p className="font-bold text-lg">{label}</p>
          <Button variant="outline">
            <X size={16} />
          </Button>
        </div>
        <div className="mb-4 shrink-0 ">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center">
              <p className="text-sm mb-2">{`${label} thấp nhất`}</p>
              <Input className="w-[100px] text-sm placeholder:text-main/70" placeholder="Từ" />
            </div>
            <MoveRight className="mt-6" />
            <div className="flex flex-col items-center">
              <p className="text-sm mb-2">{`${label} cao nhất`}</p>
              <Input className="w-[100px] text-sm placeholder:text-main/70" placeholder="Đến" />
            </div>
          </div>
        </div>
        <div className="shrink-0">
          <Form {...form} className="shrink-0">
            <FormField
              name={name}
              control={form.control}
              render={({ field }) => (
                <FormItem className="py-2">
                  <FormControl>
                    <Slider
                      value={field.value}
                      onValueChange={(value) => form.setValue({ name }, value)}
                      max={100}
                      min={0}
                      step={1}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </Form>
        </div>
        <div className="flex-1 overflow-auto px-2 my-4">
          <Form {...form}>
            <FormField
              name={_name}
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup value={field.value} onValueChange={field.onChange}>
                      {options.map((el) => (
                        <FormItem className="flex items-center justify-between" key={el.id}>
                          <FormLabel>{el.label}</FormLabel>
                          <FormControl>
                            <RadioGroupItem value={el.value} />
                          </FormControl>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
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

export default PopoverRange;
PopoverRange.propTypes = {
  name: PropTypes.string.isRequired,
  _name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};
