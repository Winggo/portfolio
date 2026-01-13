import ThemeToggle from "./ThemeToggle";
import WorkHistory from "./WorkHistory";
import Projects from "./Projects";
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
      title: <a href="https://useanvil.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Anvil</a>,
      description: "Software Engineer",
      period: "2020-2023"
    },
  ];

  const projects = [
    {
      title: <a href="https://polylogue.dev" target="_blank" rel="noopener" className="hover:underline">polylogueLM</a>,
      description: "Figma-like app for building LLM conversation trees, for visualization of branching multi-model conversations"
    },
    {
      title: <a href="https://github.com/winggo/memex" target="_blank" rel="noopener" className="hover:underline">Memory Extension</a>,
      description: "RAG-powered assistant that vectorizes personal data (notes, contacts, messages) and integrates with iMessage for Q&A"
    },
    {
      title: <a href="https://thisremindedme.com" target="_blank" rel="noopener" className="hover:underline">this reminded me of u</a>,
      description: "Public photo wall for anyone to share photos that reminded them of someone",
    },
    {
      title: <i>more to come...</i>,
    },
  ]

  return (
    <div className="container bg-[#FAFAFA] dark:bg-[#1C1C1C] text-[#1C1C1C] dark:text-[#FAFAFA]">
      <div className="content">
        <div className="theme-toggle-container">
          <ThemeToggle />
        </div>
        
        <div className="page-section">
          <h1 className="text-2xl font-semibold mb-10">Hi, I'm Winggo.</h1>

          <p className="text-sm mb-6 italic text-[#6B6B6B] dark:text-[#A0A0A0]">
            life is 10x better when you're out there building something
          </p>
          <p className="text-base mb-6">
            I've been building software at startups and enterprise tech for {workDuration}.
          </p>
          <p className="text-base mb-6">
            I've worked primarily on backend & full-stack, but am currently focusing on integrating LLMs into applications.
          </p>
          <p className="text-base mb-6">
            In my spare time, I dabble in side projects, learn about emerging tech, and continuously read.
          </p>
          <p className="text-base mb-6">I currently live in San Francisco.</p>
          
          <p className="text-base mb-12">
            Keep up with me on <a href="https://github.com/winggo" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">Github</a>, <a href="https://linkedin.com/in/winggo" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">LinkedIn</a>,
            or say hi at <a href="mailto:winggo.tse@gmail.com" target="_blank" className="hover:underline font-semibold">winggo.tse@gmail.com</a>.
          </p>
          
          <WorkHistory entries={workHistory} />
          <Projects entries={projects} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
