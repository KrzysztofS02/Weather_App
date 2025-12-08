import WeatherIcon from "./WeatherIcon";
function WeatherDetails({ miasto }){
    if(!miasto) return null;

    return(
        <div className="card details-panel">
          <h2>Szczegóły pogody dla {miasto.miasto}</h2>
          <div className="details-row">
            <div className="details-item">
              <strong>Temperatura:</strong>
              <div>{miasto.temperatura} °C</div>
            </div>
            <div>
              <WeatherIcon condition={miasto.pogoda} size="large"></WeatherIcon>
            </div>
            <div className="details-item">
              <strong>Warunki:</strong>
              <div>{miasto.pogoda}</div>
            </div>
            <div className="details-item">
              <strong>Wiatr:</strong>
              <div>{miasto.wiatr}</div>
            </div>
            <div className="details-item">
              <strong>Kierunek Wiatru:</strong>
              <div>{miasto.kierunekWiatru}</div>
            </div>
            <div className="details-item">
              <strong>Zachmurzenie:</strong>
              <div>{miasto.zachmurzenie}</div>
            </div>
            {Array.isArray(miasto.prognoza5dni) && (
              <div className="card details-panel forecast">
                <h3>5-dniowa prognoza</h3>
                <div className="forecast-row">
                  {miasto.prognoza5dni.map((dzień, idx) => (
                    <div className="forecast-day" key={idx}>
                       <div>
                        <WeatherIcon condition={dzień.pogoda} size="medium"></WeatherIcon>
                      </div>
                      <div className="details-item"><strong>{dzień.dzień}</strong></div>
                      <div className="details-item">Temperatura: {dzień.temperatura} °C</div>
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