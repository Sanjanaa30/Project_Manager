import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/auth/auth_layout.tsx", [
    index("routes/root/home.tsx"),
    route("sign-in", "routes/auth/sign_in.tsx"),
    route("sign-up", "routes/auth/sign_up.tsx"),
    route("forgot-password", "routes/auth/forgot_password.tsx"),
    route("reset-password", "routes/auth/reset_password.tsx"),
    route("verify-email", "routes/auth/verify_email.tsx"),
  ]),
] satisfies RouteConfig;
