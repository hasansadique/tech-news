import './App.css';
import { Search } from './components/Search';
import { Pagination } from './components/Pagination';
import { Stories } from './components/Stories';

const App = () => {
  return (
    <div className='bg-[#6a94f0] h-[100%]'>
      <div className="">
        <Search />
        <Pagination />
        <Stories />
      </div>
    </div>
  );
}

export default App;
