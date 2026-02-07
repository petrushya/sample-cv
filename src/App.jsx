import { useState, Fragment } from "react";
import Nickname from "./assets/nickname";
import Person from "./assets/person";
import "./App.css";

export default function App() {
  const [data, setData] = useState({});

  return (
    <>
      {!data.nickname ? (
        <Nickname data={data} setData={setData} />
      ) : (
        <Fragment>
          <h2>Welcome &ldquo;{data.nickname}&rdquo;</h2>
          <p>Please fill out the following form.</p>
          <Person data={data} setData={setData} />
        </Fragment>
      )}
    </>
  );
}
