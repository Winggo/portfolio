interface Entry {
  title: string | React.ReactElement;
  description?: string;
  longDescription?: string;
  period?: string;
}

interface HistoryProps {
  title: string;
  entries: Entry[];
}

const History = ({ title, entries }: HistoryProps) => {
  return (
    <div className="mb-8">
      <div className="text-xs uppercase tracking-wide text-[#6B6B6B] dark:text-[#A0A0A0] mb-4">
        {title}
      </div>
      
      {entries.map((entry, index) => (
        <div key={index} className="history-entry">
          <div className="text-base font-medium">{entry.title}</div>
          <div className="text-base text-right">
            {entry.longDescription ? <span className="font-normal">{entry.longDescription}</span> : <span className="font-medium">{entry.description}</span>}
            <br/>
            <span className="font-light text-[#6B6B6B] dark:text-[#A0A0A0]">{entry.period}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
