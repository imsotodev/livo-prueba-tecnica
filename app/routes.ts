import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./common/components/layouts/ScreenLayout.tsx", [
    layout("./common/components/layouts/AuthLayout.tsx", [
      index("routes/home.tsx"),
    ]),
    route("entrar", "routes/entrar.tsx"),
  ]),
] satisfies RouteConfig;
