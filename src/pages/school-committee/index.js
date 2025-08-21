import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
// import SchoolCommitteeSection from "../../../components/AboutUs/SchoolCommitteeSection"; // fixed path
import SEO from "../../../components/seo";

const SchoolCommitteePage = () => {
  return (
    <>
      <SEO pageTitle="School Committee" />
      <Header />
      {/* <SchoolCommitteeSection /> */}
      <Footer />
    </>
  );
};

export default SchoolCommitteePage;
