import './App.css';
import Header from './common/Header';
import Landing from './components/Landing';
import Community from './components/Community';
import Location from './components/Location';
import Footer from './common/Footer';

function App() {
  return (
    <div className="main">
      <Header />
      <Landing />
      <Community />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
