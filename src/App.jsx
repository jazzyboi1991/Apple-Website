import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import Productviewer from './components/Productviewer.jsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <Productviewer />
        </main>
    );
};

export default App;
