import { Grade } from "../interfaces/interfaces";

type Props = {
  grade: Grade;
  grades: Array<Grade>;
  setGrades: (newGrades: Array<Grade>) => void;
  gradeDetail: Grade;
  setGradeDetail: (gradeDetail: Grade) => void;
};

export default function GradeItem({
  grade,
  grades,
  setGrades,
  gradeDetail,
  setGradeDetail,
}: Props) {
  function handleDelete(): void {
    if (gradeDetail.id == grade.id) {
      setGradeDetail({
        id: 0,
        studentFirstName: "",
        studentLastName: "",
        subject: "",
        score: 0,
        date: new Date(),
      });
    }
    const newGrades = grades.filter((g) => g.id != grade.id);
    let i = 1;
    for (const nGrade of newGrades) {
      nGrade.id = i++;
    }
    setGrades([...newGrades]);
  }

  function handleFocus(): void {
    setGradeDetail(grade);
  }

  return (
    <li className="w-[90%] bg-neutral-300 shadow-xl shadow-neutral-500 transition ease-in  delay-50 hover:scale-110 hover:bg-neutral-50 cursor-pointer">
      <div onClick={handleFocus}>
        <p className="id">Id: {grade.id}</p>
        <p className="field1">First Name: {grade.studentFirstName}</p>
        <p className="field2">Last Name: {grade.studentLastName}</p>
        <p className="field3">Subject: {grade.subject}</p>
        <p className="field4">Score: {grade.score}</p>
        <p className="field5">Date: {grade.date.toString()}</p>
      </div>
      <button className="deleteButton bg-blue-400 mt-3 mb-[3px] ml-[3px] px-9 py-2 text-stone-700 font-semibold hover:bg-yellow-300 hover:text-gray-900" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
