interface WorkEntry {
  title: string | React.ReactElement;
  description: string;
  period: string;
}

interface WorkHistoryProps {
  entries: WorkEntry[];
}

const WorkHistory = ({ entries }: WorkHistoryProps) => {
  return (
    <div className="mb-8">
      <div className="text-xs uppercase tracking-wide text-[#6B6B6B] dark:text-[#A0A0A0] mb-4">
        Work
      </div>

      {entries.map((entry, index) => (
        <div key={index} className="history-entry">
          <div className="text-base font-medium">{entry.title}</div>
          <div className="text-base text-right">
            <span className="font-medium">{entry.description}</span>
            <br/>
            <span className="font-light text-[#6B6B6B] dark:text-[#A0A0A0]">{entry.period}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkHistory;
