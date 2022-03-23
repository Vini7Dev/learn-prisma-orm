import { PrismaClient } from '@prisma/client';

interface IModuleProps {
  name: string;
  description: string;
  id_course: string;
}

const prismaClient = new PrismaClient();

const create = async ({
  name,
  description,
  id_course
}: IModuleProps) => {
  const createdModule = await prismaClient.modules.create({
    data: {
      name,
      description,
      fk_id_course: id_course,
    },
  });

  return createdModule;
}

export default create;
