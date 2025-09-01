import slugify from "slugify";

export const postSoldTypes = [
  "Ban",
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
  "Mua",
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

export const prices = [
  {
    id: -1,
    label: "Tất cả mức giá",
    value: "ALL",
  },
  {
    id: 1,
    label: "Dưới 500 triệu",
    value: JSON.stringify([0, 0.5 * Math.pow(10, 9)]),
  },
  {
    id: 2,
    label: "Từ 500 đến 800 triệu",
    value: JSON.stringify([0.5 * Math.pow(10, 9), 0.8 * Math.pow(10, 9)]),
  },
  {
    id: 3,
    label: "Từ 800 triệu đến 1 tỷ",
    value: JSON.stringify([0.8 * Math.pow(10, 9), 1 * Math.pow(10, 9)]),
  },
  {
    id: 4,
    label: "Từ 1 tỷ đến 2 tỷ",
    value: JSON.stringify([1 * Math.pow(10, 9), 2 * Math.pow(10, 9)]),
  },
  {
    id: 5,
    label: "Từ 2 tỷ đến 3 tỷ",
    value: JSON.stringify([2 * Math.pow(10, 9), 3 * Math.pow(10, 9)]),
  },
  {
    id: 6,
    label: "Từ 3 tỷ đến 5 tỷ",
    value: JSON.stringify([3 * Math.pow(10, 9), 5 * Math.pow(10, 9)]),
  },
  {
    id: 7,
    label: "Từ 5 tỷ đến 7 tỷ",
    value: JSON.stringify([5 * Math.pow(10, 9), 7 * Math.pow(10, 9)]),
  },
  {
    id: 8,
    label: "Từ 7 tỷ đến 10 tỷ",
    value: JSON.stringify([7 * Math.pow(10, 9), 10 * Math.pow(10, 9)]),
  },
  {
    id: 50,
    label: "Trên 10 tỷ",
    value: JSON.stringify([10 * Math.pow(10, 9), 100 * Math.pow(10, 9)]),
  },
];

export const sizes = [
  {
    id: -1,
    from: NaN,
    to: NaN,
    label: "Tất cả diện tích",
    value: "ALL",
  },
  {
    id: 1,
    label: "Dưới 30 m2",
    value: JSON.stringify([0, 30]),
  },
  {
    id: 2,
    label: "Từ 30 đến 50 m2",
    value: JSON.stringify([30, 50]),
  },
  {
    id: 3,
    label: "Từ 50 đến 100 m2",
    value: JSON.stringify([50, 100]),
  },
  {
    id: 4,
    label: "Từ 100 đến 150 m2",
    value: JSON.stringify([100, 150]),
  },
  {
    id: 5,
    label: "Từ 150 đến 200 m2",
    value: JSON.stringify([150, 200]),
  },
  {
    id: 6,
    label: "Từ 200 đến 250 m2",
    value: JSON.stringify([200, 250]),
  },
  {
    id: 7,
    label: "Từ 250 đến 300 m2",
    value: JSON.stringify([250, 300]),
  },
  {
    id: 8,
    label: "Từ 300 đến 500 m2",
    value: JSON.stringify([300, 500]),
  },
  {
    id: 50,
    label: "Trên 500 m2",
    value: JSON.stringify(["gte", 500]),
  },
];
