import ThemeToggle from "./ThemeToggle";
import WorkHistory from "./WorkHistory";
import { useWorkDuration } from "../hooks/useWorkDuration";

const Portfolio = () => {
  const workDuration = useWorkDuration();
  
  const workHistory = [
    {
      company: "Stripe",
      position: "Product Designer",
      period: "2015-2020"
    },
    {
      company: "Wistia",
      position: "Product Designer",
      period: "2015-2015"
    },
    {
      company: "Rdio",
      position: "UX Design Co-op",
      period: "2014"
    }
  ];

  return (
    <div className="container mx-auto max-w-2xl px-6 py-16 min-h-screen bg-[#F5F5F5] dark:bg-[#1A1A1A] text-[#333333] dark:text-[#FFFFFF]">
      <ThemeToggle />
      
      <div className="page-section">
        <h1 className="text-base font-medium mb-4">Hi, I'm Maddie.</h1>
        
        <p className="text-sm mb-6">
          Some people call me Madeline. I've been designing at <span className="font-medium">OpenAI</span> for the last {workDuration}.
        </p>
        
        <p className="text-sm mb-12">
          I live in San Francisco by way of Boston by way of Cleveland. Keep up with me on Instagram or Twitter.
        </p>
        
        <WorkHistory entries={workHistory} />
      </div>
    </div>
  );
};

export default Portfolio;
