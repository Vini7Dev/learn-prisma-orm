import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

const consult = async () => {
  const result = await prismaClient.studants.findMany({
    include: {
      StudantsCourses: {
        include: {
          course: true,
        },
      },
    },
  });

  return result;
}

export default consult;
