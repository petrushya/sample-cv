import { useState, Fragment } from "react";
import Person from "./components/person";
import Education from "./components/education";
import Experience from "./components/experience";
import Page from "./components/sample";
import "./App.css";

export default function App() {

  const initData =
    {
      id: "",
      name: "",
      surname: "",
      email: "",
      tel: "",
      scool: "",
      title: "",
      scills: "",
      startStudy: "",
      endStudy: "",
      company: "",
      position: "",
      duties: "",
      startWork: "",
      endWork: ""
    };

  const [data, setData] = useState(initData);
  const [preview, setPreview] = useState(true);

  return (
    <>
      {preview ? (
        <Fragment>
          <p>Please fill out the following form.</p>
          <hr />
          <Person data={data} setData={setData} />
          <Education data={data} setData={setData} />
          <Experience data={data} setData={setData} />
        </Fragment>
      ) : (
        <Sample data={data} />
      )}
      <hr />
      <button
        key="preview"
        id="preview"
        type="button"
        onClick={()=>setPreview(!preview)}
        className="top-margin"
      >
        {preview ? "preview" : "redact"}
      </button>
    </>
  );
}
