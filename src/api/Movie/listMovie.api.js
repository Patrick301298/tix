import axiosService from "../../services/axiosServices";

export const apiGetListMovie = () => {
  return axiosService.get(
    "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim"
  );
};
export const apiGetListMovieTheater = () => {
  return axiosService.get(
    "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap"
  );
};
export const apiGetListTheaterByID = (ID) => {
  return axiosService.get(
    `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${ID}`
  );
};
