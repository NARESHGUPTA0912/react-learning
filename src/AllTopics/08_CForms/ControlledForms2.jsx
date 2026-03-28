import { useState } from "react";

const ControlledForms2 = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;  // e.target give input tag object and after object destructuring name and value are stored in object
    console.log(name,":", value);      // it prints name: username,    value:  value
    setFormData({ ...formData, [name]: value }); 
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(formData);

    setFormData({
      username: "",
      email: "",
      password: "",
    });
  }
  
  return (
    <div>
      <h1>Learn Controlled Forms</h1>
      <p>Manage multiple inputs with single state</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledForms2;