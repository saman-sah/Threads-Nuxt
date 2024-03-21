import { PrismaClient } from '@prisma/client'
const Prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
console.log('body', body);
  const res = await Prisma.users.create({
    data: {
      userId: body.userId,
      name: body.name,
      image: body.image,
    }
  })
  return res
})