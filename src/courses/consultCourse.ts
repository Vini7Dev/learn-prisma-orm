import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

const consult = async () => {
  const coursesList = await prismaClient.courses.findMany({
    where: {
      duration: {
        gt: 100,
      }
    },
    include: {
      teacher: true,
    }
  });

  console.log(coursesList)
};

export default consult;
