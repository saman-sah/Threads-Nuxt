import { PrismaClient } from '@prisma/client'
const Prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const res = await Prisma.posts.create({
    data: {
      userId: body.userId,
      name: body.name,
      image: body.image,
      text: body.text,
      picture: body.picture
    }
  })
  return res
})