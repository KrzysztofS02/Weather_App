import { useState, useEffect, useMemo, useCallback } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { weatherData } from './data/weatherData'
import HomePage from './Pages/HomePage'
import CityDetailPage from './Pages/CityDetailsPage'
import './App.css'

function App() {
  const [miasta, setMiasta] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMiasta(weatherData);
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Ładowanie danych pogodowych...</h1>
        <p>Proszę czekać...</p>
      </div>
    );
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage miasta={miasta}/>} />
          <Route path="miasto/:cityId" element={<CityDetailPage miasta={miasta}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
 










       {/* {filteredMiasta.map((dane) => {
           return(
             <WeatherCard miasto={dane.miasto} temperatura={dane.temperatura} onClick={() => handleClick(dane)}></WeatherCard>
           )
         }
       )}
       {wybraneMiasto && (
         <WeatherDetails wybraneMiasto={wybraneMiasto} />
       )}
     </>
   )
 }

 export default App */}
