import { Button } from '~/components/ui/button';
import type { Route } from './+types/page';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Canary: Mock App" },
    { name: "description", content: "Welcome to Canary!" },
  ];
}

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col gap-2 justify-center items-center'>
      <div className='text-center'>
        <h1 >Hello, World!</h1>
        <p>Canary App</p>
      </div>
      <Button>This is a button.</Button>
    </div>
  );
}
