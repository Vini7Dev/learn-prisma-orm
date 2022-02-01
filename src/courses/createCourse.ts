import { PrismaClient } from '@prisma/client';

interface ITeacherProps {
  name: string;
}

interface ICourseProps {
  name: string;
  description?: string;
  duration: number;
  teacher: ITeacherProps;
}

const prisma = new PrismaClient();

const create = async ({
  name, description, duration, teacher,
}: ICourseProps) => {
  const result = await prisma.courses.create({
    data: {
      name,
      description,
      duration,
      teacher: {
        connectOrCreate: {
          where: {
            name: teacher.name,
          },
          create: {
            name: teacher.name,
          },
        }
      },
    },
  });

  console.log(result);
}

export default create;
