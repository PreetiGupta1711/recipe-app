import './App.css';
import Header from './common/Header';
import Landing from './components/Landing';
import Community from './components/Community';
import Location from './components/Location';
import ContactUS from './components/ContactUs';
import Footer from './common/Footer';

function App() {
  return (
    <div className="main">
      <Header />
      <Landing />
      <Community />
      <Location />
      <ContactUS />
      <Footer />
    </div>
  );
}

export default App;
