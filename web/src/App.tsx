import React from 'react';
import './App.css';

import ImgSlide from './components/ImgSlide';
import TabBtn from './components/TabBtn';
import Overlay from './components/Overlay';
import Section from './components/Section';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Login from './components/Login';
import ScrollEvent from './components/ScrollEvent';
import Swipe from './components/Swipe';

import sectionImg from "./Image/light.jpg";
import Sidebar from './components/Sidebar';
import Sticky from './components/Sticky';


function App() {
  return (
    <div>
      <Login/>
      <Navbar />
      <Sidebar/>
      <ImgSlide />
      <TabBtn/>
      <Section img={sectionImg} subject="SECTION TITLE" text="SECTION EXPLANATION" fontColor="white"/>
      <Overlay />
      {/* <Sticky /> */}
      <Swipe />
      <Footer />
      <ScrollEvent />
    </div>
  );
}

export default App;
