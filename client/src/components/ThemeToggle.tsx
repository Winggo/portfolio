import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div>
      {!isDarkMode ? (
        <div 
          onClick={toggleTheme}
          className="theme-toggle w-5 h-5 bg-black rounded-full" 
          aria-label="Switch to dark mode"
        />
      ) : (
        <div 
          onClick={toggleTheme}
          className="theme-toggle" 
          aria-label="Switch to light mode"
        >
          <svg 
            className="w-5 h-5 text-white" 
            fill="white" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
