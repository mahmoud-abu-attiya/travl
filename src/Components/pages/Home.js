import React from 'react';
import '../../App.css';
import Cards from '../../Components/Cards/Card';
import HeroSection from '../../Components/HeroSection/HeroSection';
import Footer from '../../Components/Footer/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;