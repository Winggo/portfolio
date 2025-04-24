import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="flex justify-center mb-14">
      {!isDarkMode ? (
        <div 
          onClick={toggleTheme}
          className="theme-toggle w-4 h-4 bg-black rounded-full" 
          aria-label="Switch to dark mode"
        />
      ) : (
        <div 
          onClick={toggleTheme}
          className="theme-toggle" 
          aria-label="Switch to light mode"
        >
          <svg 
            className="w-4 h-4 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
