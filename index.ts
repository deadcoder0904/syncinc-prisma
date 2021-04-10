import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const allJobs = await prisma.jobs.findMany()
  console.log(allJobs)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
