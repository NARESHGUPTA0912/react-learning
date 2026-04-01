import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    let payload = {
      email: form.email.trim(),
      password: form.password.trim(),
    };
    console.log(payload);
    sessionStorage.setItem("token", Date.now());
    navigate("/");
  };

  return (
    <section className="h-screen bg-gray-100 grid place-items-center">
      <form
        className="p-10 bg-white shadow-lg rounded scale-150"
        onSubmit={handleForm}
      >
        <h1 className="font-semibold text-xl mb-5">Login Form</h1>
        <div className="flex flex-col mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mt-4"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter Email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mt-4"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter Password"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
          >
            Login
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
