import { createRoot } from 'react-dom/client';
import './globals.css';
import { Button } from './components/ui/button';
import { Bell } from 'lucide-react';

function App() {
  return (
    <div className='p-4'>
      <h1 className='text-primary mb-1'>PIMA UJUZI</h1>

      <Button size="lg">
        Default Button <Bell className='ml-2' />
      </Button>

    </div>
  );
}

const root = createRoot(document.getElementById('root')!)
root.render(
  <App />
);
