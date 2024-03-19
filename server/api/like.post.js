import { PrismaClient } from '@prisma/client'
const Prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const res = await Prisma.likes.create({
    data: {
      userId: body.userId,
      postId: body.postId
    }
  })
  return res
})