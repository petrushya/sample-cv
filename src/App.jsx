import { useState, Fragment } from "react";
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
      id: "ed-0",
      school: "",
      degree: "",
      scills: "",
      startStudy: "",
      endStudy: "",
    },
  ],
  experience: [
    {
      id: "ex-0",
      company: "",
      position: "",
      duties: "",
      startWork: "",
      endWork: "",
    },
  ],
};

const helpEducObj = {};
Object.assign(helpEducObj, initData.education[0]);
helpEducObj.id = "p-ed-0";

const helpExpertObj = {};
Object.assign(helpExpertObj, initData.experience[0]);
helpExpertObj.id = "p-ex-0";

export default function App() {
  const [data, setData] = useState(initData);
  const [person, setPerson] = useState(initData);
  const [educ, setEduc] = useState([helpEducObj]);
  const [expert, setExpert] = useState([helpExpertObj]);
  const [preview, setPreview] = useState(true);
  const [visualPerson, setVisualPerson] = useState(false);
  const [visualEduc, setVisualEduc] = useState(false);
  const [visualExpert, setVisualExpert] = useState(false);

  return (
    <main>
      {preview ? (
        <Fragment>
          <h1>Summary form</h1>
          <Person
            person={person}
            setPerson={setPerson}
            data={data}
            setData={setData}
            visualP={visualPerson}
            setVisualP={setVisualPerson}
          />
          <Education
            initData={initData}
            educ={educ}
            setEduc={setEduc}
            data={data}
            setData={setData}
            visualEd={visualEduc}
            setVisualEd={setVisualEduc}
          />
          <Experience
            initData={initData}
            expert={expert}
            setExpert={setExpert}
            data={data}
            setData={setData}
            visualEx={visualExpert}
            setVisualEx={setVisualExpert}
          />
        </Fragment>
      ) : (
        <Fragment>
          <Page data={data} />
        </Fragment>
      )}
      <div className="e-flx alg-cn">
        <button
          key="preview"
          id="preview"
          type="button"
          onClick={() => setPreview(!preview)}
          className="mrn-tp"
        >
          {preview ? "preview" : "redact"}
        </button>
      </div>
    </main>
  );
}
