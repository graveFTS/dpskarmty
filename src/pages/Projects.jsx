import { Link } from "react-router-dom";
import { CTA } from "../components";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section className="max-container py-16">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-500 drop-shadow-lg">
          My{" "}
          <span className="blue-gradient_text drop-shadow font-semibold">
            Projects
          </span>
        </h1>

        <p className="mt-4 text-slate-700 max-w-2xl mx-auto leading-relaxed">
          As a Software Engineer, I develop data-driven applications that
          combine analytical intelligence with robust system design. My
          projects focus on scalable architecture, optimized data processing,
          and meaningful insight generation to support informed
          decision-making.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-16">
        {projects.map((project) => (
          <div
            key={project.name}
            className="group relative bg-white/90 backdrop-blur-lg border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-500/30"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-indigo-500/20 mb-6">
              <img
                src={project.iconUrl}
                alt={project.name}
                className='w-3/3 h-3/3 object-contain'
              />
            </div>

            {/* Content */}
            <h4 className="text-lg font-semibold text-cyan-500">
              {project.name}
            </h4>

            <p className="text-slate-700 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Optional Live Link */}
            {/* {project.link && (
              <div className="mt-5">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
                >
                  View Project →
                </Link>
              </div>
            )} */}
          </div>
        ))}
      </div>

      <hr className="border-slate-800 my-16" />

      <CTA />
    </section>
  );
};

export default Projects;
