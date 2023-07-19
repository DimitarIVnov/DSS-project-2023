import { useState } from "react";
import GradeDetails from "../components/GradeDetails";
import GradesList from "../components/GradesList";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import { Grade } from "../interfaces/interfaces";
import { initialGradeDetail, initialGrades } from "../utils/initial";
import LandingImg from "../components/landing-img";

export default function HomePage() {
  const [grades, setGrades] = useState<Array<Grade>>(initialGrades);
  const [gradeDetail, setGradeDetail] = useState<Grade>(initialGradeDetail);

  return (
    <>
      <Header></Header>
      <LandingImg></LandingImg>
      <div className="grid md:grid-cols-6 pt-[500px]">
        <div className="bg-neutral-100 md:col-span-4  my-[50px]">
          <GradesList grades={grades} setGrades={setGrades} gradeDetail={gradeDetail} setGradeDetail={setGradeDetail}/>
        </div>
        <div className="bg-neutral-100 md:col-span-2 my-50px shadow-inner shadow-stone-700 " >
          <GradeDetails grades={grades} setGrades={setGrades} gradeDetail={gradeDetail}/>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
