import { Link } from 'react-router-dom';
import Revealer from '../components/Revealer/Revealer';
import LoremText from '../components/LoremText';

export default function About() {
  return (
    <Revealer>
      <div className="p-4 h-full w-full flex flex-col justify-center items-center">
        <h1 className="py-10 text-4xl">About</h1>
        <LoremText length={8} />

        <div className="py-20">
          <Link to="/" className="px-6 py-2 bg-slate-500 hover:bg-slate-600 transition-colors rounded shadow-sm">Go Home</Link>
        </div>
      </div>

    </Revealer>
  );
}
