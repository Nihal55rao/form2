import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();


export default async(req, res) => {
    const data = JSON.parse(req.body)

    const createdEmployee = await prisma.employees.create({
        data
    })

    res.json(createdEmployee)
}