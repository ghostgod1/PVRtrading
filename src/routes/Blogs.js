import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
import blog from "../images/g.jpeg";

function  Blogs(){
    return (
        <>
         <Navbar />
            <Hero 
            cName="hero-mid"
            heroImg={blog}
            title="Blogs"
            />
        </>
    )
}

export default Blogs;