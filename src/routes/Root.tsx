import { Link } from 'react-router-dom';
import Revealer from '../components/Revealer';
import LoremText from '../components/LoremText/LoremText';

export default function Root() {
  return (
    <Revealer>
      <div className="p-4 h-full w-full flex flex-col items-center justify-center">
        <h1 className="py-10 text-4xl">Home</h1>
        
        <LoremText length={8} />

        <div className="py-20">
          <Link to="/about" className="px-6 py-2 bg-slate-500 hover:bg-slate-600 transition-colors rounded shadow-sm">Go About</Link>
        </div>
      </div>
    </Revealer>
  );
}