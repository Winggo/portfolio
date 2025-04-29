import ThemeToggle from "./ThemeToggle";
import History from "./History";
import { useWorkDuration } from "../hooks/useWorkDuration";

const Portfolio = () => {
  const workDuration = useWorkDuration();
  
  const workHistory = [
    {
      title: <a href="https://netapp.com" target="_blank" rel="noopener noreferrer" className="hover:underline">NetApp</a>,
      description: "Software Engineer",
      period: "2024-2025"
    },
    {
      title: <a href="https://scale.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Scale AI</a>,
      description: "AI Training Engineer",
      period: "2024"
    },
    {
      title: <a href="https://useanvil.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Anvil</a>,
      description: "Software Engineer",
      period: "2020-2023"
    },
  ];

  const projects = [
    {
      title: <a href="https://polylogue.dev" target="_blank" rel="noopener" className="hover:underline">Polylogue</a>,
      longDescription: "Visualize & engage in non-linear dialogue with LLMs"
    },
    {
      title: "Memex (in progress)",
      longDescription: "A personal LLM leveraging my corpus as its knowledge base"
    }
  ]

  return (
    <div className="container bg-[#FAFAFA] dark:bg-[#1C1C1C] text-[#1C1C1C] dark:text-[#FAFAFA]">
      <div className="content">
        <div className="theme-toggle-container">
          <ThemeToggle />
        </div>
        
        <div className="page-section">
          <h1 className="text-2xl font-semibold mb-10">Hi, I'm Winggo.</h1>
          
          <p className="text-md mb-6">
            I've been developing software at startups and enterprise tech for {workDuration}.
          </p>

          <p className="text-md mb-6">
            I live in San Francisco by way of Santa Cruz.
          </p>
          
          <p className="text-md mb-12">
            Keep up with me on <a href="https://instagram.com/winggotse" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>, <a href="https://linkedin.com/in/winggo" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>,
            or say hi at <a href="mailto:winggo.tse@gmail.com" target="_blank" className="hover:underline">winggo.tse@gmail.com</a>.
          </p>
          
          <History title="WORK" entries={workHistory} />
          <History title="PROJECTS" entries={projects} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
