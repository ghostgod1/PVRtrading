import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import about from "../images/e.jpeg";

function Contact (){
    return (
        <>
            <Navbar />
            <Hero 
            cName="hero-mid"
            heroImg={about}
            title="Contact Us"
            />

        </>
    )
}

export default Contact;