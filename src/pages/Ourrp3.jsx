import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import StartBuildingComponent from "../Components/StartBuilding/StartBuildingComponent";
import FooterTwo from "../Sections/Footer/FooterTwo";
import Breadcumbs from "../Components/Breadcumbs/Breadcumbs";
import ServiceList from "../Sections/OurServices/ServiceList/ServiceList";
import OurSkil from "../Sections/OurServices/OurSkil/OurSkil";
import CoreFeature from "../Sections/OurServices/CoreFeature/CoreFeature";
import ProductPage1 from "../Sections/OurServices/ServiceList/Laminar";
import Rp1 from "../Sections/OurServices/ServiceList/Rp1";
import FumeHoodPage from "../Sections/OurServices/ServiceList/Rp2";
import BiosafetyCabinetPage from "../Sections/OurServices/ServiceList/Rp3";

const Ourrp3 = () => {
  return (
    <Layout pageTitle="Clean Air System - Our Products">
      <Header variant="main-header" />
      <Breadcumbs title="Recommended Practices – Biosafety Cabinets" />
      <BiosafetyCabinetPage />
      {/* <OurSkil /> */}
      {/* <CoreFeature /> */}
      <StartBuildingComponent />
      <FooterTwo />
    </Layout>
  );
};

export default Ourrp3;
