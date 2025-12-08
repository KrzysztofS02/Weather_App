export const weatherData = [
    {
        id: 1,
        miasto: "Warszawa",
        temperatura: 18,
        pogoda:"Słonecznie",
        wiatr: 12,
        kierunekWiatru:"W",
        zachmurzenie: 20,
        prognoza5dni: [
            {
                dzien: "Poniedziałek",
                temperatura: 10,
                pogoda: "Deczowo",
                kierunekWiatru: "w",
                zachmurzenie: 15
            },
            {
                dzien: "Wtorek",
                temperatura: 12,
                pogoda: "Słonecznie",
                kierunekWiatru: "N",
                zachmurzenie: 15
            },
        ]
    },
    {
        id: 2,
        miasto: "Kraków",
        temperatura: 20,
        pogoda: "Deszczowo",
        wiatr: 10,
        kierunekWiatru: "WW",
        zachmurzenie: 15 ,
        prognoza5dni: [
            {
                dzien: "Poniedziałek",
                temperatura: 10,
                pogoda: "Deczowo",
                kierunekWiatru: "w",
                zachmurzenie: 15
            },
            {
                dzien: "Wtorek",
                temperatura: 12,
                pogoda: "Słonecznie",
                kierunekWiatru: "N",
                zachmurzenie: 15
            },
        ]
    },
    {
        id: 3,
        miasto: "Wrocław",
        temperatura: 6,
        pogoda: "Wietrznie",
        wiatr: 18,
        kierunekWiatru: "N",
        zachmurzenie: 12,
        prognoza5dni: [
            {
                dzien: "Poniedziałek",
                temperatura: 10,
                pogoda: "Deczowo",
                kierunekWiatru: "w",
                zachmurzenie: 15
            },
            {
                dzien: "Wtorek",
                temperatura: 12,
                pogoda: "Słonecznie",
                kierunekWiatru: "N",
                zachmurzenie: 15
            },
        ]
    },
    {
        id: 4,
        miasto:"Łódź",
        temperatura: 2,
        pogoda: "Słonecznie",
        wiatr: 8,
        kierunekWiatru: "S",
        zachmurzenie: 5,
        prognoza5dni: [
            {
                dzien: "Poniedziałek",
                temperatura: 10,
                pogoda: "Deszczowo",
                kierunekWiatru: "w",
                zachmurzenie: 15
            },
            {
                dzien: "Wtorek",
                temperatura: 12,
                pogoda: "Słonecznie",
                kierunekWiatru: "N",
                zachmurzenie: 15
        },
        ]
    },
    {
        id: 5, 
        miasto: "Gdańsk", 
        temperatura: 2, 
        pogoda: "Deszczeowo", 
        wiatr: 10, 
        kierunekWiatru: "SW",
        zachmurzenie: 15, 
        prognoza5dni: [
            {
                dzien: "Poniedziałek",
                temperatura: 10,
                pogoda: "Deczowo",
                kierunekWiatru: "w",
                zachmurzenie: 15
            },
            {
                dzien: "Wtorek",
                temperatura: 12,
                pogoda: "Słonecznie",
                kierunekWiatru: "N",
                zachmurzenie: 15
            },
        ]
    },
  ]
  export default weatherData;