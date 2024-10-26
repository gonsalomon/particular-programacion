let pasajeros = [
    {
        nombre: 'Papá',
        dni: 22527847,
        historial:[]
    },
    {
        nombre: 'Mamá',
        dni: 25837925,
        historial:[]
    }
]

let historial = []

let ciudades=['MDQ', 'IGU']

let vuelos=[
    {
        numero:308,
        origen:'MDQ',
        destino:'IGU',
        pasajeros:[],
        capacidad:20
    },
    {
        numero:309,
        origen:'IGU',
        destino:'MDQ',
        pasajeros:[],
        capacidad:20
    }
]

let registrarPasajero = (nombre, dni) => {
    pasajeros.push(
        {
            nombre: nombre,
            dni: dni,
            historial:[]
        }
    )
}

let agregarPasajero = (posVuelo, pasajero) => {
    if(vuelos[posVuelo].pasajeros.length < vuelos[posVuelo].capacidad){
        vuelos[posVuelo].pasajeros.push(pasajero)
        console.log('Se registró correctamente a '+ pasajero.nombre + ' en el vuelo.')
    }else{
        console.log('El vuelo está lleno! No se puede registrar al pasajero.')
    }
}

let sacarPasajero = (posVuelo, pasajero) => {
    vuelos[posVuelo].pasajeros.splice(vuelos[posVuelo].pasajeros.indexOf(pasajero),1)
    console.log('El pasajero '+ pasajero.nombre +' se dio de baja correctamente.')
}

const hacerVuelo = (posVuelo) => {
    vuelos[posVuelo].pasajeros.forEach(pasajero=>{
            historial.push(
                {
                    pasajero: pasajero,
                    vuelo: vuelos[posVuelo].numero,
                    fecha: Date.now
                }
            )
        }
    )
    vuelos[posVuelo].pasajeros = []
}