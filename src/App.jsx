import { Header} from "./components/header/header";
import { Nav } from './components/nav/nav';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
function App() {

  return (
    <div>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>  
    </div>
  )
}

export default App;
