import Navbar from './component/Navbar.js';
import Footer from './component/Footer.js';
import Hero from './component/Hero.js';
import Content from './component/Content.js';
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Hero/>

      <Content/>
    
      <Footer/>
    </div>
  );
};

export default App;