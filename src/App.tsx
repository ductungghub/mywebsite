import './App.css';
import About from './components/About';
import Home from './components/Home';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  return (
    <Router>
      <header className="header-main">
        <a className="site-title" href="/">
          HOME
        </a>
        <a href="/haui">HAUI</a>
        <div style={{ color: 'white', fontWeight: '200' }}>
          {month}月{day}日
        </div>
      </header>
      <div className="page">
        <Routes>
          <Route path="/haui" element={<Home />} />
        </Routes>
      </div>

      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
