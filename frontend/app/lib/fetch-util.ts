import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5001/api-v1";

// export const fetchData = async (path: string, options: RequestInit = {}) => {
//     const response = await fetch(`${BASE_URL}${path}`, options);
//     return response.json();
// };

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  // Add any request interceptors here
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; //Bearer token
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Add any response interceptors here
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors (e.g., redirect to login)
      window.dispatchEvent(new Event("force-logout"));
    }

    return Promise.reject(error);
  }
);

const postData = async <T>(path: string, data: unknown): Promise<T> => {
  const response = await api.post<T>(path, data);

  return response.data;
};

const fetchData = async <T>(path: string): Promise<T> => {
    const response = await api.get<T>(path);
    return response.data;
};

const updateData = async <T>(path: string, data: unknown): Promise<T> => {
    const response = await api.put<T>(path, data);
    return response.data;
};

const deleteData = async <T>(path: string): Promise<T> => {
    const response = await api.delete<T>(path);
    return response.data;
};

export { fetchData, postData, updateData, deleteData };
