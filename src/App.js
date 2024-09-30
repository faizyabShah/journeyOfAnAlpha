import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Mainpage from './components/Mainpage';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App no-horizontal-scrollbar">
      <Navbar/>
      <Mainpage/>
      <Gallery/>
    </div>
  );
}

export default App;
