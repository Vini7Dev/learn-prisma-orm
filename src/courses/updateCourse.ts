import { PrismaClient } from '@prisma/client';

interface CourseProps {
  id: string;
  name?: string;
  description?: string;
  duration?: number;
}

const prismaClient = new PrismaClient();

const update = async ({
  id, name, description, duration,
}: CourseProps) => {
  const courseToUpdate = await prismaClient.courses.findFirst({
    where: { id }
  });

  if (!courseToUpdate) {
    return;
  }

  courseToUpdate.name = name || courseToUpdate.name;
  courseToUpdate.description = description || courseToUpdate.description;
  courseToUpdate.duration = duration || courseToUpdate.duration;

  const result = await prismaClient.courses.update({
    where: { id },
    data: courseToUpdate,
  });

  console.log(result);
};

export default update;

