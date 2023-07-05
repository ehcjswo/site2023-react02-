import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';

import MyInfo from './components/section/MyInfo';
import Slider from './components/section/Slider';
import Lecture from './components/section/Lecture';
import Program from './components/section/Program';
import Program2 from './components/section/Program2';
import Position from './components/section/Position';



function App() {
  return (
    <>
      <Header attr={'container'} />
      <Main>
          <MyInfo attr={'myInfo pt'}/>
          <Slider attr={'silder_wrap '}/>
          <Lecture attr={'lecture'}/>
          <Program attr={''}/>
          <Program2 attr={''}/>
          <Position attr={''}/>
      </Main>
      <Footer attr={'container'}/>
    </>
  );
}

export default App;
