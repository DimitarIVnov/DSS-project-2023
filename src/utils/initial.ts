import { Grade } from "../interfaces/interfaces";

export const initialGradeDetail: Grade = {
  id: 0,
  studentFirstName: "Mitko",
  studentLastName: "Ivanov",
  subject: "Math",
  score: 6,
  date: new Date(),
};

export const initialGrades: Array<Grade> = [
  {
    id: 1,
    studentFirstName: "Mitko",
    studentLastName: "Ivanov",
    subject: "Math",
    score: 6,
    date: new Date(),
  },
  {
    id: 2,
    studentFirstName: "Sasho",
    studentLastName: "Pingal",
    subject: "Math",
    score: 6,
    date: new Date(),
  },
  {
    id: 3,
    studentFirstName: "Steven",
    studentLastName: "Segal",
    subject: "Math",
    score: 6,
    date: new Date(),
  },
];
