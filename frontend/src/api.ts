import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

// Show toast with the specified message and type (e.g., "success" or "error")
const showToast = (message: string, type: "success" | "error" = "success") => {
  toast[type](message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true
  });
};

// Axios request wrapper with loading and toast handling
const request = async <T>(
  method: AxiosRequestConfig["method"],
  url: string,
  data: any = null,
  showMessage: boolean = false,
  customMessage: string = ""
): Promise<T> => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  //   const { showLoader, hideLoader } = useLoader();
  try {
    // Show loader while the request is being made
    // showLoader();
    const response = await api.request({
      method,
      url,
      data
    });

    // Hide loader once the request is completed
    // hideLoader();
    showMessage && showToast(response.data.message, "success");
    showMessage && customMessage && showToast(customMessage, "success");
    return response.data;
  } catch (error: any) {
    // Hide loader on error
    // hideLoader();

    // Call centralized error handler
    handleApiError(error);

    throw error;
  }
};

// Centralized error handler
export const handleApiError = (error: AxiosError) => {
  if (error.response) {
    // The request was made, but the server responded with a status code outside of the 2xx range
    const { status, data }: any = error.response;
    showToast(`Error ${status}: ${data.message}`, "error");
    return data;
  } else if (error.request) {
    // The request was made, but no response was received
    showToast("Network Error. Please try again later.", "error");
    return "Network Error. Please try again later.";
  } else {
    // Something happened in setting up the request that triggered an Error
    showToast("An error occurred. Please try again later.", "error");
    return "An error occurred. Please try again later.";
  }
};

export default request;
