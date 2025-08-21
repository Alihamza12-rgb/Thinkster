import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import SEO from "../../../components/seo";

const SchoolCurriculumPage = () => {
  return (
    <>
      <SEO pageTitle="School Curriculum" />
      <Header />
      <BreadCrumb title="School Curriculum" />
      <div className="container py-20 text-center">
        <h2>Our School Curriculum</h2>
        <p>Details about the school curriculum will go here.</p>
      </div>
      <Footer />
    </>
  );
};

export default SchoolCurriculumPage;
