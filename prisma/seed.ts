// prisma/seed.ts

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create some Type records
  const type1 = await prisma.type.create({
    data: {
      name: 'Type1',
    },
  })

  const type2 = await prisma.type.create({
    data: {
      name: 'Type2',
    },
  })

  // Create Like records with some having the same user_id
  await prisma.like.createMany({
    data: [
      { type_id: type1.id, object_id: 'object1', user_id: 1 },
      { type_id: type1.id, object_id: 'object2', user_id: 1 },
      { type_id: type1.id, object_id: 'object3', user_id: 2 },
      { type_id: type2.id, object_id: 'object1', user_id: 2 },
      { type_id: type2.id, object_id: 'object2', user_id: 3 },
      { type_id: type2.id, object_id: 'object3', user_id: 1 },
    ],
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
