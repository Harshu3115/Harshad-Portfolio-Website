import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import CTA_Banner from "../components/CTA_Banner";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Home() {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <ContactForm />
            <CTA_Banner />
            <Footer/>
        </>
    );
}

export default Home;