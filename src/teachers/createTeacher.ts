import { PrismaClient } from '@prisma/client';

interface ITeacherProps {
  name: string;
}

const client = new PrismaClient();

const create = async (data: ITeacherProps) => {
  await client.teachers.create({
    data,
  });
}

export default create;
