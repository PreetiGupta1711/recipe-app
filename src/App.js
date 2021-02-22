import './App.css';
import Header from './common/Header';
import InfoTab from "./common/InfoTab";
import Landing from './components/Landing';
import Community from './components/Community';
import Location from './components/Location';
import OurMenu from './components/OurMenu';
import ContactUS from './components/ContactUs';
import Footer from './common/Footer';

function App() {
  return (
    <div className="main">
      <Header />
      <InfoTab />
      <Landing />
      <Community />
      <Location />
      <OurMenu />
      <ContactUS />
      <Footer />
    </div>
  );
}

export default App;
