import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


const player = await prisma.player.createMany({
    data:[
        { nombre: 'Sergio', apellido: 'Rochet', edad: 33, equipo: 'Internacional' },
        { nombre: 'Franco', apellido: 'Israel', edad: 23, equipo: 'Sporting CP' },
        { nombre: 'Santiago', apellido: 'Mele', edad: 26, equipo: 'Junior' },
        { nombre: 'Ronald', apellido: 'Araujo', edad: 24, equipo: 'Barcelona' },
        { nombre: 'Jose Maria', apellido: 'Gimenez', edad: 28, equipo: 'Atletico De Madrid' },
        { nombre: 'Sebastian', apellido: 'Caceres', edad: 24, equipo: 'America' },
        { nombre: 'Matias', apellido: 'Viña', edad: 26, equipo: 'Sassuolo' },
        { nombre: 'Bruno', apellido: 'Mendez', edad: 24, equipo: 'Corinthians' },
        { nombre: 'Guillermo', apellido: 'Varela', edad: 30, equipo: 'Flamengo' },
        { nombre: 'Matias', apellido: 'Olivera', edad: 26, equipo: 'Napoli' },
        { nombre: 'Manuel', apellido: 'Ugarte', edad: 22, equipo: 'PSG' },
        { nombre: 'Rodrigo', apellido: 'Bentancur', edad: 26, equipo: 'Tottenham' },
        { nombre: 'Federico', apellido: 'Valverde', edad: 25, equipo: 'Real Madrid' },
        { nombre: 'Felipe', apellido: 'Carballo', edad: 27, equipo: 'Gremio' },
        { nombre: 'Agustin', apellido: 'Canobbio', edad: 25, equipo: 'Paranaense' },
        { nombre: 'Nicolas', apellido: 'De la cruz', edad: 26, equipo: 'River Plate' },
        { nombre: 'Giorgian de', apellido: 'Arrascaeta', edad: 29, equipo: 'Flamengo' },
        { nombre: 'Facundo', apellido: 'Pellistri', edad: 21, equipo: 'Manchester United' },
        { nombre: 'Maximiliano', apellido: 'Araujo', edad: 23, equipo: 'Toluca' },
        { nombre: 'Facundo', apellido: 'Torres', edad: 23, equipo: 'Orlando City' },
        { nombre: 'Cristian', apellido: 'Olivera', edad: 21, equipo: 'Los Angeles FC' },
        { nombre: 'Federico', apellido: 'Viña', edad: 25, equipo: 'Leon' },
        { nombre: 'Darwin', apellido: 'Nuñez', edad: 24, equipo: 'Liverpol' },
        { nombre: 'Luiz', apellido: 'Suarez', edad: 36, equipo: 'Gremio' },
    ]
})

