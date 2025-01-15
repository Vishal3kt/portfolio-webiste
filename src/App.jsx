import React from 'react';
import './App.scss';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import 'remixicon/fonts/remixicon.css'
import MouseAura from './components/MouseAura';
import ScrollToTopButton from './components/ScrollToTopButton';
import FramerEffect from './components/FramerEffect';

function App() {

  return (
    <Layout>
      {/* <FramerEffect /> */}
      {/* <MouseAura /> */}
      <ScrollToTopButton />
      <HomePage />
    </Layout>
  );
}

export default App;