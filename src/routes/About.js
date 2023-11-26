import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
import about from "../images/i.jpeg";
import Footer from "../components/Footer.js";


function About (){
    return (
        <>
            <Navbar />
            <Hero 
            cName="hero-mid"
            heroImg={about}
            title="About Us"
            />
        
        </>
    )
}

export default About;