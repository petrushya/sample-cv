import { useState } from "react";

export default function Education({ data, setData }) {
  const [scool, setScool] = useState("");
  const [title, setTitle] = useState("");
  const [scills, setScills] = useState("");
  const [startEduc, setStartEduc] = useState("");
  const [endEduc, setEndEduc] = useState("");

  function handleSaveEduc(e) {
    e.preventDefault();
    setData({
      ...data,
      education: {
        scool: scool,
        title: title,
        scills: scills,
        startEduc: startEduc,
        endEduc: endEduc,
      },
    });
  }

  const lockButton = (function () {
    if (data.education) {
      return true;
    } else {
      return false;
    }
  })();

  console.log(data);
  return (
    <>
      <form
        onSubmit={handleSaveEduc}
        className="element-flex dir-column top-margin"
      >
        <h2 className="self-start">Educational status</h2>
        <label>
          Scool name:
          <input
            key={data.nickname + "-scool"}
            id={data.nickname + "-scool"}
            name="name of the institution"
            placeholder="scool"
            autoComplete="off"
            value={scool}
            onChange={(e) => setScool(e.target.value)}
            required
          />
          <span></span>
        </label>
        <label>
          Title of study:
          <input
            key={data.nickname + "-title"}
            id={data.nickname + "-title"}
            name="title of study"
            placeholder="study"
            autoComplete="off"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <span></span>
        </label>
        <label>
          Programming skills:
          <input
            key={data.nickname + "-scills"}
            id={data.nickname + "-scills"}
            name="programming skills"
            placeholder="skills"
            autoComplete="off"
            value={scills}
            onChange={(e) => setScills(e.target.value)}
            required
          />
          <span></span>
        </label>
        <h4 className="self-start">Date of study:</h4>
        <div className="element-flex just-around">
          <label className="element-flex dir-column elem-start">
            Start training:
            <div>
              <input
                className="self-start"
                type="date"
                key={data.nickname + "-sartEduc"}
                id={data.nickname + "-startEduc"}
                name="beginning of training"
                autoComplete="off"
                value={startEduc}
                onChange={(e) => setStartEduc(e.target.value)}
                required
              />
              <span></span>
            </div>
          </label>
          <label className="element-flex dir-column elem-start">
            End traning:
            <div>
              <input
                className="self-start"
                type="date"
                key={data.nickname + "-endEduc"}
                id={data.nickname + "-endEduc"}
                name="end of traning"
                autoComplete="off"
                value={endEduc}
                onChange={(e) => setEndEduc(e.target.value)}
              />
              <span></span>
            </div>
          </label>
        </div>
        <button
          key={data.nickname + "-btnEduc"}
          id={data.nickname + "-btnEduc"}
          disabled={lockButton}
          className="self-center top-margin"
        >
          confirm
        </button>
      </form>
    </>
  );
}
