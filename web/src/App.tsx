import React from 'react';
import './App.css';

import ImgSlide from './components/ImgSlide';
import TabBtn from './components/TabBtn';
import Hover from './components/Hover';
import Section from './components/Section';

import sectionImg from "./Image/light.jpg";


function App() {
  return (
    <div>
      <ImgSlide />
      <TabBtn/>
      <Section img={sectionImg} subject="SECTION TITLE" text="SECTION EXPLANATION" fontColor="white"/>
      <Hover />
    </div>
  );
}

export default App;
