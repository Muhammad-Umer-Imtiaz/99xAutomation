import { create } from "zustand";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { promises } from "dns";

const BASE_URL = "http://localhost:8000";

interface SignupData {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
}
interface LoginData {
  email: string;
  password: string;
}

interface AuthUser {
  id: string;
  username: string;
  email: string;
  message?: string;
  email_confirmed?: boolean;
  access_token?: null;
  refresh_token?: null;
}

interface AuthState {
  authUser: AuthUser | null;
  isSigningUp: boolean;
  isLoggingIn: boolean;
  signup: (data: SignupData) => Promise<void>;
  login: (data: LoginData) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      console.log("Api Calling", data);
      const response = await axios.post<AuthUser>(`${BASE_URL}/signup`, data);
      console.log("Api Response", response);
      if (response.status === 201 || response.status === 200) {
        toast.success("Signup successful!");
      }

      set({ authUser: response.data });
    } catch (error: unknown) {
      set({ authUser: null });

      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Signup failed");
      } else {
        toast.error("An unknown error occurred");
      }
    } finally {
      set({ isSigningUp: false });
    }
  },
  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      console.log("Api Calling", data);

      const response = await axios.post<AuthUser>(`${BASE_URL}/login`, data);
      console.log("Api called SuccessFully");
      if (response.status === 200) {
        toast.success("Login successful");
        set({ authUser: response.data });
      }
    } catch (error: unknown) {
      set({ authUser: null });
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Signup failed");
      } else {
        toast.error("An unknown error occurred");
      }
    } finally {
      set({ isSigningUp: false });
    }
  },
  profile: async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get<AuthUser>(`${BASE_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`, // 👈 important line
        },
      });
      console.log("APi Respone", response);
      if (response.status === 200) set({ authUser: response.data });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Signup failed");
      } else {
        toast.error("An unknown error occurred");
      }
    }
  },
  logout: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/logout`);
      if (!response) toast.error("Logout Failed");
      toast.success("Logout Sucessfull");
    } catch (error) {
      toast.error("Logout failed");
    }
  },
}));
