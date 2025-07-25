import store from "@store/store";
import axios from "axios";
// import { enqueueSnackbar } from "notistack";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

// Request interceptor to add auth token
axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.authentication.token; // may be in user object
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for global error handling
axiosInstance.interceptors.response.use(
  (response) => response, // Handle success responses
  (error) => {
    const axiosError = error.response;
    if (!axiosError) {
      // Network error
      // enqueueSnackbar("Network error", {
      //   variant: "error",
      // });
      // return Promise.reject(error);
    }

    const description = axiosError.data?.error?.description;
    if (description) {
      // const { language } = store.getState().language;
      // const errorMessage = description?.[language] || "An error occurred";
      // enqueueSnackbar(description ?? "An error occurred", {
      //   variant: "error",
      // });
    }
    // const status = axiosError.status;
    // const message = axiosError.data?.message;

    // Handle specific status codes
    // switch (status) {
    //   case 400:
    // enqueueSnackbar(message ?? "badRequest", {
    //   variant: "error",
    // });
    //     break;
    //   case 401:
    // enqueueSnackbar(message ?? "unauthorized", {
    //   variant: "error",
    // });
    //     break;
    //   case 403:
    // enqueueSnackbar(message ?? "forbidden", {
    //   variant: "error",
    // });
    //     break;
    //   case 404:
    // enqueueSnackbar(message ?? "notFound", {
    //   variant: "error",
    // });
    //     break;
    //   case 500:
    // enqueueSnackbar(message ?? "internalServerError", {
    //   variant: "error",
    // });
    //     break;
    //   default:
    // enqueueSnackbar(message ?? "somethingWentWrong", {
    //   variant: "error",
    // });
    // }
    return Promise.reject(error);
  }
);

export default axiosInstance;
