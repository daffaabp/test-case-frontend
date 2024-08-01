import React from 'react';
import HeaderNavigation from './components/HeaderNavigation';
import MeetYourTalent from './components/MeetYourTalent';
import TrustedPartner from './components/TrustedPartner';
import Excellence from './components/Excellence';
import MaximizeYourPotential from './components/MaximizeYourPotential';
import NeedsHere from './components/NeedsHere';
import Comprehensive from './components/Comprehensive';
import OurClients from './components/OurClients';
import Questions from './components/Questions';
import Footer from './components/Footer';
import Schedule from './components/Schedule';


function App() {
  return (
    <>
      <HeaderNavigation />
      <MeetYourTalent />
      <TrustedPartner />
      <Excellence />
      <MaximizeYourPotential />
      <NeedsHere />
      <Comprehensive />
      <OurClients />
      <Questions />
      <Schedule />
      <Footer />
    </>
  );
}

export default App;
