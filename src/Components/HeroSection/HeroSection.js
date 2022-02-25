import React from 'react';
import '../../App.css';
import { Button } from '../Navbar/Button/Button';
import './HeroSection.css';
import heroVideo from "../../videos/video-1.mp4"

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={heroVideo} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className="fa-solid fa-circle-play"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;