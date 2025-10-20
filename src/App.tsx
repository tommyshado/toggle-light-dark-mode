
import { HighchartsReact } from "highcharts-react-official";
import Highcharts from "highcharts";
import ThemeToggleButton from "./ThemeToggleButton";
import { useEffect, useState } from "react";
import DarkTheme from "./DarkTheme";
import LightTheme from "./LightTheme";
import baseOptions from "./BaseOptions";

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [option, setOption] = useState<Highcharts.Options>(baseOptions);

  function toggleTheme() {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    if (theme === 'dark') {
      const darkOptions = {
        ...baseOptions,
        ...DarkTheme
      };
      setOption(darkOptions);
    } else {
      const lightOptions = {
        ...baseOptions,
        ...LightTheme
      };
      setOption(lightOptions);
    };
  }, [theme]);
  
  return (
    <>
      <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
      <HighchartsReact
        highcharts={Highcharts}
        options={option}
      />
    </>
  )
}

export default App
