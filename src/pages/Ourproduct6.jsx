import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import StartBuildingComponent from "../Components/StartBuilding/StartBuildingComponent";
import FooterTwo from "../Sections/Footer/FooterTwo";
import Breadcumbs from "../Components/Breadcumbs/Breadcumbs";
import ServiceList from "../Sections/OurServices/ServiceList/ServiceList";
import OurSkil from "../Sections/OurServices/OurSkil/OurSkil";
import CoreFeature from "../Sections/OurServices/CoreFeature/CoreFeature";
import ProductPage2 from "../Sections/OurServices/ServiceList/Biosafety";
import ProductPage3 from "../Sections/OurServices/ServiceList/Fume Exhaust Hood";
import ProductPage4 from "../Sections/OurServices/ServiceList/Air";
import ProductPage5 from "../Sections/OurServices/ServiceList/Powder";
import ProductPage6 from "../Sections/OurServices/ServiceList/box";

const OurProduct6 = () => {
  return (
    <Layout pageTitle="Clean Air System - Our Products">
      <Header variant="main-header" />
      <Breadcumbs title="Static and Dynamic Pass Box" />
      <ProductPage6 />
      {/* <OurSkil /> */}
      {/* <CoreFeature /> */}
      <StartBuildingComponent />
      <FooterTwo />
    </Layout>
  );
};

export default OurProduct6;
