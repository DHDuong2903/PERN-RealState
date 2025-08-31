import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Search as SearchIcon } from "lucide-react";
import { SelectProvince } from ".";

const postTypes = ["Bán", "Cho thuê"].map((el, index) => ({
  id: index,
  label: el,
  value: el,
}));

const Search = () => {
  const [activeTab, setActiveTab] = useState("Bán");
  const [isShowSelectProvince, setIsShowSelectProvince] = useState(false);

  return (
    <div className="absolute text-white top-0 bottom-0 left-10 right-10 flex items-center justify-center">
      <div className="w-[945px] max-w-[90%]">
        <Tabs className="space-y-0" value={activeTab} onValueChange={(value) => setActiveTab(value)}>
          <TabsList className="bg-transparent rounded-b-none p-0 ">
            {postTypes.map((el) => (
              <TabsTrigger
                className="hover:cursor-pointer min-w-[80px] h-full font-bold rounded-b-none text-slate-50 data-[state=active]:bg-black/60"
                key={el.id}
                value={el.value}
              >
                {el.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {postTypes.map((el) => (
            <TabsContent
              className="bg-black/60 h-40 p-4 rounded-md rounded-tl-none space-y-4"
              key={el.id}
              value={el.value}
            >
              <div
                onClick={() => setIsShowSelectProvince(true)}
                className={`flex relative items-center justify-between bg-slate-50 rounded-md p-1 ${
                  isShowSelectProvince ? "rounded-b-none" : ""
                }`}
              >
                <div className="flex items-center gap-2 text-main text-sm p-1">
                  <SearchIcon size={20} />
                  <span>Bạn muốn tìm bất động sản ở tỉnh thành nào ?</span>
                </div>

                {/* chỉ hiện khi click */}
                {isShowSelectProvince && <SelectProvince onClose={() => setIsShowSelectProvince(false)} />}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Search;
