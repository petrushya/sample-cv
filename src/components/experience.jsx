import { useState } from "react";

export default function Experience({
  data,
  setData,
  preview,
  visualEx,
  setVisualEx,
}) {
  const lists = data.experience.map((item) => Object.assign({}, item));
  const [expert, setExpert] = useState(lists);

  function handleDataValue(e, idx) {
    const { name, value } = e.target;
    const helpData = [...data.experience];
    helpData[idx][name] = value;
    setData({ ...data, experience: helpData });
  }

  function handleEducSave(e) {
    e.preventDefault();
    setExpert(data.experience.map((item) => Object.assign({}, item)));
  }

  function handleAddLine() {
    const helpDL = {};
    Object.keys(Object.assign({}, lists[0])).map((key) => (helpDL[key] = ""));
    setData({ ...data, experience: [...data.experience, helpDL] });
    const helpEL = {};
    Object.keys(Object.assign({}, lists[0])).map((key) => (helpEL[key] = ""));
    setExpert([...expert, helpEL]);
  }

  function handleDeleteLine(idx) {
    const dataList = data.experience.filter((a, index) => index !== idx);
    setData({ ...data, experience: dataList });
    const expertList = expert.filter((a, index) => index !== idx);
    setExpert(expertList);
  }

  function lockButton(idx) {
    const expertArr = Object.values(expert[idx]);
    const dataArr = Object.values(data.experience[idx]);
    if (dataArr.filter((item) => !expertArr.includes(item)).length) {
      return false;
    } else {
      return true;
    }
  }

  function handleFaceForm() {
    setVisualEx(!visualEx);
  }

  const viewForm = (
    <>
      <div className="e-flx jst-bw pdn-ln bg-gray">
        <h2 className="pdn-bl">Practical experience</h2>
        <button className="bg-trs" name="visibilityEx" onClick={handleFaceForm}>
          {visualEx ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}
        </button>
      </div>
      {visualEx &&
        data.experience.map((item, index) => (
          <div key={"org" + index} className="form">
            <div className="e-flx jst-bw pdn-ln bg-lgray">
              <h3 className="pdn-bl">Place of work</h3>
              <button
                mame="controlForm"
                type="button"
                className="bg-trs"
                onClick={
                  index > 0 ? () => handleDeleteLine(index) : handleAddLine
                }
              >
                {index > 0 ? <span>&#x1F7AC;</span> : "more"}
              </button>
            </div>
            <form
              key={"expert" + index}
              onSubmit={handleEducSave}
              className="e-flx dir-cl"
            >
              {Object.keys(item).map(
                (key) =>
                  !key.match("Work") && (
                    <div
                      key={"ex" + key + index}
                      className="e-flx flx-wrp mrn-bt dw-100"
                    >
                      <label htmlFor={key + index} className="flx-b">
                        {key === "company"
                          ? "Company name:"
                          : key === "position"
                            ? "Position title:"
                            : "Main responsibilities:"}
                      </label>
                      <div className="flx-b e-flx aln-t">
                        <input
                          id={key + index}
                          name={key}
                          placeholder={
                            key === "company"
                              ? "Company name"
                              : key === "position"
                                ? "Position title"
                                : "Responsibilities"
                          }
                          autoComplete="off"
                          value={data.experience[index][key]}
                          onChange={(e) => handleDataValue(e, index)}
                          autoFocus={key === "company" ? true : false}
                          required
                        />
                        <span></span>
                      </div>
                    </div>
                  ),
              )}
              <div key={"expertDate" + index} className="e-flx dw-100 mrn-bt">
                {Object.keys(item).map(
                  (key) =>
                    key.match("Work") && (
                      <div
                        key={"ex" + key + index}
                        className={
                          "e-flx dir-cl flx-b" +
                          (key === "endWork" ? " mrn-lt" : "")
                        }
                      >
                        <label htmlFor={key + index} className="dw-100">
                          {key === "startWork" ? "Start work:" : "End work:"}
                        </label>
                        <div className={"e-flx aln-t dw-100"}>
                          <input
                            id={key + index}
                            name={key}
                            type="date"
                            autoComplete="off"
                            value={data.experience[index][key]}
                            onChange={(e) => handleDataValue(e, index)}
                            required={key === "startWork" ? true : false}
                          />
                          <span></span>
                        </div>
                      </div>
                    ),
                )}
              </div>
              <button
                name="confirm"
                disabled={(() => lockButton(index))()}
                className="slf-c mrn-t"
              >
                confirm
              </button>
            </form>
          </div>
        ))}
    </>
  );

  const viewSample = (
    <>
      <h3 className="pdn-bl">Experience</h3>
      {data.experience.map((item, index) => (
        <div key={index + "sampleEx"} className="bdr-t pdn-bl dw-100">
          <div className="e-flx aln-t jst-bw mrn-bt">
            <span className="fnt-lsz txt-lt">
              <em>
                <strong>{item.company}</strong>
              </em>
            </span>
            <span className="txt-rt">
              Work from {item.startWork || '" "'}
              <br />
              to {item.endWork || "the present"}
            </span>
          </div>
          <div className="e-flx dir-cl aln-t txt-lt">
            <span className="mrn-bt">
              Position title: <em className="fnt-lsz">{item.position}</em>
            </span>
            <span>
              Responsibilities: <em className="fnt-lsz">{item.duties}</em>
            </span>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <section className={preview ? "all-bdr" : "e-flx dir-cl pdn-ln bdr-bt"}>
      {preview ? viewForm : viewSample}
    </section>
  );
}
