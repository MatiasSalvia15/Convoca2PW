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
export {obtenerTodos}