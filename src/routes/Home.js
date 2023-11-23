import Hero from "../components/Hero";
import Navbar from "../components/Navbar.js";
import homeImg from "../images/f.jpeg";
function Home (){
    return (
        <>
       <Hero 
       cName="hero"
       heroImg={homeImg}
       title="Your Partner in Financial Growth"
       />
        </>
    );
}

export default Home;
