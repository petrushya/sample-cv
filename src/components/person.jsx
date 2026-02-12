import { useState } from 'react'

export default function Person({ data, setData }) {

  const [newData, setNewData] = useState(data);

  function handlePerson(e) {
    e.preventDefault();
    setData({...data, id: data.name + data.surname});
    setNewData(data);
  }

  const lockButton = (function () {
    if (
      data.name === newData.name &&
      data.surname === newData.surname &&
      data.email === newData.email &&
      data.tel === newData.tel
    ) {
      return true;
    } else {
      return false;
    }
  })();

  return (
    <>
      <form
        className="element-flex dir-column top-margin"
        onSubmit={handlePerson}
      >
        <h2 className="self-start">Person details</h2>
        <label>
          Name:
          <input
            key={data.id + "name"}
            id={data.id + "name"}
            name="first name"
            placeholder="Name"
            autoComplete="off"
            value={data.name}
            onChange={(e) => setData({...data, name: e.target.value})}
            required
          />
          <span></span>
        </label>
        <label>
          Surname:
          <input
            key={data.id + "surname"}
            id={data.id + "surname"}
            name="surname"
            placeholder="Surname"
            autoComplete="off"
            value={data.surname}
            onChange={(e) => setData({...data, surname: e.target.value})}
            required
          />
          <span></span>
        </label>
        <label>
          Email:
          <input
            type="email"
            key={data.id + "email"}
            id={data.id + "email"}
            name="email"
            placeholder="wood@good.win"
            autoComplete="off"
            value={data.email}
            onChange={(e) => setData({...data, email: e.target.value})}
            required
          />
          <span></span>
        </label>
        <label className="element-flex">
          Phone number:
          <div>
            <small className="elem-block">Format: 123-456-7890</small>
            <input
              type="tel"
              key={data.id + "tel"}
              id={data.id + "tel"}
              name="phone number"
              placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              autoComplete="off"
              value={data.tel}
              onChange={(e) => setData({...data, tel: e.target.value})}
              required
            />
            <span></span>
          </div>
        </label>
        <button
          key={data.id + "btnPerson"}
          id={data.id + "btnPerson"}
          className="self-center top-margin"
          disabled={lockButton}
        >
          confirm
        </button>
      </form>
    </>
  );
}
