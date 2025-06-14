import type { LoaderFunctionArgs } from "react-router"

export function meta() {
  return [
    { title: "Healthcheck Live Endpoint" },
    {
      name: "description",
      content: "This app is the best",
    },
  ]
}

export function loader({ }: LoaderFunctionArgs) {
  return {
    status: "UP",
    timestamp: new Date().toISOString(),
    checks: {
      database: {
        status: "UP",
        responseTime: `${Math.random()}ms`,
      },
      redis: {
        status: "UP",
        responseTime: `${Math.random()}ms`,
      },
      external_service: {
        status: "DOWN",
        error: "Connection timeout",
      },
    },
    overall: "DOWN",
  }
}
