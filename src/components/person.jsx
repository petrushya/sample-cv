import { useState } from "react";

export default function Person({ data, setData, preview, visualP, setVisualP }) {
  const helpData = {};
  Object.keys(data)
    .slice(0, 4)
    .map((key) => (helpData[key] = data[key]));
  const [person, setPerson] = useState(helpData);

  function handleSavePerson(e) {
    e.preventDefault();
    Object.keys(data)
      .slice(0, 4)
      .map((key) => (helpData[key] = data[key]));
    setPerson(helpData);
  }

  function lockButton() {
    const dataArr = Object.values(data).slice(0, 4);
    const personArr = Object.values(person);
    if (dataArr.filter((item) => !personArr.includes(item)).length) {
      return false;
    } else {
      return true;
    }
  }

  function handleFaceForm() {
    setVisualP(!visualP);
  }

  return (
    <>
      {preview ? (
        <section key="global" className="all-bdr">
          <div className="e-flx jst-bw pdn-ln bg-gray">
            <h2 className="pdn-bl">General information</h2>
            <button className="bg-trs" name="visibilityP" onClick={handleFaceForm}>
              {visualP ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}
            </button>
          </div>
          {visualP && (
            <form onSubmit={handleSavePerson} className="e-flx dir-cl">
              {Object.keys(data)
                .slice(0, 4)
                .map((key) =>
                  key !== "phone" ? (
                    <div key={key + "Person"} className="e-flx flx-wrp mrn-bt dw-100">
                      <label htmlFor={key} className="flx-b">
                        {key === "name" ? "Name:" : key === "surname" ? "Surname:" : "Email:"}
                      </label>
                      <div className="flx-b e-flx aln-t">
                        <input
                          id={key}
                          name={key}
                          type={key === "email" ? "email" : "text"}
                          placeholder={key === "name" ? "Name" : key === "surname" ? "Surname"
                          : "wood@good.win"}
                          autoComplete="off"
                          value={data[key]}
                          onChange={(e) => setData({ ...data, [key]: e.target.value })}
                          autoFocus={key === "name" ? true : false}
                          required
                        />
                        <span></span>
                      </div>
                    </div>
                  ) : (
                    <div key={key + "Person"} className="e-flx flx-wrp mrn-bt">
                      <label htmlFor={key} className="flx-b">
                        Phone number (<small>Format: 123-456-7890</small>):
                      </label>
                      <div className="flx-b e-flx aln-t">
                        <input
                          id={key}
                          name={key}
                          type="tel"
                          placeholder="123-456-7890"
                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                          autoComplete="off"
                          value={data.phone}
                          onChange={(e) => setData({ ...data, phone: e.target.value })}
                          required
                        />
                        <span></span>
                      </div>
                    </div>
                  ),
                )}
              <button name="confirm" className="mrn-t" disabled={lockButton()}>
                confirm
              </button>
            </form>
          )}
        </section>
      ) : (
        <section key="globalSample" className="e-flx aln-d jst-bw pdn-bl pdn-ln bdr-bt">
          <h2 className="pdn-bl mrn-bt txt-lt">
            <em>{data.name + " " + data.surname}</em>
          </h2>
          <table>
            <tbody>
              <tr>
                <th>Email:</th>
                <td>
                  <em>{data.email}</em>
                </td>
              </tr>
              <tr>
                <th>Phone:</th>
                <td>
                  <em>{data.phone}</em>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      )}
    </>
  );
}
