import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
import course  from "../images/c.jpeg";
function Courses(){
    return (
        <>
         <Navbar />
            <Hero 
            cName="hero-mid"
            heroImg={course}
            title="Our Courses"/>
        </>
    )
}

export default Courses;