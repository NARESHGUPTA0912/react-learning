import { useState } from "react";

const ControlledForm2 = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;  // e.target give input tag object and after object destructuring name and value are stored in object
    console.log(name, value);      // it prints name: username,    value:  value
    setFormData({ ...formData, [name]: value });  // if we use name without [] then it change key instead of value.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(formData);

    // to get existing user from local storage, if users are present then parse it else initialize with empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(users);
    // create user data with id
    // let userData = { ...formData, id: new Date().getTime() };
    let userData = { ...formData, id: Math.floor(Math.random() * 1000) }; // generates random id between 0 and 999
    // add user data to users array
    users.push(userData);
    // set users array to local storage after converting into json
    localStorage.setItem("users", JSON.stringify(users));

    // clear the form after submission (make sure that keys are same as input tag 'name' attribute)
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

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

export default ControlledForm2;
