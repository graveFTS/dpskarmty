import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HomeInfo = ({ currentStage }) => {
  const stages = {
    1: {
      title: (
        <>
          👋 Hi, I'm{" "}
          <span className="text-indigo-500 font-bold">Dipsekhar</span>
          <br />
          <span className="text-gray-600 text-lg">
            A Software Engineer
          </span>
        </>
      ),
    },
    2: {
      text: "Contributed to different companies and projects, developing a broad and practical skill set.",
      link: "/about",
      btnText: "Learn More",
    },
    3: {
      text: "Over the years, I’ve guided several projects from concept to completion. The outcomes consistently created strong impact.",
      link: "/projects",
      btnText: "Visit My Portfolio",
    },
    4: {
      text: "Need expert support for your next build? I’m only a click away.",
      link: "/contact",
      btnText: "Let's Talk",
    },
  };

  const stage = stages[currentStage];

  if (!stage) return null;

  return (
    <div className="flex justify-center items-center px-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-8 text-center max-w-xl transition-all duration-500 hover:scale-105">
        
        {currentStage === 1 ? (
          <h1 className="text-3xl sm:text-4xl font-semibold text-white leading-snug">
            {stage.title}
          </h1>
        ) : (
          <>
            <p className="text-gray-600 text-lg mb-6">
              {stage.text}
            </p>

            <Link
              to={stage.link}
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-indigo-500/40"
            >
              {stage.btnText}
              <ArrowRight size={18} />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default HomeInfo;
