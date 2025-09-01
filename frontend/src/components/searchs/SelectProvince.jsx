import React from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import PropTypes from "prop-types";
import { hotProvinces } from "@/lib/constants";
import useAppStore from "@/zustand/useAppStore";

const SelectProvince = ({ onClose }) => {
  const { provinces } = useAppStore();
  console.log(provinces);

  return (
    <div className="absolute text-main rounded-md rounded-t-none top-full left-0 right-0 max-h-[500px] overflow-auto bg-slate-50 p-2">
      {/* Nút X bên phải */}
      <div className="flex justify-end mb-2">
        <Button
          variant="outline"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <X size={16} />
        </Button>
      </div>

      <div className="space-y-4">
        <p className="font-semibold mb-2">Các tỉnh thành nổi bật</p>
        <div className="flex flex-wrap gap-2 text-sm">
          {hotProvinces.map((el) => (
            <div key={el.id} className="px-3 py-1 bg-secon/30 rounded-md cursor-pointer hover:bg-mainbg">
              {el.label}
            </div>
          ))}
        </div>

        <p className="font-semibold mb-2">Tất cả các tỉnh thành</p>
        <div className="grid grid-cols-5 gap-4 text-sm">
          {provinces.map((el) => (
            <p className="cursor-pointer hover:underline" key={el.idProvince}>
              {el.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectProvince;

SelectProvince.propTypes = {
  onClose: PropTypes.func.isRequired,
};
