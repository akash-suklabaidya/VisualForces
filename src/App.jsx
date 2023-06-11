import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Search from './Component/Search';
import FutureScope from './Component/FutureScope';
import Contact from './Component/Contact';
import SplitScreen from './Content/UserProfile/Split';
import ExportAll from './Charts/ExportAll';
import Footer from './Component/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/future" element={<FutureScope />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
      <Footer />
    </div>
  );
}

function Home() {
  return (
    <>
      <Search />
      <SplitScreen />
      <ExportAll />
    </>
  );
}

export default App;
