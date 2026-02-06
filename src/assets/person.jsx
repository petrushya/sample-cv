import { useState } from "react";

export default function Person({ data, setData }) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

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

  data.person && console.log(data);
  return (
    <>
      <form onSabmit={handleSavePerson}>
        <h2>Person details</h2>
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
        <label>
          Phone number:
          <input
            type="tel"
            key={data.nickname + "-tel"}
            id={data.nickname + "-tel"}
            name="tel"
            placeholder="123-456-78-90"
            autoComplete="off"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            required
          />
          <span></span>
        </label>
        <button
          key={data.nickname + "btnPerson"}
          id={data.nickname + "btnPerson"}
        >
          confirm
        </button>
      </form>
    </>
  );
}
