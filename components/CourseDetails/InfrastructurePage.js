/* eslint-disable react/no-unknown-property */
"use client"; // Ensures client-side rendering

import React, { useState } from "react";
import Image from "next/image";

let pagetitle;

const InfrastructurePage = () => {
  const accordionItems = [];

  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="infrastructure-container ">
      {/* Top Image Section */}
      <div className="top-image">
        <Image
          src="/assets/img/campus1/cam-2.jpg"
          alt="Our Infrastructure"
          width={1200}
          height={500}
          layout="responsive"
          objectFit="cover"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="content">
        <h2 className="page-title">Khalil Zai Model School – At a Glance</h2>
        <p className="intro">
          Khalil Zai Model School is a progressive educational institution
          dedicated to nurturing the intellectual, moral, and physical growth of
          its students. Established with the vision of providing quality
          education in a disciplined and supportive environment, the school
          blends modern teaching methods with strong cultural and ethical
          values. We offer a well-rounded curriculum from early years to higher
          grades, focusing on academic excellence, critical thinking,
          creativity, and character building. Our qualified and passionate
          faculty members are committed to helping every child reach their full
          potential. Key Highlights:  Curriculum: A balanced program combining
          core academic subjects with arts, sports, and extracurricular
          activities.  Faculty: Experienced, trained, and dedicated teachers.
           Facilities: Spacious classrooms, science & computer labs, library,
          and safe play areas.  Values: Emphasis on respect, responsibility,
          discipline, and community service.  Parent Partnership: Strong
          engagement with parents to support students’ growth. Our mission is to
          prepare students not just for exams, but for life — equipping them
          with the knowledge, skills, and character to become responsible global
          citizens.
        </p>

        {/* Accordion List */}
        <div className="accordion pb-30">
          {accordionItems.map((item) => (
            <div key={item.id} className="accordion-item">
              <button
                className="accordion-header"
                onClick={() => toggleAccordion(item.id)}
                aria-expanded={openAccordion === item.id}
              >
                <h3 className="accordion-title">{item.title}</h3>
                <span className="accordion-icon">
                  {openAccordion === item.id ? "−" : "+"}
                </span>
              </button>
              <div
                className={`accordion-body ${
                  openAccordion === item.id ? "open" : ""
                }`}
              >
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styled JSX for Better Performance */}
      <style jsx>{`
        .infrastructure-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .top-image {
          margin-bottom: 30px;
        }
        .content {
          padding: 0 20px;
        }
        .page-title {
          font-size: 28px;
          color: #333;
          font-weight: bold;
          text-align: center;
          margin-bottom: 15px;
        }
        .intro {
          font-size: 16px;
          color: #555;
          line-height: 1.6;
          text-align: center;
          margin-bottom: 30px;
        }
        .accordion {
          border-top: 1px solid #ddd;
        }
        .accordion-item {
          border-bottom: 1px solid #ddd;
        }
        .accordion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 15px;
          background: #f8f9fa;
          border: none;
          cursor: pointer;
          text-align: left;
        }
        .accordion-title {
          font-size: 18px;
          color: #333;
          margin: 0;
        }
        .accordion-icon {
          font-size: 24px;
          font-weight: bold;
          color: #3d6ce7;
        }
        .accordion-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-in-out;
          background: #fff;
          font-size: 16px;
          color: #555;
          padding: 0 15px;
        }
        .accordion-body.open {
          max-height: 300px;
          padding: 15px;
        }
        @media (max-width: 768px) {
          .page-title {
            font-size: 24px;
          }
          .intro,
          .accordion-body {
            font-size: 14px;
          }
          .accordion-title {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default InfrastructurePage;
