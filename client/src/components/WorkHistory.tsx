interface WorkEntry {
  company: string;
  position: string;
  period: string;
}

interface WorkHistoryProps {
  entries: WorkEntry[];
}

const WorkHistory = ({ entries }: WorkHistoryProps) => {
  return (
    <>
      <div className="text-xs uppercase tracking-wide text-[#6B6B6B] dark:text-[#A0A0A0] mb-4">
        PREVIOUSLY
      </div>
      
      {entries.map((entry, index) => (
        <div key={index} className="work-entry">
          <div className="text-sm">{entry.company}</div>
          <div className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0] text-right">
            {entry.position}<br/>{entry.period}
          </div>
        </div>
      ))}
    </>
  );
};

export default WorkHistory;
