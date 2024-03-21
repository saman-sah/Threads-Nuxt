import { PrismaClient } from '@prisma/client'
const Prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
console.log('event.context.params.id', event.context.params.id);
  const deleted = await Prisma.posts.delete({
    where: {
      id: Number(event.context.params.id)
    }
  })
  return deleted
})