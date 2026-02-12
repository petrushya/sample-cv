import { useState, Fragment } from "react";
import Person from "./components/person";
import Education from "./components/education";
import Experience from "./components/experience";
import Page from "./components/sample";
import "./App.css";

const DATA = [];

export default function App() {

  const userIds = DATA.map(item => item.id);
  const [nick, setNick] = useState("");
  const idData = DATA[userIds.indexOf(nick)];
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

  function handleNick(e) {
    e.preventDefault();
    const newData = {...data, id: nick};
    setData(newData);
    DATA.push(newData);
  }

  return (
    <>
      {!data.id ? (
        <form onSubmit={handleNick}>
          <h2>Enter nickname</h2>
          <label>Nick (from 5 to 12 characters):
            <input
              key="nickPerson"
              id="nickPerson"
              name="nickname"
              minLength='5'
              maxLength='12'
              placeholder='nickname'
              autoComplete="off"
              value={nick}
              onChange={(e) => setNick(e.target.value)}
              required
            />
          </label>
          <button>confirm</button>
        </form>
      ) : preview ? (
        <Fragment>
          <h2>Welcome &ldquo;{nick}&rdquo;</h2>
          <p>Please fill out the following form.</p>
          <hr />
          <Person idData={idData} data={data} setData={setData} />
          <Education idData={idData} data={data} setData={setData} />
          <Experience idData={idData} data={data} setData={setData} />
        </Fragment>
      ) : (
        <Sample idData={idData} />
      )}
      <hr />
      {data.id && (
        <button
          key="preview"
          id="preview"
          type="button"
          onClick={()=>setPreview(!preview)}
          className="top-margin"
        >
          {preview ? "preview" : "redact"}
        </button>
      )}
    </>
  );
}
