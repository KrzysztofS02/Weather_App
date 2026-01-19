import WeatherIcon from './WeatherIcon'
import { useSelector } from 'react-redux';
import { convertTemperature, getUnitSymbol } from '../utils/temperature';
function WeatherDetails({ miasto }){
    if(!miasto) return null;
    
    const unit = useSelector((state) => state.settings.temperatureUnit);
    const unitSymbol = getUnitSymbol(unit);
    return(
        <div className="card details-panel">
          <h2>Szczegóły pogody dla {miasto.miasto}</h2>
          <div className="details-row">
            <div className="details-item">
              <strong>Temperatura:</strong>
              <div>{convertTemperature(miasto.aktualnaTemperatura, unit)}{unitSymbol}</div>
              <div>{miasto.aktualnaTemperatura} °C</div>
            </div>
            <div>
              <WeatherIcon condition={miasto.aktualnaPogoda}></WeatherIcon>
            </div>
            <div className="details-item">
              <strong>Warunki:</strong>
              <div>{miasto.aktualnaPogoda}</div>
            </div>
            <div className="details-item">
              <strong>Wiatr:</strong>
              <div>{miasto.aktualnyWiatr}</div>
            </div>
            <div className="details-item">
              <strong>Kierunek Wiatru:</strong>
              <div>{miasto.aktualnyKierunekWiatru}</div>
            </div>
            <div className="details-item">
              <strong>Zachmurzenie:</strong>
              <div>{miasto.aktualneZachmurzenie}</div>
            </div>
            {Array.isArray(miasto.prognoza5Dni) && (
              <div className="card details-panel forecast">
                <h3>5-dniowa prognoza</h3>
                <div className="forecast-row">
                  {miasto.prognoza5Dni.map((dzień, idx) => (
                    <div className="forecast-day" key={idx}>
                      <div>
                        <WeatherIcon condition={dzień.pogoda}></WeatherIcon>
                      </div>
                      <div className="details-item"><strong>{dzień.dzień}</strong></div>
                      <div>{convertTemperature(dzień.aktualnaTemperatura, unit)}{unitSymbol}</div>
                      <div className="details-item">Temperatura: {dzień.temperatura} °C</div>
                      <div className="details-item">Pogoda: {dzień.pogoda}</div>
                      {dzień.kierunekWiatru && <div className="details-item">Kierunek wiatru: {dzień.kierunekWiatru}</div>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
    )
}

export default WeatherDetails;