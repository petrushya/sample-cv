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
    helpExpertObj.id = "p-ed-" + expert.length;
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
    <section className="mrn-tp">
      <div className="e-flx alg-cn jst-bw pdn-ln bg-gray">
        <h2>Practical experience</h2>
        <button
          className="bg-trs"
          name="visibility"
          onClick={() => setVisualEx(!visualEx)}
        >
          {visualEx ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}
        </button>
      </div>
      {visualEx && (
        <Fragment>
          <div className="e-flx alg-cn jst-bw pdn-ln bg-lgray">
            <h3>Place of work</h3>
            <button
              mame="addForm"
              type="button"
              className="bg-trs"
              onClick={handleExpertAdd}
            >
              more
            </button>
          </div>
          {expert.map((item, index) => (
            <form
              key={index + "formEx"}
              onSubmit={(e) => handleDataSave(e, index)}
              className="e-flx dir-cl"
            >
              {index > 0 && (
                <div className="e-flx alg-cn mrn-btm">
                  <button
                    mame="deleteForm"
                    type="button"
                    className="btn-sml bg-trs"
                    onClick={() => handleExpertDelete(index)}
                  >
                    &#x1F7AC;
                  </button>
                </div>
              )}
              <label>
                Company name:
                <input
                  id="company"
                  name="name of the company"
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
                  name="position title"
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
                  name="main responsibilities"
                  placeholder="responsibility"
                  autoComplete="off"
                  value={item.duties}
                  onChange={(e) => handleExpertValue(e, index)}
                  required
                />
                <span></span>
              </label>
              <div className="e-flx jst-arn">
                <label className="e-flx dir-cl alg-st">
                  Start work:
                  <div>
                    <input
                      id="startWork"
                      type="date"
                      name="getting started"
                      className="slf-st"
                      autoComplete="off"
                      value={item.startWork}
                      onChange={(e) => handleExpertValue(e, index)}
                      required
                    />
                    <span></span>
                  </div>
                </label>
                <label className="e-flx dir-cl alg-st">
                  End work:
                  <div>
                    <input
                      id="endWork"
                      type="date"
                      name="finished work"
                      className="slf-st"
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
