import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/ThemeContexts'
import { useEffect } from 'react';
import Card from './Components/Card';
import Toggler from './Components/Toggler';

function App() {
  const [themeMode, setThemeMode] = useState("light");
  
  const setDarkMode = () => {
    setThemeMode("dark");
  }

  const setLightMode = () => {
    setThemeMode("light");
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("dark" ,"light");
    document.querySelector("html").classList.add(themeMode);
  } , [themeMode]);

  return (
    <ThemeProvider value={{themeMode , setDarkMode, setLightMode}}>

            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Toggler />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            </div>

    </ThemeProvider>
  )
}

export default App
