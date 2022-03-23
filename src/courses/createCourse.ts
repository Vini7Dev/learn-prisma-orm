import { PrismaClient } from '@prisma/client';

interface IModuleProps {
  name: string;
  description: string;
}

interface ITeacherProps {
  name: string;
}

interface ICourseProps {
  name: string;
  description?: string;
  duration: number;
  teacher: ITeacherProps;
  modules: IModuleProps[];
}

const prisma = new PrismaClient();

const create = async ({
  name, description, duration, teacher, modules,
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
      modules: {
        createMany: {
          data: [...modules]
        }
      }
    },
  });

  console.log(result);
}

export default create;
