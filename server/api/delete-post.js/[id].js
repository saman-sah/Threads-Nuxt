import { PrismaClient } from '@prisma/client'
const Prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

  const deleted = await Prisma.posts.delete({
    where: {
      id: Number(event.context.params.id)
    }
  })
  return deleted
})