import AxiosInstance from "./AxiosInstance";
import { AxiosRequestConfig, AxiosResponse } from "axios";

class AxiosBase {
  private axiosInstance = AxiosInstance;

  protected async request<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      // Check if token is available in sessionStorage
      const token = sessionStorage.getItem("bearer")

      if (token) {
        // If token is available, add Authorization header
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }

      const response: AxiosResponse<T> = await this.axiosInstance({
        ...config,
      });

      return response.data;
    } catch (error: any) {
      if (error.response.data.message) {
        const er: ResultDTO = {
          status: false,
          message: error.response.data.message,
          code: error.response.data.code,
          data: error.response.data.data,
        };
        throw er
      }
      throw error;
    }
  }
}

export default AxiosBase;
