import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
export default function Hero() {
  return (
    <>
    <Button>DASH BORD</Button>
      <h1>LANDING PAGE</h1>
      <Link to="/dashboard">DASHBOARD</Link>
    </>
  );
}
