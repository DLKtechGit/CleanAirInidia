import { NavLink } from "react-router-dom";
import CorporateBannerStyle from "./CorporateBanner.style";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import BgVideo from "../../../assets/images/videos/10800.mp4"; // <-- your mp4 here

const CorporateBanner = () => {
  return (
    <CorporateBannerStyle className="coroprate-banner-section">
      {/* video background */}
      <video
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={BgVideo} type="video/mp4" />
      </video>

      <div className="overlay">
        <ScrollAnimate delay={200}>
          <div className="corporate-banner-text">
            <h4 className="text-white text-center">We are</h4>
            <h1 className="text-white text-center">
              Clean Air <br />
              Systems
            </h1>
            <p className="text-white text-center">
              Clean Air Systems – Trusted cleanroom solutions with 35+ years expertise.
            </p>
            <NavLink to={"/contact-us"} className="corporate-banner-btn">
              <span className="btn-inner">
                <span className="btn-normal-text">Contact Us</span>
                <span className="btn-hover-text">Contact Us</span>
              </span>
            </NavLink>
          </div>
        </ScrollAnimate>
      </div>
    </CorporateBannerStyle>
  );
};

export default CorporateBanner;
