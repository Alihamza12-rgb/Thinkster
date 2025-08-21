/* eslint-disable react/no-unknown-property */
import React from "react";

// Reusable component for a single curriculum item
const CurriculumItem = ({ type, title, duration, questions }) => {
  const icons = {
    reading: (
      <svg className="document" viewBox="0 0 24 24">
        <path
          className="st0"
          d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z"
        />
        <polyline className="st0" points="14,2 14,8 20,8 " />
        <line className="st0" x1="16" y1="13" x2="8" y2="13" />
        <line className="st0" x1="16" y1="17" x2="8" y2="17" />
        <polyline className="st0" points="10,9 9,9 8,9 " />
      </svg>
    ),
    video: (
      <svg viewBox="0 0 24 24">
        <polygon className="st0" points="23,7 16,12 23,17 " />
        <path
          className="st0"
          d="M3,5h11c1.1,0,2,0.9,2,2v10c0,1.1-0.9,2-2,2H3c-1.1,0-2-0.9-2-2V7C1,5.9,1.9,5,3,5z"
        />
      </svg>
    ),
    audio: (
      <svg viewBox="0 0 16 16">
        <path
          className="st0"
          d="M2,12V8c0-3.3,2.9-6,6.4-6s6.4,2.7,6.4,6v4"
        />
        <path
          className="st0"
          d="M14.8,12.7c0,0.7-0.6,1.3-1.4,1.3h-0.7c-0.8,0-1.4-0.6-1.4-1.3v-2c0-0.7,0.6-1.3,1.4-1.3h2.1V12.7z M2,12.7 C2,13.4,2.6,14,3.3,14H4c0.7,0,1.3-0.6,1.3-1.3v-2c0-0.7-0.6-1.3-1.3-1.3H2V12.7z"
        />
      </svg>
    ),
  };

  return (
    <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
      <div className="course__curriculum-info">
        {icons[type]}
        <h3>
          <span>{type.charAt(0).toUpperCase() + type.slice(1)}:</span> {title}
        </h3>
      </div>
      <div className="course__curriculum-meta">
        {duration && (
          <span className="time">
            <i className="icon_clock_alt"></i> {duration}
          </span>
        )}
        {questions && <span className="question">{questions} questions</span>}
      </div>
    </div>
  );
};

// Reusable component for a week's accordion
const WeekAccordion = ({ week, items, defaultOpen }) => {
  const collapseId = `week-${week}-content`;
  const headingId = `week-${week}`;

  return (
    <div className="course__curriculum mt-50">
      <div className="accordion" id={`course__accordion-${week}`}>
        <div className="accordion-item mb-50">
          <h2 className="accordion-header" id={headingId}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${collapseId}`}
              aria-expanded={defaultOpen}
              aria-controls={collapseId}
            >
              Week {week}{" "}
              <i
                className="fa-solid fa-chevron-down ms-auto"
                style={{ fontSize: "0.75rem" }}
              ></i>
            </button>
          </h2>
          <div
            id={collapseId}
            className={`accordion-collapse collapse ${defaultOpen ? "show" : ""}`}
            aria-labelledby={headingId}
            data-bs-parent={`#course__accordion-${week}`}
          >
            <div className="accordion-body">
              {items.map((item, idx) => (
                <CurriculumItem key={idx} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main component
const CurriculumList = () => {
  const weeks = [
    {
      week: 1,
      defaultOpen: true,
      items: [
        { type: "reading", title: "Ut enim ad minim veniam", duration: "14 minutes", questions: 2 },
        { type: "video", title: "Greetings and introduction", duration: "15 minutes" },
        { type: "audio", title: "Interactive lesson", duration: "7 minutes", questions: 3 },
        { type: "reading", title: "Ut enim ad minim veniam", duration: "22 minutes" },
      ],
    },
    {
      week: 2,
      defaultOpen: true,
      items: [
        { type: "reading", title: "Ut enim ad minim veniam", duration: "14 minutes" },
        { type: "video", title: "Greetings and introduction", duration: "15 minutes" },
        { type: "audio", title: "Interactive lesson", duration: "7 minutes", questions: 2 },
        { type: "reading", title: "Ut enim ad minim veniam", duration: "22 minutes" },
      ],
    },
  ];

  return (
    <section className="course__area pt-15 pb-25">
      <div className="container">
        {weeks.map((week, idx) => (
          <WeekAccordion key={idx} {...week} />
        ))}
      </div>

      <style jsx>{`
        /* Hide default accordion arrow */
        .course__curriculum .accordion-button::after {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default CurriculumList;
