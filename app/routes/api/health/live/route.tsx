import type { LoaderFunctionArgs, MetaFunction } from 'react-router';

export function meta() {
  return [
    { title: "Healthcheck Live Endpoint" },
    {
      name: "description",
      content: "This app is the best",
    },
  ];
}


export function loader({ }: LoaderFunctionArgs) {
  return {
    status: "UP",
    timestamp: new Date().toISOString()
  }
}
