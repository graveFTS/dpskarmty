import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container mx-auto px-6 py-16 relative">

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-500/20 blur-[140px] rounded-full -z-10" />

      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-500 drop-shadow-lg">
          Hello, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Dipsekhar
          </span>{" "}
          👋
        </h1>

        <p className="mt-6 text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
          Programmer 👨‍💻 with strong technical expertise and a proven track
          record of building scalable and impactful projects.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-24">
        <h3 className="text-2xl font-semibold text-slate-600 text-center drop-shadow-md">
          My Skills
        </h3>

        <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-6 transition-all duration-300 flex items-center justify-center"
            >
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-28">
        <h3 className="text-2xl font-semibold text-slate-600 text-center drop-shadow-md">
          Work Experience
        </h3>

        <p className="mt-4 text-slate-600 text-center max-w-2xl mx-auto">
          Professional journey and project contributions that helped me grow
          as a developer.
        </p>

        <div className="mt-16">
          <VerticalTimeline lineColor="#475569">
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{
                  background: experience.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                icon={
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                }
                contentStyle={{
                  background: "rgba(15, 23, 42, 0.75)", // darker glass
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "18px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                  color: "#f1f5f9",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgba(255,255,255,0.15)",
                }}
              >
                <h3 className="text-xl font-semibold text-slate-100">
                  {experience.title}
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  {experience.company_name}
                </p>

                <ul className="mt-4 space-y-2 list-disc ml-5">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-slate-300 text-sm leading-relaxed"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

            {/* Certifications Section */}
      <div className="mt-28">
        <h3 className="text-2xl font-semibold text-slate-600 text-center drop-shadow-md">
          Additional Qualifications & Certifications
        </h3>

        <div className="mt-12 grid md:grid-cols-2 gap-8">

          {/* Coursera Certificate */}
          <div className="group relative bg-white/100 backdrop-blur-lg border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-500/30">
            <h4 className="text-lg font-semibold text-slate-500">
              Generative AI for Software Development
            </h4>
            <p className="text-cyan-400 text-sm mt-1">
              Coursera • April 2025
            </p>
            <p className="mt-4 text-slate-700 text-sm leading-relaxed">
              Fundamentals of generative AI, prompt engineering, code generation
              with LLMs, AI-assisted debugging, test case generation, code
              refactoring, AI ethics, and practical tool integration.
            </p>
          </div>

          {/* Infosys Certificate */}
          <div className="group relative bg-white/100 backdrop-blur-lg border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-500/30">
            <h4 className="text-lg font-semibold text-slate-500">
              Python Programming
            </h4>
            <p className="text-cyan-400 text-sm mt-1">
              Infosys Springboard • September 2023
            </p>
            <p className="mt-4 text-slate-700 text-sm leading-relaxed">
              Introduction to Python, data types, control structures, functions,
              modules, file handling, object-oriented programming, error
              handling, NumPy, pandas, and real-world project development.
            </p>
          </div>

        </div>
      </div>


      {/* CTA */}
      <div className="mt-24 border-t border-white/10 pt-12">
        <CTA />
      </div>
    </section>
  );
};

export default About;
