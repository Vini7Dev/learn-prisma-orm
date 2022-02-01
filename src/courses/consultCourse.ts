import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

const consult = async () => {
  const lastCourse = await prismaClient.courses.findFirst({
    take: -1,
  });

  console.log(lastCourse);

  const coursesList = await prismaClient.courses.findMany({
    where: {
      duration: {
        gt: 100,
      }
    }
  });

  console.log(coursesList)
};

export default consult;
