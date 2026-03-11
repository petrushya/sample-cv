import { useState } from "react";
import Person from "./components/person";
import Education from "./components/education";
import Experience from "./components/experience";
import "./App.css";

const initData = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  education: [
    {
      school: "",
      title: "",
      skills: "",
      startStudy: "",
      endStudy: "",
    },
  ],
  experience: [
    {
      company: "",
      position: "",
      duties: "",
      startWork: "",
      endWork: "",
    },
  ],
};

export default function App() {
  const [data, setData] = useState(initData);
  const [preview, setPreview] = useState(true);
  const [visualPerson, setVisualPerson] = useState(false);
  const [visualEduc, setVisualEduc] = useState(false);
  const [visualExpert, setVisualExpert] = useState(false);

  return (
    <>
      {preview && (<h1>Summary form</h1>)}
      <Person
        data={data}
        setData={setData}
        preview={preview}
        visualP={visualPerson}
        setVisualP={setVisualPerson}
      />
      <Education
        data={data}
        setData={setData}
        preview={preview}
        visualEd={visualEduc}
        setVisualEd={setVisualEduc}
      />
      <Experience
        data={data}
        setData={setData}
        preview={preview}
        visualEx={visualExpert}
        setVisualEx={setVisualExpert}
      />
      <div className="mrn-t">
        <button
          id="preview"
          type="button"
          onClick={() => setPreview(!preview)}
          className="mrn-t"
        >
          {preview ? "preview" : "redact"}
        </button>
      </div>
    </>
  );
}
