import { useState } from "react";

export default function Person({ data, setData }) {
  const firstSet = data.person ? data.person.firstName : "";
  const lastSet = data.person ? data.person.lastName : "";
  const emailSet = data.person ? data.person.email : "";
  const telSet = data.person ? data.person.tel : "";

  const [first, setFirst] = useState(firstSet);
  const [last, setLast] = useState(lastSet);
  const [email, setEmail] = useState(emailSet);
  const [tel, setTel] = useState(telSet);

  function handleSavePerson(e) {
    e.preventDefault();
    setData({
      ...data,
      person: {
        firstName: first,
        lastName: last,
        email: email,
        tel: tel,
      },
    });
  }

  const lockButton = (function () {
    if (
      data.person &&
      data.person.firstName === first &&
      data.person.lastName === last &&
      data.person.email === email &&
      data.person.tel === tel
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
        onSubmit={handleSavePerson}
      >
        <h2 className="self-start">Person details</h2>
        <label>
          First name:
          <input
            key={data.nickname + "-firstName"}
            id={data.nickname + "-firstName"}
            name="first name"
            placeholder="Name"
            autoComplete="off"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            required
          />
          <span></span>
        </label>
        <label>
          Last name:
          <input
            key={data.nickname + "-lastName"}
            id={data.nickname + "-lastName"}
            name="last name"
            placeholder="Surname"
            autoComplete="off"
            value={last}
            onChange={(e) => setLast(e.target.value)}
            required
          />
          <span></span>
        </label>
        <label>
          Email:
          <input
            type="email"
            key={data.nickname + "-email"}
            id={data.nickname + "-email"}
            name="email"
            placeholder="wood@good.win"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
              key={data.nickname + "-tel"}
              id={data.nickname + "-tel"}
              name="tel"
              placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              autoComplete="off"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              required
            />
            <span></span>
          </div>
        </label>
        <button
          key={data.nickname + "btnPerson"}
          id={data.nickname + "btnPerson"}
          className="self-center top-margin"
          disabled={lockButton}
        >
          confirm
        </button>
      </form>
    </>
  );
}
