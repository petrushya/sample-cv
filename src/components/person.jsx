import { useState } from "react";

export default function Person({
  data,
  setData,
  preview,
  visualP,
  setVisualP,
}) {
  const keyPerson = Object.keys(data).slice(0, 4);
  const startPerson = {};
  keyPerson.map((key) => (startPerson[key] = data[key]));
  const [person, setPerson] = useState(startPerson);

  function handleSavePerson(e) {
    e.preventDefault();
    const helpPerson = {};
    keyPerson.map((key) => (helpPerson[key] = data[key]));
    setPerson(helpPerson);
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

  const viewForm = (
    <>
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
                <div
                  key={key + "Person"}
                  className="e-flx flx-wrp mrn-bt dw-100"
                >
                  <label htmlFor={key} className="flx-b">
                    {key === "name"
                      ? "Name:"
                      : key === "surname"
                        ? "Surname:"
                        : "Email:"}
                  </label>
                  <div className="flx-b e-flx aln-t">
                    <input
                      id={key}
                      name={key}
                      type={key === "email" ? "email" : "text"}
                      placeholder={
                        key === "name"
                          ? "Name"
                          : key === "surname"
                            ? "Surname"
                            : "wood@good.win"
                      }
                      autoComplete="off"
                      value={data[key]}
                      onChange={(e) =>
                        setData({ ...data, [key]: e.target.value })
                      }
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
                      onChange={(e) =>
                        setData({ ...data, phone: e.target.value })
                      }
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
    </>
  );

  const viewSample = (
    <>
      <h2 className="pdn-bl">
        <em>{data.name + " " + data.surname}</em>
      </h2>
      <div className="dw-100 e-flx jst-bw">
        <span>
          Phone: <em>{data.phone}</em>
        </span>
        <span>
          Email: <em>{data.email}</em>
        </span>
      </div>
    </>
  );

  return (
    <section className={preview ? "all-bdr mrn-bt" : "e-flx dir-cl pdn-ln bdr-bt"}>
      {preview ? viewForm : viewSample}
    </section>
  );
}
