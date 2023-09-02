import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Navbar from './component/Navbar';

function App() {
  

  return (
    <div className="">
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/React-Tour-Places-App' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>


    </div>
  );
}

export default App;
