import Link from "next/link";
import Image from "next/image";

const achievementsData = [
  {
    id: "1",
    title: "Scholarship Test Winners",
    description:
      "Scholarship Recieving Cash Prizes and Full 100% Scholarship.",
    image: "/assets/img/blog/ach-1.jpg",
    category: "Scholarship",
    year: "2025",
  },
  {
    id: "2",
    title: "Scholarship Test Winners",
    description:
       "Scholarship Recieving Cash Prizes and Full 100% Scholarship.",
    image: "/assets/img/blog/ach-2.jpg",
    category: "Scholarship",
    year: "2025",
  },
  {
    id: "3",
    title: "Scholarship Test Winners",
    description:
       "Scholarship Recieving Cash Prizes and Full 100% Scholarship.",
    image: "/assets/img/blog/ach-3.jpg",
    category: "Test",
    year: "2025",
  },
  {
    id: "4",
    title: "Mega Scholarship Test Winners",
    description:
       "Scholarship Recieving Cash Prizes and Full 100% Scholarship.",
    image: "/assets/img/blog/ach-4.jpg",
    category: "Test",
    year: "2025",
  },
  {
    id: "5",
    title: "Mega Scholarship Test Winners",
    description:
       "Scholarship Recieving Cash Prizes and Full 100% Scholarship.",
    image: "/assets/img/blog/ach-6.jpg",
    category: "Test",
    year: "2025",
  },
  {
    id: "6",
    title: "Mega Scholarship Test Winners",
    description:
       "Scholarship Recieving Cash Prizes and Full 100% Scholarship.",
    image: "/assets/img/blog/ach-5.jpg",
    category: "Test",
    year: "2025",
  },
];

const AchievementCard = ({ achievement }) => {
  return (
    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
      <div className="achievement__item white-bg transition-3 mb-30">
        <div
          className="achievement__thumb w-img fix course_thumb_height"
          style={{ position: "relative", width: "100%", height: "300px" }}
        >
          <img
            src={achievement.image}
            alt={achievement.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="achievement__content p-relative pt-3 pb-3 px-3">
          <div className="achievement__tag mb-2">
            <span>{achievement.category}</span>
          </div>
          <h3 className="achievement__title mb-2">{achievement.title}</h3>
          <p className="mb-2">{achievement.description}</p>
          <div className="achievement__bottom d-sm-flex align-items-center justify-content-between">
            <p className="achievement__year mb-0">{achievement.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SchoolAchievements = () => {
  return (
    <section className="course__area grey-bg-3 pt-40">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="section__title-wrapper text-center mb-60">
              <span className="section__title-pre">Recognizing Excellence</span>
              <h2 className="section__title section__title-44">
                Awards & Achievements
              </h2>
              <p>
                Our prestigious national school has been honored with awards in
                sports, academic competitions, olympiads, cultural fests, and more.
              </p>
            </div>
          </div>
        </div>
        <div className="row">{achievementsData.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}</div>
      </div>
    </section>
  );
};

export default SchoolAchievements;
