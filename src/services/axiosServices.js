import axios from "axios";
import { METHOD, STATUS_CODES } from "../constants/api";

const config = () => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  };

  return headers;
};

class AxiosService {
  get = (url, type) => this.doRequest(METHOD.GET, url, "", type);

  post = (url, data, type) => this.doRequest(METHOD.POST, url, data, type);

  put = (url, data, type) => this.doRequest(METHOD.PUT, url, data, type);

  delete = (url, type) => this.doRequest(METHOD.DELETE, url, "", type);

  doRequest = (method, url, data, type) => {
    let cusConfig = config();
    const timeOut = 200000;

    if (type === "FORM") {
      // Khi nào viết đến phần quản lý của admin mới sử dụng đến
    }

    return (
      axios({
        method,
        url,
        data,
        timeout: timeOut,
        headers: cusConfig,
      })
        //-- HANDLE SUCCESS
        .then((res) => res)
        //-- HANDLE ERROR
        .catch((err) => {
          const resp = err.response;

          if (!resp) {
            return {
              status: 503,
              data: {
                msg: "Không kết nối được network",
              },
            };
          }

          switch (resp.status) {
            case STATUS_CODES.NOT_FOUND:
            case STATUS_CODES.METHOD_NOT_ALLOW:
            case STATUS_CODES.SERVICE_UNAVAIBLE:
            case STATUS_CODES.BAD_REQUEST: {
              return resp;
            }
            default:
              return resp;
          }
        })
    );
  };
}

export default new AxiosService();
