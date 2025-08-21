import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
// import SchoolCommitteeSection from "../../../components/AboutUs/SchoolCommitteeSection"; // 
import SEO from "../../../components/seo";

const SchoolCommitteeSchoolPage = () => {
  return (
    <>
      <SEO pageTitle="School Committee - School" />
      <Header />
      {/* <SchoolCommitteeSection /> */}
      <Footer />
    </>
  );
};

export default SchoolCommitteeSchoolPage;
