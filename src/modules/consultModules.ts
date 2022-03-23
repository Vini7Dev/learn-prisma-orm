import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

const consult = async () => {
  const result = await prismaClient.modules.findMany();

  return result;
}

export default consult;
