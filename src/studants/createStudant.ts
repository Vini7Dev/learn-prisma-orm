import { PrismaClient } from '@prisma/client';

interface IStudant {
  name: string;
  courses_ids: string[];
}


const prismaClient = new PrismaClient();

const create = async ({
  name,
  courses_ids,
}: IStudant) => {
  const createdStudant = await prismaClient.studants.create({
    data: {
      name,
      StudantsCourses: {
        createMany: {
          data: courses_ids.map(course_id => ({ fk_course_id: course_id }))
        }
      }
    }
  });

  return createdStudant;
}

export default create;
