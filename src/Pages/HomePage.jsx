import { useState, useMemo, useCallback } from 'react'
import WeatherCard from '../components/WeatherCard'
import WeatherDetails from '../components/WeatherDetails'
import { useNavigate } from 'react-router-dom';
import UnitSwitcher from '../components/UnitSwitcher';

function HomePage({miasta}) {
  const [wybraneMiasto, setWybraneMiasto] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); 
  const navigate = useNavigate();

  const handleClick = useCallback((miasto) => {
    console.log('Kliknieto miasto:', miasto.miasto);
    navigate(`/miasto/${miasto.id}`)
  }, []);

  const filteredMiasta = useMemo(() =>
  {
    console.log({searchTerm});
    return miasta.filter(miasto => 
      miasto.miasto.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [miasta, searchTerm]);

  return (
    <>
      <h1>Pogoda w Polsce</h1>
        <UnitSwitcher />
      <div>
        <input 
          type ="text"
          placeholder="Szukaj miasta..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

      </div>
      <div className="cities-container">
        {filteredMiasta.map((dane) => (
          <WeatherCard 
            key={dane.id}
            miasto={dane.miasto} 
            temperatura={dane.aktualnaTemperatura} 
            onClick={() => handleClick(dane)}
          />
        ))}
      </div>

      {wybraneMiasto && (
        <WeatherDetails miasto={wybraneMiasto} />
      )}
    </>
  )
}

export default HomePage