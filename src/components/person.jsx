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

  const lockButton = function () {
    const dataArr = Object.values(data).slice(0, 4);
    const personArr = Object.values(person).slice(0, 4);
    if (personArr.filter((item) => !dataArr.includes(item)).length) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
    <div className="e-fl e-c j-b bg-gray">
      <h2>General information</h2>
      <button onClick={()=>setVisualP(!visualP)}>
        {visualP ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}
      </button>
    </div>
      {visualP && (
      <form
        className="e-fl d-cl t-m"
        onSubmit={handlePerson}
      >
        <h2 className="sf-s">Person details</h2>
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
            onChange={(e) => setPerson({ ...person, surname: e.target.value })}
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
        <label className="e-fl">
          Phone number:
          <div>
            <small className="e-bl">Format: 123-456-7890</small>
            <input
              type="tel"
              id="phone"
              name="phone number"
              placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              autoComplete="off"
              value={person.phone}
              onChange={(e) => setPerson({ ...person, phone: e.target.value })}
              required
            />
            <span></span>
          </div>
        </label>
        <button
          id="btnPerson"
          className="sf-c t-m"
          disabled={lockButton}
        >
          confirm
        </button>
      </form>)}
    </>
  );
}
