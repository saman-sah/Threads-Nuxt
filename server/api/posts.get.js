import { PrismaClient } from '@prisma/client'
const Prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  let posts = await Prisma.posts.findMany({
    orderBy: {
      id: "desc"
    },
    include: {
      likes: true
    }
  })
  return posts
})