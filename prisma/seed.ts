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

  // Get the ids of the created types
  const treeType = await prisma.type.findUnique({
    where: { name: 'tree' },
  });

  const speciesType = await prisma.type.findUnique({
    where: { name: 'species' },
  });

  if (treeType && speciesType) {
    // Create sample 'Like' entries
    const like1 = await prisma.like.upsert({
      where: { type_id_object_id_user_id: { type_id: treeType.id, object_id: 'tree1', user_id: 1 }},
      update: {},
      create: {
        type_id: treeType.id,
        object_id: 'tree1',
        user_id: 1,
      },
    });

    const like2 = await prisma.like.upsert({
      where: { type_id_object_id_user_id: { type_id: speciesType.id, object_id: 'species1', user_id: 2 }},
      update: {},
      create: {
        type_id: speciesType.id,
        object_id: 'species1',
        user_id: 2,
      },
    });

    console.log({ type1, type2, like1, like2 });
  } else {
    console.error("Failed to retrieve the created types.");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
