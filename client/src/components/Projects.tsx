interface ProjectEntry {
  title: string | React.ReactElement;
  description?: string;
}

interface ProjectsProps {
  entries: ProjectEntry[];
}

const Projects = ({ entries }: ProjectsProps) => {
  return (
    <div className="mb-8">
      <div className="text-xs uppercase tracking-wide text-[#6B6B6B] dark:text-[#A0A0A0] mb-4">
        Projects
      </div>

      {entries.map((entry, index) => (
        <div key={index} className="mb-6">
          <div className="text-base font-medium">{entry.title}</div>
          {entry.description && (
            <p className="text-base text-[#6B6B6B] dark:text-[#A0A0A0] mt-1">{entry.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
