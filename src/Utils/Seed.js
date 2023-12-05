import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


prisma.player.create({
    data:{
        nombre: 'Federico Valverde',
        equipo:'Real Madrid'
    }
}) 