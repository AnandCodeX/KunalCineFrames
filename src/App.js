
import './App.css';
import About from './components/About';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import Gallary from './components/Gallary';
import Main from './components/Main';
import Navebar from './components/Navebar';

function App() {
  return (
    <div>
    <Navebar/>
    <Main/>
    <Gallary/>
    <About/>
    <Contactus/>
    <Footer/>
    </div>
  );
}

export default App;
