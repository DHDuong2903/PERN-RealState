import { pathnames } from "@/lib/pathname";
import { PieChart, UserRound, GanttChartSquare, Wallet } from "lucide-react";

export const menu = [
  {
    id: 1,
    label: "Tổng quan",
    path: pathnames.users.layout + pathnames.users.general,
    icon: <PieChart size={14} />,
    hasSub: false,
  },
  {
    id: 2,
    label: "Cá nhân",
    path: pathnames.users.layout + pathnames.users.personal,
    icon: <UserRound size={14} />,
    hasSub: true,
    subs: [
      {
        id: 21,
        label: "Thông tin cá nhân",
        path: pathnames.users.layout + pathnames.users.personal,
      },
      {
        id: 22,
        label: "Cập nhật số điện thoại",
        path: pathnames.users.layout + pathnames.users.updatePhone,
      },
      {
        id: 23,
        label: "Cập nhật email",
        path: pathnames.users.layout + pathnames.users.updateEmail,
      },
    ],
  },
  {
    id: 3,
    label: "Quản lý tin đăng",
    path: pathnames.users.layout + pathnames.users.managePost,
    icon: <GanttChartSquare size={14} />,
    hasSub: true,
    subs: [
      {
        id: 31,
        label: "Tạo mới tin đăng",
        path: pathnames.users.layout + pathnames.users.createPost,
      },
      {
        id: 32,
        label: "Danh sách tin đăng",
        path: pathnames.users.layout + pathnames.users.managePost,
      },
      {
        id: 33,
        label: "Danh sách tin nháp",
        path: pathnames.users.layout + pathnames.users.manageDraft,
      },
    ],
  },
  {
    id: 4,
    label: "Quản lý tài chính",
    path: pathnames.users.layout + pathnames.users.manageBalance,
    icon: <Wallet size={14} />,
    hasSub: true,
    subs: [
      {
        id: 41,
        label: "Nạp tiền",
        path: pathnames.users.layout + pathnames.users.deposit,
      },
      {
        id: 42,
        label: "Lịch sử thanh toán",
        path: pathnames.users.layout + pathnames.users.paymentHistory,
      },
    ],
  },
];
