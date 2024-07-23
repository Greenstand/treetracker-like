import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const type1 = await prisma.type.upsert({
    where: { name: 'tree'},
    update: {},
    create: {
      name: 'tree'
    },
  });

  const type2 = await prisma.type.upsert({
    where: { name: 'species'},
    update: {},
    create: {
      name: 'species'
    },
  });

  console.log({ type1, type2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });

