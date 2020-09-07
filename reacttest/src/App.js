import React from 'react';
import logo from './logo.svg';
import './App.css';
import {LatestNews} from "./components/LatestNews";
import { NavigationBar } from './components/NavigationBar';
import { Slider } from './components/Slider';
import { AboutMe } from './components/AboutMe';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Slider />
      <LatestNews />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
