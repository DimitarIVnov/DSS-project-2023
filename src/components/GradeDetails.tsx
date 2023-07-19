import { useEffect, useState } from "react";
import { Grade } from "../interfaces/interfaces";

type Props = {
  grades: Array<Grade>;
  setGrades: (newGrades: Array<Grade>) => void;
  gradeDetail: Grade;
};

export default function GradeDetails({
  grades,
  setGrades,
  gradeDetail,
}: Props) {
  const [id, setId] = useState(0);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [subject, setSubject] = useState("");
  const [score, setScore] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    setId(gradeDetail.id);
    setFname(gradeDetail.studentFirstName);
    setLname(gradeDetail.studentLastName);
    setSubject(gradeDetail.subject);
    setScore(String(gradeDetail.score));
    setDate(gradeDetail.date.toISOString().split("T")[0]);
  }, [gradeDetail]);

  function saveGrade() {
    if (fname == "") return;
    if (lname == "") return;
    if (subject == "") return;
    if (score == "") return;
    if (date == "") return;

    const newGrade: Grade = {
      id: 0,
      studentFirstName: fname,
      studentLastName: lname,
      subject,
      score: Number(score),
      date: new Date(date),
    };
    const newGrades = [...grades, newGrade];

    let i = 1;
    for (const nGrade of newGrades) {
      nGrade.id = i++;
    }

    setGrades(newGrades);
  }

  function changeGrade() {
    let changedGrade = grades.find((g) => g.id == id);
    if (changedGrade) {
      changedGrade.studentFirstName = fname;
      changedGrade.studentLastName = lname;
      changedGrade.subject = subject;
      changedGrade.score = Number(score);
      changedGrade.date = new Date(date);
    }
    setGrades([...grades]);
  }

  function handleSave(): void {
    if (id == 0) {
      saveGrade();
    } else {
      changeGrade();
    }
  }

  function handleClear(): void {
    setId(0);
    setFname("");
    setLname("");
    setSubject("");
    setScore("");
    setDate("");
  }

  return (
    <div className="content-details  sticky top-[300px] mt-[50px] shadow-sm shadow-stone-700">
      <div className=" flex-col  pl-[33.33%] sticky bg-neutral-300 ">
        <div className="">
          <label className="w-full block">First Name</label>
          <input
          className="w-[200px]"
            id="field1"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>

        <div className="">
          <label className="w-full block">Last Name</label>
          <input
            className="w-[200px]"
            id="field2"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>

        <div className="">
          <label className="w-full block">Subject</label>
          <input
            className="w-[200px]"
            id="field3"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="">
          <label className="w-full block">Score</label>
          <input
          className="w-[200px]"
            id="field4"
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>

        <div className="">
          <label className="w-full block">Date</label>
          <input
          className="w-[200px]"
            id="field5"
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <br></br>
        <button id="saveButton" className=" px-[33px] p-0 bg-blue-400 hover:bg-blue-600 hover:text-gray-900" onClick={handleSave}>
          Save
        </button>
        <button id="clearButton "  className="px-[33px] p-0 bg-yellow-300  hover:bg-yellow-400 hover:text-gray-900" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
}
