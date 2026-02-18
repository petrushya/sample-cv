import { useState } from "react";
import Person from "./components/person";
import Education from "./components/education";
import Experience from "./components/experience";
import Page from "./components/sample";
import "./App.css";

const initData = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  education: [
    {
      id: "0-ed",
      scool: "",
      degree: "",
      scills: "",
      startStudy: "",
      endStudy: "",
    },
  ],
  experience: [
    {
      id: "0-ex",
      company: "",
      position: "",
      duties: "",
      startWork: "",
      endWork: "",
    },
  ],
};

const startEduc = {};
Object.assign(startEduc, initData.education[0]);
startEduc.id = "l0-ed";

const startExper = {};
Object.assign(startExper, initData.experience[0]);
startExper.id = "l0-ex";

export default function App() {
  const [data, setData] = useState(initData);
  const [person, setPerson] = useState(initData);
  const [educ, setEduc] = useState([startEduc]);
  const [exper, setExper] = useState([startExper]);
  const [preview, setPreview] = useState(true);
  const [visualP, setVisualP] = useState(false);
  const [visualEd, setVisualEd] = useState(false);
  const [visualEx, setVisualEx] = useState(false);

  return (
    <main>
      {preview ? (
        <section className="e-fl d-cl">
          <h2 className="j-c">Summary form.</h2>
          <Person
            person={person}
            setPerson={setPerson}
            data={data}
            setData={setData}
            visual={visualP}
            setVisual={setVisualP}
          />
          <Education
            educ={educ}
            setEduc={setEduc}
            data={data}
            setData={setData}
            visual={visualEd}
            setVisual={setVisualEd}
          />
          <Experience
            exper={exper}
            setExper={setExper}
            data={data}
            setData={setData}
            visual={visualEx}
            setVisual={setVisualEx}
          />
        </section>
      ) : (
        <section>
          <Page data={data} />
        </section>
      )}
      <div className="e-fl e-c">
        <button
          key="preview"
          id="preview"
          type="button"
          onClick={() => setPreview(!preview)}
          className="t-m"
        >
          {preview ? "preview" : "redact"}
        </button>
      </div>
    </main>
  );
}
