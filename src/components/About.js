import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4680  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>I'm a first-generation student studying Computer Science at the <b>University of California, Riverside</b>, graduating in June 2027.</p>
          <p>
            I've always been passionate about technology and finding solutions to improve the world.  
          </p>
          <p>
            I have experience with fullstack development and currently seeking Software Engineering internship positions for the Summer 2025! 
          </p>
        </div>
        <div className="about-image">
          <Slider {...settings}>
            <div>
              <img src="about1.JPG" alt="Brandon Nguyen 1" />
            </div>
            <div>
              <img src="about2.JPG" alt="Brandon Nguyen 2" />
            </div>
            <div>
              <img src="about3.jpg" alt="Brandon Nguyen 3" />
            </div>
            <div>
              <img src="about4.JPG" alt="Brandon Nguyen 3" />
            </div>
            <div>
              <img src="about5.JPG" alt="Brandon Nguyen 3" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default About;