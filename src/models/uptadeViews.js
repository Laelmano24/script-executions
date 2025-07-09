import { PrismaClient } from "../generated/prisma/index.js"

const prisma = new PrismaClient()

async function uptadeViews() {
  const updated = await prisma.views.upsert({
    where: { id: 1 },
    update: {
      views: { increment: 1 }
    },
    create: {
      id: 1,
      views: 1
    }
  })

  return updated.views
}

export default uptadeViews