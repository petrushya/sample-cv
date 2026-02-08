import { useState } from "react";

export default function Experience({ data, setData }) {
  const companySet = data.experience ? data.experience.company : "";
  const positionSet = data.experience ? data.experience.position : "";
  const dutySet = data.experience ? data.experience.duty : "";
  const startWorkSet = data.experience ? data.experience.startWork : "";
  const endWorkSet = data.experience ? data.experience.endWork : "";

  const [company, setCompany] = useState(companySet);
  const [position, setPosition] = useState(positionSet);
  const [duty, setDuty] = useState(dutySet);
  const [startWork, setStartWork] = useState(startWorkSet);
  const [endWork, setEndWork] = useState(endWorkSet);

  function handleSaveExperience(e) {
    e.preventDefault();
    setData({
      ...data,
      experience: {
        company: company,
        position: position,
        duty: duty,
        startWork: startWork,
        endWork: endWork,
      },
    });
  }
  const lockButton = (function () {
    if (
      data.experience &&
      data.experience.company === company &&
      data.experience.position === position &&
      data.experience.duty === duty &&
      data.experience.startWork === startWork &&
      data.experience.endWork === endWork
    ) {
      return true;
    } else {
      return false;
    }
  })();

  return (
    <form
      className="element-flex dir-column top-margin"
      onSubmit={handleSaveExperience}
    >
      <h2 className="self-start">Practical experience</h2>
      <label>
        Company name:
        <input
          key={data.nickname + "-company"}
          id={data.nickname + "-company"}
          name="name of the company"
          placeholder="company"
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
        <span></span>
      </label>
      <label>
        Position title:
        <input
          key={data.nickname + "-position"}
          id={data.nickname + "-position"}
          name="position title"
          placeholder="position"
          autoComplete="off"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
        <span></span>
      </label>
      <label>
        Main responsibilities:
        <input
          key={data.nickname + "-duty"}
          id={data.nickname + "-duty"}
          name="main responsibilities"
          placeholder="responsibility"
          autoComplete="off"
          value={duty}
          onChange={(e) => setDuty(e.target.value)}
          required
        />
        <span></span>
      </label>
      <h4 className="self-start">Period of work:</h4>
      <div className="element-flex just-around">
        <label className="element-flex dir-column elem-start">
          Start work:
          <div>
            <input
              className="self-start"
              type="date"
              key={data.nickname + "-started"}
              id={data.nickname + "-started"}
              name="getting started"
              autoComplete="off"
              value={startWork}
              onChange={(e) => setStartWork(e.target.value)}
              required
            />
            <span></span>
          </div>
        </label>
        <label className="element-flex dir-column elem-start">
          End work:
          <div>
            <input
              className="self-start"
              type="date"
              key={data.nickname + "-finished"}
              id={data.nickname + "-finished"}
              name="finished work"
              autoComplete="off"
              value={endWork}
              onChange={(e) => setEndWork(e.target.value)}
            />
          </div>
        </label>
      </div>
      <button
        key={data.nickname + "-btnExper"}
        id={data.nickname + "-btnExper"}
        disabled={lockButton}
        className="self-center top-margin"
      >
        confirm
      </button>
    </form>
  );
}
