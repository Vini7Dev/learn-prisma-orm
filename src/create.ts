import { PrismaClient } from '@prisma/client';

interface CourseProps {
  name: string;
  description?: string;
  duration: number;
}

const prisma = new PrismaClient();

const create = async ({
  name, description, duration,
}: CourseProps) => {
  const result = await prisma.courses.create({
    data: {
      name,
      description,
      duration,
    },
  });

  console.log(result);
}

export default create;
