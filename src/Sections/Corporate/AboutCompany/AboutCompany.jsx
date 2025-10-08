import { useEffect } from "react";
import AboutCompanyStyleWrapper from "./AboutCompany.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Venobox from "venobox/dist/venobox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import aboutCompanyImg from "../../../assets/images/corporate/about_img.png";
import aboutCompanyImg2 from "../../../assets/images/corporate/laminar2.png";
import aboutCompanyImg3 from "../../../assets/images/corporate/modular-room2.jpg";
import aboutCompanyImg4 from "../../../assets/images/corporate/laminar9.jpg";
import aboutCompanyImg5 from "../../../assets/images/corporate/fume3.png";
import aboutCompanyImg6 from "../../../assets/images/corporate/Ste2.png";

import aboutCompanyImg from "../../../assets/images/corporate/about_img.png";
import playIcon from "../../../assets/images/corporate/play-icon.svg";
import fastIcon from "../../../assets/images/corporate/fast.svg";
import safeIcon from "../../../assets/images/corporate/safe.svg";
import anytimeIcon from "../../../assets/images/corporate/anytime.svg";
import anywhereIcon from "../../../assets/images/corporate/anywhere.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const AboutCompany = () => {
  useEffect(() => {
    new Venobox({
      selector: ".my-video-links",
    });
  }, []);

  // put your images in an array
  const companyImages = [
    
    aboutCompanyImg2,
   
    aboutCompanyImg4,
    aboutCompanyImg5,
    aboutCompanyImg6,
  ];

  // slider config
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // show 1 image at a time (you can change to 2,3…)
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
  };

  return (
    <AboutCompanyStyleWrapper className="about-our-company-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <ScrollAnimate delay={250}>
              <div className="about-company-left">
                <div className="about-company-inner">
                  <Slider {...settings}>
                    {companyImages.map((img, index) => (
                      <div key={index} className="about-company-img">
                        <img src={img} alt={`about-company-${index}`} />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </ScrollAnimate>
          </div>
          <div className="col-lg-6">
            <div className="about-company-right">
              <ScrollAnimate delay={200}>
                <SectionTitle
                  subtitle="Who we are"
                  title="About our company"
                  parentClass="corporate md-mb-0"
                />
              </ScrollAnimate>
              <ScrollAnimate delay={250}>
                <h3>Since 1991</h3>
                <p>
                  Clean Air Systems is an Indian cleanroom equipment manufacturer
                  known for engineering precision, reliability, and compliance
                  with global standards (ISO, GMP, WHO)…
                </p>
              </ScrollAnimate>
              <ScrollAnimate delay={300}>
                <ul>
                  <li>
                    <img src={fastIcon} alt="icon" />
                    <span>Fast</span>
                  </li>
                  <li>
                    <img src={safeIcon} alt="icon" />
                    <span>Secure</span>
                  </li>
                  <li>
                    <img src={anytimeIcon} alt="icon" />
                    <span>Anytime</span>
                  </li>
                  <li>
                    <img src={anywhereIcon} alt="icon" />
                    <span>Anywhere</span>
                  </li>
                </ul>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </AboutCompanyStyleWrapper>
  );
};

export default AboutCompany;
