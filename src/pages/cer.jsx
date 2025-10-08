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
import CertificatesPage from "../Sections/OurServices/ServiceList/Accreditation";

const Cer = () => {
  return (
    <Layout pageTitle="Clean Air System - Our Products">
      <Header variant="main-header" />
      <Breadcumbs title="Accreditation" />
      <CertificatesPage />
      {/* <OurSkil /> */}
      {/* <CoreFeature /> */}
      <StartBuildingComponent />
      <FooterTwo />
    </Layout>
  );
};

export default Cer;
