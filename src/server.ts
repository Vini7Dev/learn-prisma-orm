import createCourse from './courses/createCourse';
import consultCourse from './courses/consultCourse';
import updateCourse from './courses/updateCourse';

import createTeacher from './teachers/createTeacher';
import consultTeacher from './teachers/consultTeacher';

/*
createCourse({
  name: 'Curso de Graphql',
  description: 'Descrição do curso...',
  duration: 120,
  teacher: {
    name: 'Gabriel Vinícius',
  },
  modules: [
    { name: '01- Introdução', description: 'Descrição do módulo 1...' },
    { name: '02- Primeiros passos', description: 'Descrição do módulo 2...' },
    { name: '03- Aprofundando os conhecimentos', description: 'Descrição do módulo 3...' },
  ]
});
*/

consultCourse();
