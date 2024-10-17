import React from 'react';
import Logoslider from '../components/Logoslider';
import Home_info from '../components/Home_info';
import img1 from '../images/homeimgnew-min.png';

const Home = () => {
  return (
    <div className='home-page'>
      <div className="helpline-container">
        <h3 className="marquee" style={{ color: 'crimson' }}>
          Take the case study test and earn badges/get certified.
        </h3>
      </div>
      <div className='home-allcontent'>
        <div className='home-project-intro-image'>
          <img src={img1} alt="Home project intro" />
        </div>
        <div className='home-project-intro-quote'>
          <h3>
            "In the journey towards equality, may you find fairness, understanding, and the strength to challenge biases."
          </h3>
        </div>
        <div className='home-project-intro'>
          <p>
            At Bias Busters, we hope you enjoy solving our case studies as much as we enjoy creating them. We provide a range of thought-provoking scenarios to help you reflect on biases and understand the importance of equality. After all, we all deserve to live in a world where fairness is the norm, not the exception.
          </p>
        </div>
        <Home_info />
        <Logoslider />
      </div>
    </div>
  );
};

export default Home;