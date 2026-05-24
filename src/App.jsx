import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import Productviewer from './components/Productviewer.jsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Showcase from './components/Showcase.jsx';
import Performance from './components/Performance.jsx';


gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <Productviewer />
            <Showcase />
            <Performance />
        </main>
    );
};

export default App;
