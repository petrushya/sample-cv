import { Fragment } from "react";

export default function Experience({
  initData,
  expert,
  setExpert,
  data,
  setData,
  visualEx,
  setVisualEx,
}) {
  function handleDataSave(e, idx) {
    e.preventDefault();
    const helpDataObj = {};
    Object.assign(helpDataObj, expert[idx]);
    helpDataObj.id = expert[idx].id.slice(2);
    const helpData = [...data.experience];
    helpData[idx] = helpDataObj;
    setData({ ...data, experience: helpData });
  }

  function handleExpertValue(e, idx) {
    const { id, value } = e.target;
    const list = [...expert];
    list[idx][id] = value;
    setExpert(list);
  }

  function handleExpertAdd() {
    const helpExpertObj = {};
    const helpDataObj = {};
    Object.assign(helpExpertObj, initData.experience[0]);
    Object.assign(helpDataObj, initData.experience[0]);
    helpExpertObj.id = "p-ex-" + expert.length;
    setExpert([...expert, helpExpertObj]);
    helpDataObj.id = helpExpertObj.id.slice(2);
    setData({ ...data, experience: [...data.experience, helpDataObj] });
  }

  function handleExpertDelete(idx) {
    const expertList = expert.filter((a, index) => index !== idx);
    setExpert(expertList);
    const dataList = data.experience.filter((a, index) => index !== idx);
    setData({ ...data, experience: dataList });
  }

  function lockButton(idx) {
    const expertArr = Object.values(expert[idx]);
    const dataArr = Object.values(data.experience[idx]);
    if (
      expertArr.slice(1).filter((item) => !dataArr.slice(1).includes(item))
        .length
    ) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <section className="mrn-t all-bdr">
      <div className="e-flx aln-c jst-bw pdn-ln bg-gray">
        <h2 className="pdn-bl">Practical experience</h2>
        <button
          className="bg-trs"
          name="visibility"
          onClick={() => setVisualEx(!visualEx)}
        >
          {visualEx ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}
        </button>
      </div>
      {visualEx &&
        expert.map((item, index) => (
          <Fragment key={index + "formEx"}>
            <div className="e-flx jst-bw pdn-ln bg-lgray">
              <h3 className="pdn-bl">Place of work</h3>
              {index > 0 ? (
                <button
                  mame="deleteForm"
                  type="button"
                  className="bg-trs"
                  onClick={() => handleExpertDelete(index)}
                >
                  &#x1F7AC;
                </button>
              ) : (
                <button
                  mame="addForm"
                  type="button"
                  className="bg-trs"
                  onClick={handleExpertAdd}
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
                Company name:
                <input
                  id="company"
                  name="company"
                  placeholder="company"
                  autoComplete="off"
                  value={item.company}
                  onChange={(e) => handleExpertValue(e, index)}
                  required
                />
                <span></span>
              </label>
              <label>
                Position title:
                <input
                  id="position"
                  name="position"
                  placeholder="position"
                  autoComplete="off"
                  value={item.position}
                  onChange={(e) => handleExpertValue(e, index)}
                  required
                />
                <span></span>
              </label>
              <label>
                Main responsibilities:
                <input
                  id="duties"
                  name="duties"
                  placeholder="duties"
                  autoComplete="off"
                  value={item.duties}
                  onChange={(e) => handleExpertValue(e, index)}
                  required
                />
                <span></span>
              </label>
              <div className="e-flx jst-ar dw-100">
                <label className="e-flx dir-cl aln-t">
                  Start work:
                  <div>
                    <input
                      id="startWork"
                      type="date"
                      name="started"
                      className="mrn-lt-n"
                      autoComplete="off"
                      value={item.startWork}
                      onChange={(e) => handleExpertValue(e, index)}
                      required
                    />
                    <span></span>
                  </div>
                </label>
                <label className="e-flx dir-cl aln-t">
                  End work:
                  <div>
                    <input
                      id="endWork"
                      type="date"
                      name="finished"
                      className="mrn-lt-n"
                      autoComplete="off"
                      value={item.endWork}
                      onChange={(e) => handleExpertValue(e, index)}
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
