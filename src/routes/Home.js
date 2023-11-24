import Hero from "../components/Hero";
import Navbar from "../components/Navbar.js";
import Information from "../components/Information.js";
import Footer from "../components/Footer.js";
import homeImg from "../images/f.jpeg";

function Home (){
    return (
    <>
       <Navbar />
       <Hero 
       cName="hero"
       heroImg={homeImg}
       title="Your Partner in Financial Growth"
       text="Let's Dive In"
       />
       <Information />
       <Footer />
    </>
    );
}

export default Home;
