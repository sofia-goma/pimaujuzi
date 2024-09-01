import { createRoot } from 'react-dom/client';
import { Button } from './components/ui/button';
import { Bell } from 'lucide-react';
import { ThemeProvider } from './providers/theme-provider';
import { ModeToggle } from './components/mode-toggle';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DashboardLayout from './components/layouts/dashboard-layout';
import './globals.css';

function App() {
  const message: IMessage = { message: "Hello world!" }
  console.log(message);
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">

      <div className='p-4'>
        <ModeToggle />
        <h1 className='text-primary mb-1'>PIMA UJUZI</h1>

        <Button size="lg">
          Default Button <Bell className='ml-2' />
        </Button>

      </div>
    </ThemeProvider>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />
  }
]);

const root = createRoot(document.getElementById('root')!)
root.render(
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>
);
