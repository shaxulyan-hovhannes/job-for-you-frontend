import axios, {
  AxiosInstance,
  // AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosError,
} from "axios";

class AxiosConfig {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "http://localhost:3200",
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.axiosInstance.interceptors.request.use(
      this.requestInterceptor,
      this.requestErrorInterceptor
    );

    this.axiosInstance.interceptors.response.use(
      this.responseInterceptor,
      this.responseErrorInterceptor
    );
  }

  private requestInterceptor(config: InternalAxiosRequestConfig) {
    // return this.addToken(config); // Добавление токена перед каждым запросом
    // const token = localStorage.getItem("jwt");
    // if (token) {
    //   config.headers!["Authorization"] = `Bearer ${token}`;
    // }
    return config;
  }

  private requestErrorInterceptor(error: AxiosError) {
    return Promise.reject(error);
  }

  private responseInterceptor(response: AxiosResponse) {
    return response;
  }

  private responseErrorInterceptor(error: AxiosError) {
    if (error.response?.status === 401) {
      // Логика для аутентификации, если токен истёк или недействителен
      // Здесь можно перенаправить пользователя на страницу логина
    }
    return Promise.reject(error);
  }

  public getInstance() {
    return this.axiosInstance;
  }
}

export default new AxiosConfig().getInstance();
