import ThemeToggle from "./ThemeToggle";
import History from "./History";
import { useWorkDuration } from "../hooks/useWorkDuration";

const Portfolio = () => {
  const workDuration = useWorkDuration();
  
  const workHistory = [
    {
      title: "NetApp",
      description: "Software Engineer",
      period: "2024-2025"
    },
    {
      title: "Scale AI",
      description: "AI Training Engineer",
      period: "2024"
    },
    {
      title: "Anvil",
      description: "Software Engineer",
      period: "2020-2023"
    },
  ];

  const projects = [
    {
      title: <a href="https://polylogue.dev" target="_blank" rel="noopener" className="hover:underline">Polylogue</a>,
      description: "Visualize & engage in non-linear dialogue with LLMs"
    }
  ]

  return (
    <div className="container mx-auto max-w-2xl px-6 py-16 min-h-screen bg-[#F5F5F5] dark:bg-[#1A1A1A] text-[#333333] dark:text-[#FFFFFF]">
      <div className="flex items-start">
        <div className="mr-20 pt-2">
          <ThemeToggle />
        </div>
        
        <div className="page-section w-[65%]">
          <h1 className="text-2xl font-semibold mb-10">Hi, I'm Winggo.</h1>
          
          <p className="text-md mb-6">
            I've been a developer for the last {workDuration}.
          </p>

          <p className="text-md mb-6">
            I live in San Francisco by way of Santa Cruz. Born in Hong Kong.
          </p>
          
          <p className="text-md mb-12">
            Keep up with me on <a href="https://instagram.com/winggotse" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>,
            or say hi at <a href="mailto:winggo.tse@gmail.com" className="hover:underline">winggo.tse@gmail.com</a>.
          </p>
          
          <History title="PREVIOUSLY" entries={workHistory} />
          <History title="PROJECTS" entries={projects} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
