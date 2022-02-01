import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

const consult = async () => {
  const result = await client.teachers.findMany({
    include: {
      course: true,
    }
  });

  console.log(result);
}

export default consult;
