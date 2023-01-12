import java from "../assets/img/java.png";
import mysql from "../assets/img/mysql.svg";
import springboot from "../assets/img/springboot.svg";
import linux from "../assets/img/linux.svg";
import redis from "../assets/img/redis.svg";
import docker from "../assets/img/docker.svg";
import nginx from "../assets/img/nginx.svg";
import vue from "../assets/img/vue.svg";
import html from "../assets/img/html.svg";
import javascript from "../assets/img/javascript.svg";
import css from "../assets/img/css.svg";
import rabbitmq from "../assets/img/rabbitmq.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 7000, min: 4500 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 4500, min: 1024 },
      items: 5
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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={springboot} alt="Image" />
                                <h5>Spring</h5>
                                <h5>SpringMVC</h5>
                                <h5>SpringBoot</h5>
                                <h5>SpringCloud</h5>
                                <h5>SpringCloud Alibaba</h5>
                            </div>
                            <div className="item">
                                <img src={linux} alt="Image" />
                                <h5>Linux</h5>
                            </div>
                            <div className="item">
                                <img src={redis} alt="Image" />
                                <h5>Redis</h5>
                            </div>
                            <div className="item">
                                <img src={docker} alt="Image" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <img src={nginx} alt="Image" />
                                <h5>Nginx</h5>
                            </div><div className="item">
                                <img src={vue} alt="Image" />
                                <h5>Vue</h5>
                            </div><div className="item">
                                <img src={html} alt="Image" />
                                <h5>Html</h5>
                            </div><div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={rabbitmq} alt="Image" />
                                <h5>RabbitMQ</h5>
                            </div>
                            
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
