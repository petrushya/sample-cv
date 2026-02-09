import { useState, Fragment } from "react";
import Nickname from "./assets/nickname";
import Person from "./assets/person";
import Education from "./assets/education";
import Experience from "./assets/experience";
import Page from "./assets/sample";
import "./App.css";

export default function App() {
  const [data, setData] = useState({});
  const [isEdit, setIsEdit] = useState(true);

  const lockIsEditBtn = (function () {
    return Object.keys(data).length === 4 ? false : true;
  })();

  function handleIsEdit() {
    setIsEdit(!isEdit);
  }
  return (
    <>
      {!data.nickname ? (
        <Nickname data={data} setData={setData} />
      ) : isEdit ? (
        <Fragment>
          <h2>Welcome &ldquo;{data.nickname}&rdquo;</h2>
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
      {data.nickname && (
        <button
          key="isEdit"
          id="isEdit"
          type="button"
          onClick={handleIsEdit}
          disabled={lockIsEditBtn}
          className="top-margin"
        >
          {isEdit ? "save&show" : "redact"}
        </button>
      )}
    </>
  );
}
