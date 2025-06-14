import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [index("routes/home/page.tsx"),
  ...prefix('api', [
  ...prefix('health', [
    route('live', "routes/api/health/live/route.tsx"),
    route('ready', "routes/api/health/ready/route.tsx")
  ])
])] satisfies RouteConfig;
