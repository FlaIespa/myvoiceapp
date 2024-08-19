import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import VoiceList from './components/VoiceList';


const App = () => {
  return(
    <div>
      <Header />
      <MainContent />
      <VoiceList />
    </div>
  )
}
export default App;