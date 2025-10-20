export default function ThemeToggleButton({theme, toggleTheme}: {theme: 'dark' | 'light', toggleTheme: () => void}) {
  return (
    <button onClick={toggleTheme}>
      {theme} mode
    </button>
  );
}