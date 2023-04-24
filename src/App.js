
import './App.css';
import Header from'./Navigation/Navigation';
import Home from './Home/Home';
import About from './About/About';
import Service from './Service/Service';
import OurCoreValue from './OurCoreValue/OurCoreValue';
import Team from './Team/Team';
import Footer from './Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Service/>
      <OurCoreValue/>
      <Team/>
      <Footer/>
      
    </div>
  );
}

export default App;
