import Navbar from "../../components/Navbar/Navbar";
import Slideshow from "../../components/SlideShow/SlideShow";
import logo from "../../assets/images/logo.svg"
import "./about.scss"
const About = () => {
  return (
    <>
      <Slideshow/>
      <Navbar />
      <section className="container">
        <div className="align-content-center">
          <div className="about-us-content">
            <h2>
              From Gamers to <span>Gamers</span>
            </h2>
            <div className="about-us-description">
            Ola eu sou o paulo
            </div>
          </div>
          <div>
            <img
              className="logo"
              src={logo}
              alt="mancos Gaming"
            />
          </div>
        </div>
      </section>
      <div className="back-color">
        <section className="container2">
          <div className="align-content-center2">
            <div className="about-us-content2">
              <h2>What we give Players</h2>
              <div className="about-us-description">
            Ola eu sou o paulo
            </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
