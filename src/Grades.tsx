import React from "react";
import { useState } from "react";
import Grade from "./interfaces/Grade";

interface Props {
  grade: Grade[];
  onSelectedGrade: (data: Grade) => void;
  onDeletedGrade: (grade: Grade[]) => void;
}

function GradeList(props: Props) {
  const [selectedBookId, setSelectedBookId] = useState<number | null>(
    props.grade.length === 0 ? null : props.grade[0].id
  );
  const [isGradeDeleted] = useState(false);
  const [selectedGrade, setGrade] = useState<Grade>();
  function handleClick(id: number, ignoreItem: boolean) {
    let foundGrade = props.grade.find((item) => item.id === id) as Grade;
    props.onSelectedGrade(foundGrade);
    return <div></div>;
  }
}

function Grades() {
  return (
    <>
      <div className="grades">
        <div className="grade-box">
          <ul content-list>
          <li>
            <p className="grade-p">id : </p>
            <p className="grade-p">Fisrt Name</p>
            <p className="grade-p">Second Name</p>
            <p className="grade-p">Subject</p>
            <p className="grade-p">Grade</p>
            <p className="grade-p">DATE</p>
          </li>

          <li>
            <p className="grade-p">id : </p>
            <p className="grade-p">Fisrt Name</p>
            <p className="grade-p">Second Name</p>
            <p className="grade-p">Subject</p>
            <p className="grade-p">Grade</p>
            <p className="grade-p">DATE</p>
          </li>

          <li>
            <p className="grade-p">id : </p>
            <p className="grade-p">Fisrt Name</p>
            <p className="grade-p">Second Name</p>
            <p className="grade-p">Subject</p>
            <p className="grade-p">Grade</p>
            <p className="grade-p">DATE</p>
          </li>

          <li>
            <p className="grade-p">id : </p>
            <p className="grade-p">Fisrt Name</p>
            <p className="grade-p">Second Name</p>
            <p className="grade-p">Subject</p>
            <p className="grade-p">Grade</p>
            <p className="grade-p">DATE</p>
          </li>
          </ul>
        </div>

        
      </div>
    </>
  );
}
export default Grades;
