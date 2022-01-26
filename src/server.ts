import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const result = await prisma.courses.create({
    data: {
      name: 'Prisma ORM',
      description: 'Aprendendo a usar o ORM Prisma',
      duration: 200,
    },
  });

  console.log(result);
};

main();
