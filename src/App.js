import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculate from './components/Calculate';
import Home from './components/Home';
import Quote from './components/Quote';
import Error from './components/Error';
import Nav from './components/Nav';

const App = () => (
  <>
    <div className="header">
      <div className="container">
        <Nav />
      </div>
    </div>
    <div className="body">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/calculator" element={<Calculate />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
    <div className="footer">
      <div className="container">
        <span>Microverse Math magicians: full website @2022</span>
      </div>
    </div>
  </>
);
export default App;
