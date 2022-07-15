
import React from 'react'
import '../App.css';
import './Hero.css';
import {Button} from './Button';

function Hero() {
  return (
    <div className='hero-container'>
        <video loop autoPlay muted >
          <source src='videos/video-1.mp4' type='video/mp4'/>
        </video>
        <h1>Adventure awaits</h1>
        <p>What are you waiting for</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> Get Started</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'> Watch trailer <i className='far fa-play-circle'/></Button>
        </div>
    </div>
  );
};

export default Hero;
