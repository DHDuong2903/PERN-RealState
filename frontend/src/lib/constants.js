import slugify from "slugify";

export const postSoldTypes = [
  "Căn hộ chung cư",
  "Nhà mặt phố",
  "Nhà riêng",
  "Nhà phố thương mại",
  "Biệt thự",
  "Đất nền",
  "Bán đất",
  "Trang trại",
  "Khu nghỉ dưỡng",
  "Kho",
  "Nhà xưởng",
  "Khác",
].map((element) => ({
  name: element,
  pathname: slugify(element),
}));

export const postRentTypes = [
  "Căn hộ chung cư",
  "Nhà mặt phố",
  "Nhà riêng",
  "Nhà phố thương mại",
  "Biệt thự",
  "Đất nền",
  "Bán đất",
  "Trang trại",
  "Khu nghỉ dưỡng",
  "Kho",
  "Nhà xưởng",
  "Khác",
].map((element) => ({
  name: element,
  pathname: slugify(element),
}));

export const slider = [
  "/slider/realstate1.avif",
  "/slider/realstate2.avif",
  "/slider/realstate3.avif",
  "/slider/realstate4.avif",
  "/slider/realstate5.avif",
].map((el, index) => ({
  id: index,
  imageUrl: el,
}));

export const hotProvinces = [
  {
    id: 1,
    label: "Hà Nội",
  },
  {
    id: 2,
    label: "Hồ Chí Minh",
  },
  {
    id: 3,
    label: "Đà Nẵng",
  },
  {
    id: 4,
    label: "Hải Phòng",
  },
  {
    id: 5,
    label: "Nha Trang",
  },
  {
    id: 6,
    label: "Quảng Ninh",
  },
];
