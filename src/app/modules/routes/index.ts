import express from 'express';
import { UserRoutes } from '../users/user.route';
import { AcademicSemesterRoutes } from '../academicSemester/academicSemester.route';
import { academicFacultyRoutes } from '../academicFaculty/academicFaculty.route';
import { academicDepartmentRoutes } from '../academicDepartment/academicDepartment.route';
import { StudentRoutes } from '../student/student.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: academicFacultyRoutes,
  },
  {
    path: '/academic-department',
    route: academicDepartmentRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
