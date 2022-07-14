
import React from 'react'
import './App.css'
import './Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
        <video src='./assets/videos/video-2.mp4' autpPlay loop muted />
        <h1>Adventure awaits</h1>
        <p>What are you waiting for</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn-outline' buttonSize='btn-large'> Get Started</Button>
            <Button className='btns' buttonStyle='btn-primary' buttonSize='btn-large'> Watch trailer <i className='far fa-pay-circle'/></Button>
        </div>
    </div>
  )
}

export default Hero
