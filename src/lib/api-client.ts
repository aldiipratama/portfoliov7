import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

// Define types yang lebih specific buat menghindari any
interface ApiError {
  message: string;
  status?: number;
  response?: {
    status: number;
    data?: {
      error?: string;
    };
  };
  request?: unknown;
}

// Buat instance axios utama biar gak ribet setup ulang-ulang
const apiClient: AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_API_URL || ""
      : "",
  timeout: 10000, // 10 detik timeout biar gak nungguin kelamaan
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor - buat nangkep request sebelum dikirim
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Log request buat debugging
    if (process.env.NODE_ENV === "development") {
      console.log(
        `🚀 [API Request] ${config.method?.toUpperCase()} ${config.url}`
      );
    }

    // Bisa tambahin auth token di sini kalau butuh
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  },
  (error: ApiError) => {
    console.error("❌ [Request Error]", error);
    return Promise.reject(error);
  }
);

// Response interceptor - buat handle response dan error
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Log response buat debugging
    if (process.env.NODE_ENV === "development") {
      console.log(
        `✅ [API Response] ${response.config.method?.toUpperCase()} ${
          response.config.url
        }`,
        response.data
      );
    }

    return response;
  },
  (error: ApiError) => {
    // Handle error dengan message yang user-friendly
    let errorMessage = "Oops! Ada yang error nih";

    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;

      switch (status) {
        case 400:
          errorMessage = data?.error || "Data yang dikirim gak valid";
          break;
        case 401:
          errorMessage = "Kamu gak punya akses nih";
          break;
        case 403:
          errorMessage = "Forbidden, access ditolak!";
          break;
        case 404:
          errorMessage = "Data yang dicari gak ketemu";
          break;
        case 429:
          errorMessage = "Slow down bro, terlalu banyak request!";
          break;
        case 500:
          errorMessage = "Server lagi error nih, coba lagi ya";
          break;
        default:
          errorMessage = data?.error || `Error ${status}`;
      }
    } else if (error.request) {
      // Request dibuat tapi gak ada response
      errorMessage = "Koneksi internet bermasalah atau server gak respond";
    } else {
      // Something else happened
      errorMessage = error.message || "Ada error yang gak diketahui";
    }

    console.error("❌ [API Error]", errorMessage);

    // Bisa tambahin notification toast di sini
    // toast.error(errorMessage);

    return Promise.reject({
      ...error,
      message: errorMessage,
    });
  }
);

// Helper functions buat api calls yang lebih clean
export const api = {
  // GET request
  get: <T = unknown>(
    url: string,
    config?: InternalAxiosRequestConfig
  ): Promise<AxiosResponse<T>> => apiClient.get<T>(url, config),

  // POST request
  post: <T = unknown>(
    url: string,
    data?: unknown,
    config?: InternalAxiosRequestConfig
  ): Promise<AxiosResponse<T>> => apiClient.post<T>(url, data, config),

  // PUT request
  put: <T = unknown>(
    url: string,
    data?: unknown,
    config?: InternalAxiosRequestConfig
  ): Promise<AxiosResponse<T>> => apiClient.put<T>(url, data, config),

  // PATCH request
  patch: <T = unknown>(
    url: string,
    data?: unknown,
    config?: InternalAxiosRequestConfig
  ): Promise<AxiosResponse<T>> => apiClient.patch<T>(url, data, config),

  // DELETE request
  delete: <T = unknown>(
    url: string,
    config?: InternalAxiosRequestConfig
  ): Promise<AxiosResponse<T>> => apiClient.delete<T>(url, config),
};

export default apiClient;
