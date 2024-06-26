import python from "../assets/img/python.png";
import java from "../assets/img/java.png";
import C from "../assets/img/C.png";
import javascript from "../assets/img/javascript.svg";
import html from "../assets/img/html.png";
import sql from "../assets/img/sql.png";
import react from "../assets/img/react.png";
import css from "../assets/img/css.png";
import Carousel from 'react-multi-carousel';
import cp from '../assets/img/cp.png'
import 'react-multi-carousel/lib/styles.css';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Below are a selection of the programming languages I'm proficient in</p>
                        <h3>Languages</h3>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider" autoPlay autoPlaySpeed={2000}>
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={C} alt="Image" />
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={cp} alt="Image" />
                                <h5>C++</h5>
                            </div>
                        </Carousel>
                        <h3>Web Development</h3>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider" autoPlay autoPlaySpeed={2000}>
                            <div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
