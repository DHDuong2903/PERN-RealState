import useMeStore from "@/zustand/useMeStore";
import Image from "@/components/layouts/Image";
import { generateDefaultAvatar } from "@/lib/utils";
import { Info } from "lucide-react";
import { CustomTooltip } from "../layouts";

const UserBox = () => {
  const { me } = useMeStore();
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex items-center">
        {me.avatar && (
          <Image
            className="w-10 h-10 rounded-full object-cover"
            src={me.avatar}
            fallbackSrc={generateDefaultAvatar(me.fullname)}
          />
        )}
        <div>
          <Image src="/rank/master.png" className="absolute -top-5 left-0 w-28 h-28 object-cover" />
        </div>
      </div>
      <div>
        <p className="font-medium">{me.fullname}</p>
        <p className="flex items-center gap-1">
          <span>Điểm: {me.score}</span>
          <CustomTooltip
            trigger={<Info size={14} />}
            content={
              <>
                <span>Hạng tài khoản: {me.rank}</span>
                <p>Cần tích đến 1000 điểm để lên hạng</p>
              </>
            }
          />
        </p>
        <p>
          <span>Số dư tài khoản: {me.balance}</span>
        </p>
      </div>
    </div>
  );
};

export default UserBox;
