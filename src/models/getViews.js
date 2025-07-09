import { PrismaClient } from "../generated/prisma/index.js"

const prisma = new PrismaClient()

async function getViews() {
    const dataViews = await prisma.views.findUnique({ where: { id: 1 } })

    if (!dataViews) {
        const createViews = await prisma.views.create({
            data: {
                id: 1,
                views: 0
            }
        })
        return createViews.views
    }
    return dataViews.views
}

export default getViews