import { Fragment } from "react";

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
    <section className="mrn-t all-bdr">
      <div className="e-flx jst-bw pdn-ln bg-gray">
        <h2 className="pdn-bl">Educational status</h2>
        <button
          className="bg-trs"
          name="visibility"
          onClick={() => setVisualEd(!visualEd)}
        >
          {visualEd ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}
        </button>
      </div>
      {visualEd &&
        educ.map((item, index) => (
          <Fragment key={index + "-form"}>
            <div className="e-flx jst-bw pdn-ln bg-lgray">
              <h3 className="pdn-bl">Training institution</h3>
              {index > 0 ? (
                <button
                  mame="deleteForm"
                  type="button"
                  className="bg-trs"
                  onClick={() => handleEducDelete(index)}
                >
                  &#x1F7AC;
                </button>
              ) : (
                <button
                  mame="addForm"
                  type="button"
                  className="bg-trs"
                  onClick={handleEducAdd}
                >
                  more
                </button>
              )}
            </div>
            <form
              onSubmit={(e) => handleDataSave(e, index)}
              className="e-flx aln-d dir-cl"
            >
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
                  id="title"
                  name="title"
                  placeholder="title"
                  autoComplete="off"
                  value={item.title}
                  onChange={(e) => handleEducValue(e, index)}
                  required
                />
                <span></span>
              </label>
              <label>
                Programming skills:
                <input
                  id="skills"
                  name="skills"
                  placeholder="skills"
                  autoComplete="off"
                  value={item.skills}
                  onChange={(e) => handleEducValue(e, index)}
                  required
                />
                <span></span>
              </label>
              <div className="e-flx jst-ar dw-100">
                <label className="e-flx dir-cl aln-t">
                  Start training:
                  <div>
                    <input
                      className="mrn-lt-n"
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
                <label className="e-flx dir-cl aln-t">
                  End traning:
                  <div>
                    <input
                      className="mrn-lt-n"
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
                className="slf-c mrn-t"
              >
                confirm
              </button>
            </form>
          </Fragment>
        ))}
    </section>
  );
}
