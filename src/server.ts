import createCourse from './courses/createCourse';
import consultCourse from './courses/consultCourse';
import updateCourse from './courses/updateCourse';

import createTeacher from './teachers/createTeacher';

createCourse({
  name: 'Prisma ORM',
  description: 'Aprendendo a usar o ORM Prisma',
  duration: 200,
  teacher: {
    name: 'Vinícius Gabriel',
  },
});

