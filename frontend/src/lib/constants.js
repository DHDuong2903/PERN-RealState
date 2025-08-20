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
