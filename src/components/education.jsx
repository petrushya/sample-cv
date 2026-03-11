import { useState } from "react";

export default function Education({
  data,
  setData,
  preview,
  visualEd,
  setVisualEd,
}) {
  const lists = data.education.map((item) => Object.assign({}, item));
  const [educ, setEduc] = useState(lists);

  function handleDataValue(e, idx) {
    const { name, value } = e.target;
    const helpData = [...data.education];
    helpData[idx][name] = value;
    setData({ ...data, education: helpData });
  }

  function handleEducSave(e) {
    e.preventDefault();
    setEduc(data.education.map((item) => Object.assign({}, item)));
  }

  function handleAddLine() {
    const helpDL = {};
    Object.keys(Object.assign({}, lists[0])).map((key) => (helpDL[key] = ""));
    setData({ ...data, education: [...data.education, helpDL] });
    const helpEL = {};
    Object.keys(Object.assign({}, lists[0])).map((key) => (helpEL[key] = ""));
    setEduc([...educ, helpEL]);
  }

  function handleDeleteLine(idx) {
    const dataList = data.education.filter((a, index) => index !== idx);
    setData({ ...data, education: dataList });
    const educList = educ.filter((a, index) => index !== idx);
    setEduc(educList);
  }

  function lockButton(idx) {
    const educArr = Object.values(educ[idx]);
    const dataArr = Object.values(data.education[idx]);
    if (dataArr.filter((item) => !educArr.includes(item)).length) {
      return false;
    } else {
      return true;
    }
  }

  function handleFaceForm() {
    setVisualEd(!visualEd);
  }

  const viewForm = (
    <>
      <div className="e-flx jst-bw pdn-ln bg-gray">
        <h2 className="pdn-bl">Educational status</h2>
        <button className="bg-trs" name="visibilityEd" onClick={handleFaceForm}>
          {visualEd ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}
        </button>
      </div>
      {visualEd &&
        data.education.map((item, index) => (
          <div key={"dep" + index} className="form">
            <div className="e-flx jst-bw pdn-ln bg-lgray">
              <h3 className="pdn-bl">Training institution</h3>
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
              key={"educ" + index}
              onSubmit={handleEducSave}
              className="e-flx dir-cl"
            >
              {Object.keys(item).map(
                (key) =>
                  !key.match("Study") && (
                    <div
                      key={"ed" + key + index}
                      className="e-flx flx-wrp mrn-bt dw-100"
                    >
                      <label htmlFor={key + index} className="flx-b">
                        {key === "school"
                          ? "Scool name:"
                          : key === "title"
                            ? "Title of study:"
                            : "Programming skills:"}
                      </label>
                      <div className="flx-b e-flx aln-t">
                        <input
                          id={key + index}
                          name={key}
                          placeholder={
                            key === "school"
                              ? "Scool name:"
                              : key === "title"
                                ? "Title"
                                : "Skills"
                          }
                          autoComplete="off"
                          value={data.education[index][key]}
                          onChange={(e) => handleDataValue(e, index)}
                          autoFocus={key === "school" ? true : false}
                          required
                        />
                        <span></span>
                      </div>
                    </div>
                  ),
              )}
              <div key={"educDate" + index} className="e-flx dw-100 mrn-bt">
                {Object.keys(item).map(
                  (key) =>
                    key.match("Study") && (
                      <div
                        key={"ed" + key + index}
                        className={
                          "e-flx dir-cl flx-b" +
                          (key === "endStudy" ? " mrn-lt" : "")
                        }
                      >
                        <label htmlFor={key + index} className="dw-100">
                          {key === "startStudy"
                            ? "Start training:"
                            : "End traning:"}
                        </label>
                        <div className={"e-flx aln-t dw-100"}>
                          <input
                            id={key + index}
                            name={key}
                            type="date"
                            autoComplete="off"
                            value={data.education[index][key]}
                            onChange={(e) => handleDataValue(e, index)}
                            required={key === "startStudy" ? true : false}
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
      <h3 className="pdn-bl">Education</h3>
      {data.education.map((item, index) => (
        <div key={index + "sampleEd"} className="bdr-t pdn-bl dw-100">
          <div className="e-flx aln-t jst-bw mrn-bt">
            <span className="fnt-lsz txt-lt">
              <em>
                <strong>{item.school}</strong>
              </em>
            </span>
            <span className="txt-rt">
              Training from {item.startStudy || '" "'}
              <br />
              to {item.endStudy || "the present"}
            </span>
          </div>
          <div className="e-flx dir-cl aln-t txt-lt">
            <span className="mrn-bt">
              Title of the study: <em className="fnt-lsz">{item.title}</em>
            </span>
            <span>
              Main skills: <em className="fnt-lsz">{item.skills}</em>
            </span>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <section
      className={preview ? "all-bdr mrn-bt" : "e-flx dir-cl pdn-ln bdr-bt"}
    >
      {preview ? viewForm : viewSample}
    </section>
  );
}
