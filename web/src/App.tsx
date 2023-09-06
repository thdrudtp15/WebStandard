import React from 'react';
import './App.css';

import ImgSlide from './components/ImgSlide';
import TabBtn from './components/TabBtn';
import Hover from './components/Hover';
import Section from './components/Section';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import sectionImg from "./Image/light.jpg";


function App() {
  return (
    <div>
      <Navbar />
      <ImgSlide />
      <TabBtn/>
      <Section img={sectionImg} subject="SECTION TITLE" text="SECTION EXPLANATION" fontColor="white"/>
      <Hover />
      <div style={{height : "200px"}}></div>
      <Footer />
    </div>
  );
}

export default App;
