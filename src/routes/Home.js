import Hero from "../components/Hero";
import Navbar from "../components/Navbar.js";
import Information from "../components/Information.js";
import Test from "../components/Test.js";
import Footer from "../components/Footer.js";
import homeImg from "../images/f.jpeg";

function Home (){
    return (
    <>
       <Navbar />
       <Hero 
       cName="hero"
       heroImg={homeImg}
       title="PVR Financial Services"
       text="Connect with us"
       button="Enquiry"
       />
       <Information />
       <Test />
       <Footer />
    </>
    );
}

export default Home;
