import { useState } from 'react'

export default function Experience({ data, setData }) {

const [newData, setNewData] = useState(data);

  function handleExperience(e) {
    e.preventDefault();
    setNewData(data);
  }

  const lockButton = (function () {
    if (
      data.company === newData.company &&
      data.position === newData.position &&
      data.duties === newData.duties &&
      data.startWork === newData.startWork &&
      data.endWork === newData.endWork
    ) {
      return true;
    } else {
      return false;
    }
  })();

  return (
    <form
      className="element-flex dir-column top-margin"
      onSubmit={handleExperience}
    >
      <h2 className="self-start">Practical experience</h2>
      <label>
        Company name:
        <input
          key={data.id + "company"}
          id={data.id + "company"}
          name="name of the company"
          placeholder="company"
          autoComplete="off"
          value={data.company}
          onChange={(e) => setData({...data, company: e.target.value})}
          required
        />
        <span></span>
      </label>
      <label>
        Position title:
        <input
          key={data.id + "position"}
          id={data.id + "position"}
          name="position title"
          placeholder="position"
          autoComplete="off"
          value={data.position}
          onChange={(e) => setData({...data, position: e.target.value})}
          required
        />
        <span></span>
      </label>
      <label>
        Main responsibilities:
        <input
          key={data.id + "duty"}
          id={data.id + "duty"}
          name="main responsibilities"
          placeholder="responsibility"
          autoComplete="off"
          value={data.duties}
          onChange={(e) => setData({...data, duties: e.target.value})}
          required
        />
        <span></span>
      </label>
      <div className="element-flex just-around">
        <label className="element-flex dir-column elem-start">
          Start work:
          <div>
            <input
              className="self-start"
              type="date"
              key={data.id + "started"}
              id={data.id + "started"}
              name="getting started"
              autoComplete="off"
              value={data.startWork}
              onChange={(e) => setData({...data, startWork: e.target.value})}
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
              key={data.id + "finished"}
              id={data.id + "finished"}
              name="finished work"
              autoComplete="off"
              value={data.endWork}
              onChange={(e) => setData({...data, endWork: e.target.value})}
            />
          </div>
        </label>
      </div>
      <button
        key={data.id + "btnExper"}
        id={data.id + "btnExper"}
        disabled={lockButton}
        className="self-center top-margin"
      >
        confirm
      </button>
    </form>
  );
}
