import { useState } from "react";

export default function Nickname({ data, setData }) {
  const [nick, setNick] = useState("");

  function handleGetUser(e) {
    e.preventDefault();
    setData({ ...data, nickname: nick });
  }

  return (
    <>
      <h2>Create nickname</h2>
      <hr />
      <form onSubmit={handleGetUser}>
        <label>
          Enter you nickname (from 5 to 12 characters)
          <div>
            <input
              key="newUser"
              id="newUser"
              name="nickname"
              minLength="5"
              maxLength="12"
              placeholder="nickname"
              autoComplete="off"
              value={nick}
              onChange={(e) => setNick(e.target.value)}
              required
            />
            <span></span>
          </div>
        </label>
        <button key="saveUser" id="saveUser" className="top-margin">
          confirm
        </button>
      </form>
    </>
  );
}
