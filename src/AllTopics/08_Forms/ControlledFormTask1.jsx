import { useState } from "react";

const ControlledFormTask1 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // stops page reload on form submission
    setMessage(
      `Welcome ${firstName} ${lastName}, you have successfully submitted the form!`,
    );
    setFirstName("");
    setLastName("");
    setDob("");
    setEmail("");
    setMobile("");
    let data = { User: { firstName, lastName, dob, email, mobile } };
    console.log(data);
    {
      console.log("Form Submitted");
    }
  };
  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setDob("");
    setEmail("");
    setMobile("");
    setMessage("");
  };

  return (
    <div>
      <h2>Controlled Form Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name: <br />
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>
            Last Name: <br />
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>
            Date of Birth: <br />
          </label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div>
          <label>
            Email: <br />
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>
            Mobile: <br />
          </label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
        <button type="reset" onClick={handleReset}>Reset</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
export default ControlledFormTask1;
