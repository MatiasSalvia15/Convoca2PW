import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();




const obtenerTodos = async (req, res) => {
  try {
    const jugadores = await prisma.player.findMany();
    res.json({ jugadores });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener los jugadores' });
  }
};


const CrearJugador = async (req, res) => {
    const { nombre, apellido, edad, equipo } = req.body; 
    try {
        const nuevoJugador = await prisma.player.create({
        data: {
          nombre,
          apellido,
          edad,
          equipo,
        },
      });
  
      res.status(201).json({ jugador: nuevoJugador });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al crear el jugador' });
    }
  };
  
  

export {obtenerTodos, CrearJugador}