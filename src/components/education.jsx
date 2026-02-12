export default function Education({ idData, data, setData }) {

  function handleEducation(e) {
    e.preventDefault();
    idData.scool = data.scool;
    idData.title = data.title;
    idData.scills = data.scills;
    idData.startStudy = data.startStudy;
    idData.endStudy = data.endStudy
  }

  const lockButton = (function () {
    if (
      data.scool === idData.scool &&
      data.title === idData.title &&
      data.scills === idData.scills &&
      data.startStudy === idData.startStudy &&
      data.endStudy === idData.endStudy
    ) {
      return true;
    } else {
      return false;
    }
  })();

  return (
    <>
      <form
        onSubmit={handleEducation}
        className="element-flex dir-column top-margin"
      >
        <h2 className="self-start">Educational status</h2>
        <label>
          Scool name:
          <input
            key={data.id + "scool"}
            id={data.id + "scool"}
            name="name of the institution"
            placeholder="scool"
            autoComplete="off"
            value={data.scool}
            onChange={(e) => setData({...data, scool: e.target.value})}
            required
          />
          <span></span>
        </label>
        <label>
          Title of study:
          <input
            key={data.id + "title"}
            id={data.id + "title"}
            name="title of study"
            placeholder="study"
            autoComplete="off"
            value={data.title}
            onChange={(e) => setData({...data, title: e.target.value})}
            required
          />
          <span></span>
        </label>
        <label>
          Programming skills:
          <input
            key={data.id + "scills"}
            id={data.id + "-scills"}
            name="programming skills"
            placeholder="skills"
            autoComplete="off"
            value={data.scills}
            onChange={(e) => setData({...data, scills: e.target.value})}
            required
          />
          <span></span>
        </label>
        <div className="element-flex just-around">
          <label className="element-flex dir-column elem-start">
            Start training:
            <div>
              <input
                className="self-start"
                type="date"
                key={data.id + "sartEduc"}
                id={data.id + "startEduc"}
                name="beginning of training"
                autoComplete="off"
                value={data.startStudy}
                onChange={(e) => setData({...data, startStudy: e.target.value})}
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
                key={data.id + "endStudy"}
                id={data.id + "endStudy"}
                name="end of traning"
                autoComplete="off"
                value={data.endStudy}
                onChange={(e) => setData({...data, endStudy: e.target.value})}
              />
              <span></span>
            </div>
          </label>
        </div>
        <button
          key={data.id + "btnStudy"}
          id={data.id + "btnStudy"}
          disabled={lockButton}
          className="self-center top-margin"
        >
          confirm
        </button>
      </form>
    </>
  );
}
