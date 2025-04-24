import { useState, useEffect } from "react";

interface Duration {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function useWorkDuration(): string {
  const [duration, setDuration] = useState<Duration>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Start date - approximate date to reach ~1505 days
    const startDate = new Date('2020-01-01');

    const calculateDuration = () => {
      const now = new Date();
      const diffInSeconds = Math.floor((now.getTime() - startDate.getTime()) / 1000);
      
      const days = Math.floor(diffInSeconds / 86400);
      const hours = Math.floor((diffInSeconds % 86400) / 3600);
      const minutes = Math.floor((diffInSeconds % 3600) / 60);
      const seconds = diffInSeconds % 60;
      
      setDuration({ days, hours, minutes, seconds });
    };

    // Calculate immediately and then set interval
    calculateDuration();
    const intervalId = setInterval(calculateDuration, 1000);
    
    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return `${duration.days} days, ${duration.hours} hours, ${duration.minutes} minutes, and ${duration.seconds} seconds`;
}
