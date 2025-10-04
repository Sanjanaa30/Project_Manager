import { postData } from "@/lib/fetch-util";
import type { SignUpFormData, SignInFormData, AuthResponse } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const useSignUpMutation = () => {
  return useMutation({
    mutationFn: (data: SignUpFormData) => postData<AuthResponse>("/auth/register", data),
    onSuccess: (data) => {
      toast.success("Account created successfully!");
      // Store token and user data
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      }
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || "Sign up failed. Please try again.";
      toast.error(message);
    },
  });
};

export const useSignInMutation = () => {
  return useMutation({
    mutationFn: (data: SignInFormData) => postData<AuthResponse>("/auth/login", data),
    onSuccess: (data) => {
      toast.success("Welcome back!");
      // Store token and user data
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      }
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || "Sign in failed. Please check your credentials.";
      toast.error(message);
    },
  });
};
