import React from 'react';
import Hero from './components/Hero';
import './assets/fonts/KallistoBold.otf';
import './assets/fonts/KallistoMedium.otf';
import './assets/fonts/AeonikTRIAL-Bold.otf';
import './assets/fonts/AeonikTRIAL-Regular.otf';
import './sass/style.scss';
import Service from './components/Service';
import About from './components/About';
import MarqueeText from './components/MarqueeText';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Hero />
      <MarqueeText />
      <Service />
      <About />
      <Footer />
    </>
  );
}

export default App;
