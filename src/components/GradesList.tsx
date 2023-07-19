import { Grade } from "../interfaces/interfaces";
import GradeItem from "./GradeItem";

type Props = {
  grades: Array<Grade>;
  setGrades: (newGrades: Array<Grade>) => void;
  gradeDetail: Grade
  setGradeDetail: (gradeDetail: Grade) => void
};

export default function GradesLists({ grades, setGrades, gradeDetail, setGradeDetail }: Props) {
  return (
    <div className="content-list">
      <ul className="flex justify-center items-center flex-col gap-4">
        {grades.map((grade) => (
          <GradeItem key={`grade-${grade.id}`} grade={grade} grades={grades} setGrades={setGrades} gradeDetail={gradeDetail} setGradeDetail={setGradeDetail}/>
        ))}
      </ul>
    </div>
  );
}
