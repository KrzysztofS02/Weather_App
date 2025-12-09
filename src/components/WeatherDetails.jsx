import WeatherIcon from './WeatherIcon'
import { useSelector } from 'react-redux';
import { convertTemperature, getUnitSymbol } from '../utils/temperature';
function WeatherDetails({ miasto }){
    if(!miasto) return null;

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
            {Array.isArray(miasto.prognoza5dni) && (
              <div className="card details-panel forecast">
                <h3>5-dniowa prognoza</h3>
                <div className="forecast-row">
                  {miasto.prognoza5dni.map((dzień, idx) => (
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
























// function WeatherDetails({wybraneMiasto}){
//     if(!wybraneMiasto) return null;
    
//     return(
//         <div>
//           <h3>Szczegóły pogody dla: {wybraneMiasto.miasto} </h3>
//           <p>Wiatr: {wybraneMiasto.wiatr}</p>
//           <p>Pogoda: {wybraneMiasto.pogoda}</p>
//           <p>Kierunek wiatru: {wybraneMiasto.kierunekWiatru}</p>
//           <p>Zachmurzenie: {wybraneMiasto.zachmurzenie}</p>
//           {wybraneMiasto.prognoza5dni.map((dzien) =>
//             (
//               <div>
//                 <div>
//                   <p1>Dzień tygodnia: {dzien.dzien} |</p1>
//                 </div>
//                 <div>
//                   <p1>Temperatura: {dzien.temperatura} |</p1>
//                 </div>
//                 <div>
//                   <p1>Pogoda: {dzien.pogoda} </p1>
//                 </div>
//                 <div>
//                   <p1>Kierunek wiatru: {dzien.kierunekWiatru} |</p1>
//                 </div>
//                 <div>
//                   <p1>Zachmurzenie: {dzien.zachmurzenie} |</p1>
//                 </div>
//               </div>
//             )
//           )}
//         </div>
//     )
// }
// export default WeatherDetails