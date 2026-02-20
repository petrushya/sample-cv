import { useState, Fragment } from "react";

export default function Education({
  initData,
  educ,
  setEduc,
  data,
  setData,
  visualEd,
  setVisualEd,
}) {
  function handleDataSave(e, idx) {
    e.preventDefault();
    const helpDataObj = {};
    Object.assign(helpDataObj, educ[idx]);
    helpDataObj.id = educ[idx].id.slice(2);
    const helpData = [...data.education];
    helpData[idx] = helpDataObj;
    setData({ ...data, education: helpData });
  }

  function handleEducValue(e, idx) {
    const { id, value } = e.target;
    const list = [...educ];
    list[idx][id] = value;
    setEduc(list);
  }

  function handleEducAdd() {
    const helpEducObj = {};
    const helpDataObj = {};
    Object.assign(helpEducObj, initData.education[0]);
    Object.assign(helpDataObj, initData.education[0]);
    helpEducObj.id = "p-ed-" + educ.length;
    setEduc([...educ, helpEducObj]);
    helpDataObj.id = helpEducObj.id.slice(2);
    setData({ ...data, education: [...data.education, helpDataObj] });
  }

  function handleEducDelete(idx) {
    const educList = educ.filter((a, index) => index !== idx);
    setEduc(educList);
    const dataList = data.education.filter((a, index) => index !== idx);
    setData({ ...data, education: dataList });
  }

  function lockButton(idx) {
    const educArr = Object.values(educ[idx]);
    const dataArr = Object.values(data.education[idx]);
    if (
      educArr.slice(1).filter((item) => !dataArr.slice(1).includes(item)).length
    ) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <section className="mrn-tp">
      <div className="e-flx alg-cn jst-bw pdn-ln bg-gray">
        <h2>Educational status</h2>
        <button
          className="bg-trs"
          name="visibility"
          onClick={() => setVisualEd(!visualEd)}
        >
          {visualEd ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}
        </button>
      </div>
      {visualEd && (
        <Fragment>
          <div className="e-flx alg-cn jst-bw pdn-ln bg-lgray">
            <h3>Educational institution</h3>
            <button
              mame="addForm"
              type="button"
              className="bg-trs"
              onClick={handleEducAdd}
            >
              more
            </button>
          </div>
          {educ.map((item, index) => (
            <form
              key={index + "-form"}
              onSubmit={(e) => handleDataSave(e, index)}
              className="e-flx dir-cl"
            >
              {index > 0 && (
                <div className="e-flx alg-cn mrn-btm">
                  <button
                    mame="deleteForm"
                    type="button"
                    className="btn-sml bg-trs"
                    onClick={() => handleEducDelete(index)}
                  >
                    &#x1F7AC;
                  </button>
                </div>
              )}
              <label>
                Scool name:
                <input
                  id="school"
                  name="school"
                  placeholder="school"
                  autoComplete="off"
                  value={item.school}
                  onChange={(e) => handleEducValue(e, index)}
                  required
                />
                <span></span>
              </label>
              <label>
                Title of study:
                <input
                  id="degree"
                  name="degree"
                  placeholder="degree"
                  autoComplete="off"
                  value={item.degree}
                  onChange={(e) => handleEducValue(e, index)}
                  required
                />
                <span></span>
              </label>
              <label>
                Programming skills:
                <input
                  id="scills"
                  name="scills"
                  placeholder="skills"
                  autoComplete="off"
                  value={item.scills}
                  onChange={(e) => handleEducValue(e, index)}
                  required
                />
                <span></span>
              </label>
              <div className="e-flx jst-arn">
                <label className="e-flx dir-cl alg-st">
                  Start training:
                  <div>
                    <input
                      className="slf-st"
                      type="date"
                      id="startStudy"
                      name="startStudy"
                      autoComplete="off"
                      value={item.startStudy}
                      onChange={(e) => handleEducValue(e, index)}
                      required
                    />
                    <span></span>
                  </div>
                </label>
                <label className="e-flx dir-cl alg-st">
                  End traning:
                  <div>
                    <input
                      className="slf-st"
                      type="date"
                      id="endStudy"
                      name="endStudy"
                      autoComplete="off"
                      value={item.endStudy}
                      onChange={(e) => handleEducValue(e, index)}
                    />
                  </div>
                </label>
              </div>
              <button
                name="confirm"
                disabled={(() => lockButton(index))()}
                className="slf-cn mrn-tp"
              >
                confirm
              </button>
            </form>
          ))}
        </Fragment>
      )}
    </section>
  );
}
