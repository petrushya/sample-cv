import { useState } from "react";

export default function Person({
  person,
  setPerson,
  data,
  setData,
  visualP,
  setVisualP,
}) {
  function handlePerson(e) {
    e.preventDefault();
    setData(person);
  }

  function lockButton() {
    const dataArr = Object.values(data).slice(0, 4);
    const personArr = Object.values(person).slice(0, 4);
    if (personArr.filter((item) => !dataArr.includes(item)).length) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <section>
      <div className="e-flx alg-cn jst-bw pdn-ln bg-gray">
        <h2>General information</h2>
        <button
          className="bg-trs"
          name="show/hide"
          onClick={() => setVisualP(!visualP)}
        >
          {visualP ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}
        </button>
      </div>
      {visualP && (
        <div className="e-flx jst-st pdn-ln bg-lgray">
          <h3>Personal details</h3>
        </div>
      )}
      {visualP && (
        <form className="e-flx dir-cl" onSubmit={handlePerson}>
          <label>
            Name:
            <input
              id="name"
              name="first name"
              placeholder="Name"
              autoComplete="off"
              value={person.name}
              onChange={(e) => setPerson({ ...person, name: e.target.value })}
              required
            />
            <span></span>
          </label>
          <label>
            Surname:
            <input
              id="surname"
              name="surname"
              placeholder="Surname"
              autoComplete="off"
              value={person.surname}
              onChange={(e) =>
                setPerson({ ...person, surname: e.target.value })
              }
              required
            />
            <span></span>
          </label>
          <label>
            Email:
            <input
              type="email"
              id="email"
              name="email"
              placeholder="wood@good.win"
              autoComplete="off"
              value={person.email}
              onChange={(e) => setPerson({ ...person, email: e.target.value })}
              required
            />
            <span></span>
          </label>
          <label className="e-flx">
            Phone number:
            <div>
              <small className="blk">Format: 123-456-7890</small>
              <input
                type="tel"
                id="phone"
                name="phone number"
                placeholder="123-456-7890"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                autoComplete="off"
                value={person.phone}
                onChange={(e) =>
                  setPerson({ ...person, phone: e.target.value })
                }
                required
              />
              <span></span>
            </div>
          </label>
          <button
            name="confirm"
            className="slf-cn mrn-tp"
            disabled={lockButton()}
          >
            confirm
          </button>
        </form>
      )}
    </section>
  );
}
